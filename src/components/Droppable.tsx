import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

interface DroppableProps {
  children: ReactNode;
  id: string;
}

export default function Droppable({ children, id }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const style = {
    opacity: isOver ? 0.3 : 1,
    // border: isOver ? '2px dashed grey' : 'none'
  };
  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
