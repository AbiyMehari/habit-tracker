// src/components/HabitList.jsx
import HabitListItem from "./HabitListItem.jsx";

export default function HabitList({ habits, onDelete }) {
  return (
    <div className="max-w-md mx-auto mt-6 space-y-4 px-4">
      {habits.length === 0 ? (
        <p className="text-center text-gray-500">
          No habits yet. Add one above!
        </p>
      ) : (
        habits.map((habit) => (
          <HabitListItem key={habit.id} habit={habit} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}
