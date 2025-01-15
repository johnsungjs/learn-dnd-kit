import { ReactNode, useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  children: ReactNode;
}

interface DraggableProps {
  children: ReactNode;
}

function Droppable({ children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const style = {
    color: isOver ? "yellow" : undefined,
  };
  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

function Draggable({ children }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
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


export default function App() {
  const handleDragEnd = (event: any) => {
    console.log("type: ", event);

    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  };

  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
    </DndContext>
  );
}
