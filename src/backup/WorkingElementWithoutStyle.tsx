import { Fragment, useRef, useState } from "react";
import Draggable from "./components/Draggable";
import { DndContext } from "@dnd-kit/core";
import Droppable from "./components/Droppable";

const dataDummy = [
  { title: "title", value: "<h1>title</h1>" },
  { title: "subtitle", value: "<h2>subtitle</h2>" },
  { title: "call to action", value: "<button>subtitle</button>" },
];

const dataDummy2 = [
  {
    title: "title",
    value: {
      openingTag: "<h1>",
      closingTag: "</h1>",
      value: "Your Title",
      style: "",
    },
  },
  {
    title: "subtitle",
    value: {
      openingTag: "<h2>",
      closingTag: "</h2>",
      value: "Your Subtitle",
      style: "",
    },
  },
  {
    title: "call to action",
    value: {
      openingTag: "<button>",
      closingTag: "</button>",
      value: "Call To Action Message",
      style: "",
    },
  },
];

interface HtmlValues {
  openingTag: string;
  closingTag: string;
  value: string;
  style: string;
}

const initialHtmlValue = {
  openingTag: "<p>",
  closingTag: "</p>",
  value: "Drop Your Element Here",
  style: "",
};

export default function App() {
  const droppableRef = useRef<any>(null);
  // const [htmlValues, setHtmlValues] = useState<string[]>(["drop element here"]);

  const [htmlValues2, setHtmlValues2] = useState<HtmlValues[]>([
    initialHtmlValue,
  ]);

  // const dataElement = dataDummy;
  const dataElement = dataDummy2;

  const draggableMarkup =
    dataElement &&
    dataElement.length > 0 &&
    dataElement.map((e) => (
      <Fragment key={e.title}>
        <Draggable id={e.title} value={e.value}>
          <div className="w-full h-full border-2 border-red-500">{e.title}</div>
        </Draggable>
      </Fragment>
    ));

  const handleDragEnd = (event: any) => {
    if (
      event.collisions &&
      event.collisions.length > 0 &&
      event.collisions[0].id
    ) {
      // let existing = Array.from(htmlValues);
      // existing[event.collisions[0].id] = event.active.data.current;
      // console.log(existing);
      // setHtmlValues(existing);

      const existing2 = Array.from(htmlValues2);
      existing2[event.collisions[0].id] = event.active.data.current;
      console.log(existing2);
      setHtmlValues2(existing2);
    } else {
      console.log("drag in the wrong zone");
    }
  };

  const handleAddSection = () => {
    // const existing = Array.from(htmlValues);
    // existing.push("drop element here");
    // console.log(existing);
    // setHtmlValues(existing);

    const existing2 = Array.from(htmlValues2);
    existing2.push(initialHtmlValue);
    console.log(existing2);
    setHtmlValues2(existing2);
  };

  const handleDeleteSection = (index: number) => {
    // const existing = Array.from(htmlValues);
    // existing.splice(index, 1);
    // console.log(existing);
    // setHtmlValues(existing);

    const existing2 = Array.from(htmlValues2);
    existing2.splice(index, 1);
    console.log(existing2);
    setHtmlValues2(existing2);
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <div className="font-bold">lets try drag and drop!</div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex w-full h-full border-2 border-red-500">
          <div className="w-[350px] h-full border-2 border-green-300">
            <div className="border-b-2 border-black">Element (draggable)</div>
            <div className="px-2 pt-4 grid grid-cols-3 gap-4">
              {draggableMarkup}
            </div>
          </div>
          <div
            className="w-full h-full max-h-full py-10 border-2 border-purple-500 overflow-y-auto"
            ref={droppableRef}
          >
            {htmlValues2.map((e, index: number) => (
              <div
                key={index}
                className="max-w-[450px] py-4 mx-auto border-2 border-yellow-600 border-dashed group relative"
              >
                <Droppable id={index.toString()}>
                  {/* <div>{htmlValues[index]}</div> */}
                  {/* <div>{JSON.stringify(htmlValues2[index].value)}</div> */}

                  <input
                    className="bg-white border-2"
                    value={htmlValues2[index].value}
                    onChange={(e) => {
                      const existing: any = Array.from(htmlValues2);
                      console.log("before", existing);
                      existing[index] = {...existing[index], value: e.target.value};
                      console.log("after", existing);

                      setHtmlValues2(existing);
                    }}
                  />
                </Droppable>
                {htmlValues2.length > 1 && (
                  <button
                    className="absolute bg-red-500 w-4 h-4 top-1 right-1 hidden group-hover:block"
                    onClick={() => {
                      handleDeleteSection(index);
                    }}
                  />
                )}
              </div>
            ))}

            <div className="pt-4 text-center">
              <button
                className="px-2 py-1 text-sm text-white bg-blue-500 rounded-xl"
                onClick={() => {
                  handleAddSection();
                }}
              >
                + tambah element
              </button>
            </div>
          </div>
        </div>
      </DndContext>
    </div>
  );
}
