export default function HabitListItem({
  habit,
  onIncrement,
  onDecrement,
  onDelete,
}) {
  const progressPercentage = Math.min((habit.count / habit.target) * 100, 100);

  return (
    <div
      className={`p-4 mb-3 rounded-lg shadow ${
        habit.completed ? "bg-green-50 border-l-4 border-green-500" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <h3
          className={`font-medium ${
            habit.completed ? "text-green-700" : "text-gray-800"
          }`}
        >
          {habit.name}
        </h3>
        <button
          onClick={() => onDelete(habit.id)}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Delete
        </button>
      </div>

      <div className="mb-2">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">
            {habit.count} / {habit.target} times
          </span>
          {habit.completed && (
            <span className="text-green-600 font-medium">Completed!</span>
          )}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              habit.completed ? "bg-green-500" : "bg-blue-500"
            }`}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => onDecrement(habit.id)}
          disabled={habit.count <= 0}
          className={`flex-1 py-1 px-3 rounded ${
            habit.count <= 0
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-100 text-blue-700 hover:bg-blue-200"
          }`}
        >
          -
        </button>
        <button
          onClick={() => onIncrement(habit.id)}
          disabled={habit.completed}
          className={`flex-1 py-1 px-3 rounded ${
            habit.completed
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-100 text-blue-600 hover:bg-blue-200"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
