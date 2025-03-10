export default function WebComponentSettings() {
  return (
    <div className="px-8 pt-4">
      <div>Font</div>
      <input
        className="border-2 p-2 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
