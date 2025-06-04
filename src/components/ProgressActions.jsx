export default function ProgressActions({ habits, onResetDaily, onClearAll }) {
  const completedHabits = habits.filter((h) => h.current >= h.target).length;
  const totalHabits = habits.length;
  const progressPercentage =
    totalHabits > 0 ? Math.round((completedHabits / totalHabits) * 100) : 0;

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow">
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Daily Progress</h3>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {completedHabits} of {totalHabits} habits completed (
          {progressPercentage}%)
        </p>
      </div>
      <div className="flex space-x-3">
        <button
          onClick={onResetDaily}
          className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
        >
          Reset Daily
        </button>
        <button
          onClick={onClearAll}
          className="flex-1 bg-red-100 text-red-800 py-2 px-4 rounded hover:bg-red-200 transition-colors"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
