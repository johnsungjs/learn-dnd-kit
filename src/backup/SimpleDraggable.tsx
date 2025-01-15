import { useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";

interface DraggableProps {
  children: ReactNode;
  id: string;
}

export default function Draggable({ children, id }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: {
      nama: 'john',
      nip: '23020224'
    }
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
