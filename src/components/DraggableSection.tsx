import { Fragment } from "react";

import { DataDraggable } from "../utils/interfaces";
import Draggable from "./Draggable";
import DraggableWithToggle from "./DraggableWithToggle";

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
  {
    title: "hoho",
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
    title: "haha",
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
];

const dataElement = dataDraggable;

export default function DraggableSection() {
  const draggableMarkup =
    dataElement &&
    dataElement.length > 0 &&
    dataElement.map((e) => (
      <Fragment key={e.title}>
          <Draggable id={e.title} value={e.content}>
            <div className="border-2 w-full border-pink-500 py-2 px-12 rounded-xl text-center">
              {e.title}
            </div>
          </Draggable>
      </Fragment>
    ));
  return <div className="px-8 pt-4 flex flex-col gap-8">{draggableMarkup}</div>;
}
