import HabitListItem from "./HabitListItem";

export default function HabitList({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
}) {
  return (
    <div className="space-y-3">
      {habits.length === 0 ? (
        <p className="text-center text-gray-500 py-4">
          No habits added yet. Add your first habit above!
        </p>
      ) : (
        habits.map((habit) => (
          <HabitListItem
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}
