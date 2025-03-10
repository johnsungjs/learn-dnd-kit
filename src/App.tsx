import { ChangeEvent, LegacyRef, useRef, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { HtmlValues } from "./utils/interfaces";
import DroppableSection from "./components/DroppableSection";
import DraggableSection from "./components/DraggableSection";
import {
  blankCanvasMessage,
  isNumeric,
  reorderList,
  stringToInt,
} from "./utils/util";
import WebComponentSettings from "./components/WebComponentSettings";

const initialHtmlValue: HtmlValues = {
  openingTag: "<p>",
  closingTag: "</p>",
  value: blankCanvasMessage,
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
    let collisionsIdx: number | null = null;

    //CHECKING COMPONENT DROPPED INSIDE DROPPABLE ZONE
    if (event.over && event.over && event.over.id) {
      collisionsIdx = stringToInt(event.over.id as string);
    }

    //HANDLE INVALID COLLITION IDX
    if (collisionsIdx === null) {
      console.log(
        "outside droppable with value collition Idx of ",
        collisionsIdx
      );
      return;
    }

    //FOR SCENARIO CANVAS TO CANVAS
    if (isNumeric(event.active.id)) {
      const existing: HtmlValues[] = Array.from(htmlValues2);
      const sourceIdx = stringToInt(event.active.id as string);
      const destinationIdx = collisionsIdx;
      const newArr = reorderList(existing, sourceIdx!, destinationIdx);
      setHtmlValues2(newArr);
      return;
    }

    //FOR SCENARIO WEB COMPONENT TO CANVAS
    const existing: HtmlValues[] = Array.from(htmlValues2);
    const index: number = collisionsIdx!;
    const newVal: HtmlValues = event.active.data.current as HtmlValues;
    existing[index] = newVal;
    existing[existing.length - 1].value !== blankCanvasMessage &&
      existing.push(initialHtmlValue);

    setHtmlValues2(existing);
    setActiveSection(index);
    return;
  };

  const handleDeleteSection = (index: number) => {
    if (activeSection && activeSection > htmlValues2.length - 2) {
      setActiveSection(null);
    }

    const existing2 = Array.from(htmlValues2);
    existing2.splice(index, 1);
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
    <div
      className="flex flex-col h-screen w-screen overflow-hidden"
      onClick={() => setActiveSection(null)}
    >
      <div className="font-bold text-center pt-4 pb-2 text-4xl">
        Okeo Funnel
      </div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex w-full h-full border-t-2 border-slate-600">
          {activeSection === null ? (
            <DraggableSection />
          ) : (
            <WebComponentSettings />
          )}
          <DroppableSection
            droppableRef={droppableRef}
            htmlValues2={htmlValues2}
            setActiveSection={setActiveSection}
            handleChangeInput={handleChangeInput}
            handleDeleteSection={handleDeleteSection}
          />
        </div>
      </DndContext>
    </div>
  );
}
