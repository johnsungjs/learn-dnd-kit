import { useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";
import { HtmlValues } from "../utils/interfaces";

interface DraggableProps {
  children: ReactNode;
  id: string;
  value: HtmlValues;
}

export default function Draggable({ children, id, value }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: value,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
}
