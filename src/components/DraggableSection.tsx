import { Fragment } from "react";

import { DataDraggable } from "../utils/interfaces";
import Draggable from "./Draggable";

const dataDraggable: DataDraggable[] = [
  {
    title: "Jumbotron",
    content: {
      openingTag: "<h1>",
      closingTag: "</h1>",
      value: "Your Title",
      style: {
        width: "100%",
        borderWidth: 5,
        borderStyle: "solid",
        borderColor: "grey",
        margin: "0 auto",
        padding: "12px auto",
        display: "block",
        fontSize: 22,
        textAlign: "center",
        color: "black",
        background: "transparent",
      },
    },
  },
  {
    title: "Section",
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
        padding: "4px auto",
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

const dataElement = dataDraggable;

export default function DraggableSection() {
  const draggableMarkup =
    dataElement &&
    dataElement.length > 0 &&
    dataElement.map((e) => (
      <Fragment key={e.title}>
        <Draggable id={e.title} value={e.content}>
          <div className="border-2 w-full border-teal-400 py-2 px-12 rounded-xl text-center">
            {e.title}
          </div>
        </Draggable>
      </Fragment>
    ));

  const draggableCloneShadow =
    dataElement &&
    dataElement.length > 0 &&
    dataElement.map((e) => (
      <Fragment key={e.title}>
        <div className="border-2 w-full border-slate-300 py-2 px-12 rounded-xl text-center">
          {e.title}
        </div>
      </Fragment>
    ));
  return (
    <>
      <div className="relative">
        <div className="px-8 pt-4 flex flex-col gap-8 absolute -z-10 opacity-50">
          {draggableCloneShadow}
        </div>
        <div className="px-8 pt-4 flex flex-col gap-8">{draggableMarkup}</div>
      </div>
    </>
  );
}
