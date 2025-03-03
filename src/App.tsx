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
import { HtmlValues } from "./utils/interfaces";
import DroppableSection from "./components/DroppableSection";
import DraggableSection from "./components/DraggableSection";

const initialHtmlValue: HtmlValues = {
  openingTag: "<p>",
  closingTag: "</p>",
  value: "Drop Your Element Here",
  style: {
    width: "100%",
    fontSize: 12,
    textAlign: "center",
    padding: "10px 0",
  },
};

export default function App() {
  const droppableRef: LegacyRef<HTMLDivElement> | undefined = useRef(null);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const [htmlValues2, setHtmlValues2] = useState<HtmlValues[]>([
    initialHtmlValue,
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    console.log("event", event);
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
    // console.log("existing data", existing2);
    setHtmlValues2(existing2);
  };

  const handleDeleteSection = (index: number) => {
    if (activeSection && activeSection > htmlValues2.length - 2) {
      setActiveSection(null);
    }

    const existing2 = Array.from(htmlValues2);
    existing2.splice(index, 1);
    // console.log(existing2);
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

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <div className="font-bold text-center pt-4 pb-2 text-4xl">
        Okeo Funnel
      </div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex w-full h-full border-t-2 border-slate-600">
          <DraggableSection />
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
