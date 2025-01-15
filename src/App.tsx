import {
  ChangeEvent,
  CSSProperties,
  Fragment,
  LegacyRef,
  useRef,
  useState,
} from "react";
import Draggable from "./components/Draggable";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { DataDraggable, HtmlValues } from "./utils/interfaces";
import DroppableSection from "./components/DroppableSection";
import SettingSection from "./components/SettingSection";

// const dataDummy = [
//   { title: "title", value: "<h1>title</h1>" },
//   { title: "subtitle", value: "<h2>subtitle</h2>" },
//   { title: "call to action", value: "<button>subtitle</button>" },
// ];

const dataDraggable: DataDraggable[] = [
  {
    title: "title",
    content: {
      openingTag: "<h1>",
      closingTag: "</h1>",
      value: "Your Title",
      style: {
        width: "100%",
        borderWidth: 5,
        borderStyle: "solid",
        borderColor: "red",
        margin: "0 auto",
        display: "block",
        fontSize: 22,
        textAlign: "center",
        color: "black",
        background: "transparent",
      },
    },
  },
  {
    title: "subtitle",
    content: {
      openingTag: "<h2>",
      closingTag: "</h2>",
      value: "Your Subtitle",
      style: {
        width: "100%",
        borderWidth: 5,
        borderStyle: "solid",
        borderColor: "yellow",
        margin: "0 auto",
        display: "block",
        fontSize: 16,
        textAlign: "center",
        color: "black",
        background: "transparent",
      },
    },
  },
  {
    title: "call to action",
    content: {
      openingTag: "<button>",
      closingTag: "</button>",
      value: "button",
      style: {
        width: "100px",
        margin: "0 auto",
        display: "block",
        fontSize: 16,
        textAlign: "center",
        color: "white",
        background: "blue",
        borderWidth: 0,
      },
    },
  },
];

const initialHtmlValue: HtmlValues = {
  openingTag: "<p>",
  closingTag: "</p>",
  value: "Drop Your Element Here",
  style: {
    width: "100%",
    fontSize: 12,
    textAlign: "center",
    // borderWidth: "2px",
    // borderStyle: "dashed",
    // borderColor: "black",
    padding: "10px 0",
  },
};

