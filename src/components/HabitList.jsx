import HabitListItem from "./HabitListItem";

export default function HabitList({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Habits</h2>
      {habits.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No habits added yet. Add your first habit above!
        </p>
      ) : (
        <div className="space-y-3">
          {habits.map((habit) => (
            <HabitListItem
              key={habit.id}
              habit={habit}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
