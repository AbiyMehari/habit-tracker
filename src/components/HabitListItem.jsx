// src/components/HabitListItem.jsx
export default function HabitListItem({ habit, onDelete }) {
  const { id, name, goal } = habit;

  return (
    <div className="flex justify-between items-center bg-white border rounded-md p-4 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">Goal: {goal} times/day</p>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
}
