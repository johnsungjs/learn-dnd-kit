import { useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";
import { HtmlValues } from "../utils/interfaces";

interface DraggableProps {
  children: ReactNode;
  id: string;
  value: HtmlValues;
}

export default function DraggableWithToggle({
  children,
  id,
  value,
}: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: value,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {
        cursor: "auto",
      };

  return (
    <div className="group relative" style={style} {...attributes} role="div">
      <button
        className="absolute bg-green-500 w-5 h-5 top-3 -left-3 group-hover:block rounded-full"
        ref={setNodeRef}
        {...listeners}
      />
      {children}
    </div>
  );
}
