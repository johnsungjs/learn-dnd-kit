import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

interface DroppableProps {
  children: ReactNode;
  id: string;
  setHoverIndex: (index: number | null) => void;
}

export default function DroppableExpanded({ children, id, setHoverIndex }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      onMouseEnter={() => setHoverIndex(Number(id))}
      onMouseLeave={() => setHoverIndex(null)}
    >
      {children}
    </div>
  );
}
