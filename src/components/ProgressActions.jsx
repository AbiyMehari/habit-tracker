export default function ProgressActions({
  habits,
  onResetDailyProgress,
  onClearAllHabits,
}) {
  const completedCount = habits.filter((h) => h.completed).length;
  const totalCount = habits.length;
  const completionPercentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Daily Progress
      </h2>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">
            {completedCount} of {totalCount} habits completed
          </span>
          <span className="font-medium">{completionPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="h-3 rounded-full bg-blue-500"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={onResetDailyProgress}
          className="flex-1 py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded transition duration-200"
        >
          Reset Today
        </button>
        <button
          onClick={onClearAllHabits}
          className="flex-1 py-2 px-4 bg-red-100 hover:bg-red-200 text-red-800 rounded transition duration-200"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
