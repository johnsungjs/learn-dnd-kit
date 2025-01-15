import { ChangeEvent, LegacyRef } from "react";
import Droppable from "./Droppable";
import { HtmlValues } from "../utils/interfaces";

interface DroppableSection {
  droppableRef: LegacyRef<HTMLDivElement> | undefined;
  htmlValues2: HtmlValues[];
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  handleDeleteSection: (index: number) => void;
  handleAddSection: () => void;
  setActiveSection: (input: number) => void;
}

export default function DroppableSection({
  droppableRef,
  htmlValues2,
  handleChangeInput,
  handleDeleteSection,
  handleAddSection,
  setActiveSection,
}: DroppableSection) {
  return (
    <>
      <div className="w-full h-full max-h-full py-10 border-2 border-purple-500 overflow-y-auto">
        <div
          className="max-w-[450px] mx-auto border-2 border-black"
          ref={droppableRef}
        >
          {htmlValues2.map((htmlValue: HtmlValues, index: number) => (
            <div
              key={index}
              // className="max-w-[450px] py-4 mx-auto border-2 border-yellow-600 border-dashed group relative"
              className="w-full group relative"
            >
              <Droppable id={index.toString()}>
                <input
                  disabled={
                    htmlValues2[index].value === "Drop Your Element Here"
                  }
                  style={{ background: "transparent", ...htmlValue.style }}
                  className="border-2 disabled:opacity-70"
                  value={htmlValues2[index].value}
                  onClick={() => setActiveSection(index)}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChangeInput(e, index)
                  }
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
        </div>

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
    </>
  );
}
