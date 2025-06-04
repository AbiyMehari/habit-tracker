import { useState } from "react";

export default function HabitForm({ onAddHabit }) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !goal || goal <= 0) {
      alert("Please enter a valid habit name and a positive goal number.");
      return;
    }

    onAddHabit({ name: name.trim(), goal: Number(goal) });

    setName("");
    setGoal("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-4 border rounded-md shadow-sm max-w-md mx-auto mt-6"
    >
      <input
        type="text"
        placeholder="Habit Name (e.g. Drink Water)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Goal (times per day)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="border p-2 rounded"
        min="1"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add Habit
      </button>
    </form>
  );
}
