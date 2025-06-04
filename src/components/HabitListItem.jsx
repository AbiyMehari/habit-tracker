export default function HabitListItem({
  habit,
  onIncrement,
  onDecrement,
  onDelete,
}) {
  const isComplete = habit.current >= habit.target;

  return (
    <div
      className={`p-4 mb-3 rounded-lg shadow ${
        isComplete ? "bg-green-100 border-l-4 border-green-500" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">{habit.name}</h3>
        <button
          onClick={() => onDelete(habit.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onDecrement(habit.id)}
            disabled={habit.current <= 0}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            -
          </button>
          <span className="font-medium">
            {habit.current} / {habit.target}
          </span>
          <button
            onClick={() => onIncrement(habit.id)}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            +
          </button>
        </div>
        {isComplete && (
          <span className="text-green-600 font-semibold">Completed!</span>
        )}
      </div>
    </div>
  );
}
