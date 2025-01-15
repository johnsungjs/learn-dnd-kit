export default function PlainLayoutBackup() {
  return (
    <div className="flex flex-col h-screen w-screen ">
      <div className="font-bold">lets try drag and drop!</div>
      <div className="flex w-full h-full border-2 border-red-500">
        <div className="w-[350px] h-full border-2 border-green-300">
          <div className="border-b-2 border-black">Element (draggable)</div>
          <div className="px-2 pt-4 grid grid-cols-3 gap-4">
            <div className="border-2 border-red-500">blok 1</div>
            <div className="border-2 border-red-500">blok 2</div>
            <div className="border-2 border-red-500">blok 3</div>
            <div className="border-2 border-red-500">blok 4</div>
            <div className="border-2 border-red-500">blok 5</div>
            <div className="border-2 border-red-500">blok 6</div>
            <div className="border-2 border-red-500">blok 7</div>
            <div className="border-2 border-red-500">blok 8</div>
            <div className="border-2 border-red-500">blok 9</div>
            <div className="border-2 border-red-500">blok 10</div>
            <div className="border-2 border-red-500">go blok </div>
          </div>
        </div>
        <div className="w-full h-full border-2 border-purple-500">
          <div className="w-[600px] h-full mx-auto border-2 border-yellow-600">area droppable</div>
        </div>
      </div>
    </div>
  );
}