export default function App() {
  const droppableRef: LegacyRef<HTMLDivElement> | undefined = useRef(null);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const [htmlValues2, setHtmlValues2] = useState<HtmlValues[]>([
    initialHtmlValue,
  ]);

  const dataElement = dataDraggable;

  const draggableMarkup =
    dataElement &&
    dataElement.length > 0 &&
    dataElement.map((e) => (
      <Fragment key={e.title}>
        <Draggable id={e.title} value={e.content}>
          <div className="w-full h-full border-2 border-red-500">{e.title}</div>
        </Draggable>
      </Fragment>
    ));

  const handleDragEnd = (event: DragEndEvent) => {
    if (
      event.collisions &&
      event.collisions.length > 0 &&
      event.collisions[0] &&
      event.collisions[0].id
    ) {
      const existing2: HtmlValues[] = Array.from(htmlValues2);
      const index: number = event.collisions[0].id as number;
      const newVal: HtmlValues = event.active.data.current as HtmlValues;
      existing2[index] = newVal;
      setHtmlValues2(existing2);
      setActiveSection(index);
    } else {
      console.log("drag in the wrong zone");
    }
  };

  const handleAddSection = () => {
    const existing2 = Array.from(htmlValues2);
    existing2.push(initialHtmlValue);
    console.log(existing2);
    setHtmlValues2(existing2);
  };

  const handleDeleteSection = (index: number) => {
    if (activeSection && activeSection > htmlValues2.length - 2) {
      setActiveSection(null);
    }

    const existing2 = Array.from(htmlValues2);
    existing2.splice(index, 1);
    console.log(existing2);
    setHtmlValues2(existing2);
  };

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const existing: HtmlValues[] = Array.from(htmlValues2);
    existing[index] = {
      ...existing[index],
      value: e.target.value,
    };

    setHtmlValues2(existing);
  };

  const handleChangeFontSize = (value: number) => {
    console.log("activeSection", activeSection);

    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = { ...existingStyle, fontSize: value };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangeFontColor = (value: string) => {
    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = { ...existingStyle, color: value };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangeTextAlign = (value: CanvasTextAlign) => {
    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = { ...existingStyle, textAlign: value };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangeBackgroundColor = (value: string) => {
    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = { ...existingStyle, background: value };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangeBorderWidth = (value: number) => {
    console.log("activeSection", activeSection);

    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = { ...existingStyle, borderWidth: value };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangeBorderColor = (value: string) => {
    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = { ...existingStyle, borderColor: value };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangeBorderRadius = (value: number) => {
    console.log("activeSection", activeSection);

    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = { ...existingStyle, borderRadius: value };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangeBorderStyle = (value: string) => {
    console.log("activeSection", activeSection);

    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = { ...existingStyle, borderStyle: value };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangeWidth = (value: number) => {
    console.log("activeSection", activeSection);

    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = { ...existingStyle, width: value };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangeHeight = (value: number) => {
    console.log("activeSection", activeSection);

    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = { ...existingStyle, height: value };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangePaddingTop = (value: number) => {
    console.log("activeSection", activeSection);

    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = { ...existingStyle, paddingTop: value };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangePaddingLeft = (value: number) => {
    console.log("activeSection", activeSection);

    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = { ...existingStyle, paddingLeft: value };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangePaddingRight = (value: number) => {
    console.log("activeSection", activeSection);

    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = { ...existingStyle, paddingRight: value };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangePaddingBottom = (value: number) => {
    console.log("activeSection", activeSection);

    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = {
        ...existingStyle,
        paddingBottom: value,
      };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangeMarginTop = (value: number) => {
    console.log("activeSection", activeSection);

    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = {
        ...existingStyle,
        marginTop: value,
      };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };
  const handleChangeMarginLeft = (value: number) => {
    console.log("activeSection", activeSection);

    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = {
        ...existingStyle,
        marginLeft: value,
      };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };
  const handleChangeMarginRight = (value: number) => {
    console.log("activeSection", activeSection);

    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = {
        ...existingStyle,
        marginRight: value,
      };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  const handleChangeMarginBottom = (value: number) => {
    console.log("activeSection", activeSection);

    if (activeSection !== null) {
      const existing = Array.from(htmlValues2);
      const existingStyle = existing[activeSection].style;
      const newStyle: CSSProperties = {
        ...existingStyle,
        marginBottom: value,
      };
      existing[activeSection] = {
        ...existing[activeSection],
        style: newStyle,
      };
      setHtmlValues2(existing);
    } else {
      console.log("no active section");
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <div className="font-bold">lets try drag and drop!</div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex w-full h-full border-2 border-red-500">
          <div className="w-[350px] h-full border-4 border-green-300 flex flex-col">
            <div className="h-full">
              <div className="border-b-2 border-black">Element (draggable)</div>
              <div className="px-2 pt-4 grid grid-cols-3 gap-4">
                {draggableMarkup}
              </div>
            </div>

            <div className="h-full">
              <SettingSection
                handleChangeFontSize={handleChangeFontSize}
                handleChangeFontColor={handleChangeFontColor}
                handleChangeTextAlign={handleChangeTextAlign}
                handleChangeBackgroundColor={handleChangeBackgroundColor}
                handleChangeBorderWidth={handleChangeBorderWidth}
                handleChangeBorderColor={handleChangeBorderColor}
                handleChangeBorderRadius={handleChangeBorderRadius}
                handleChangeBorderStyle={handleChangeBorderStyle}
                handleChangeWidth={handleChangeWidth}
                handleChangeHeight={handleChangeHeight}
                handleChangePaddingTop={handleChangePaddingTop}
                handleChangePaddingLeft={handleChangePaddingLeft}
                handleChangePaddingRight={handleChangePaddingRight}
                handleChangePaddingBottom={handleChangePaddingBottom}
                handleChangeMarginTop={handleChangeMarginTop}
                handleChangeMarginLeft={handleChangeMarginLeft}
                handleChangeMarginRight={handleChangeMarginRight}
                handleChangeMarginBottom={handleChangeMarginBottom}
                currentStyle={
                  activeSection !== null
                    ? (htmlValues2[activeSection!].style as CSSProperties)
                    : {
                        fontSize: 12,
                        color: "transparent",
                        background: "transparent",
                        borderWidth: 0,
                      }
                }
              />
            </div>
          </div>
          <DroppableSection
            droppableRef={droppableRef}
            htmlValues2={htmlValues2}
            setActiveSection={setActiveSection}
            handleChangeInput={handleChangeInput}
            handleDeleteSection={handleDeleteSection}
            handleAddSection={handleAddSection}
          />
        </div>
      </DndContext>
    </div>
  );
}
