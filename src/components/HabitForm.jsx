import { useState } from "react";

export default function HabitForm({ onAddHabit }) {
  const [name, setName] = useState("");
  const [target, setTarget] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddHabit({
      id: Date.now(),
      name,
      target,
      count: 0,
      completed: false,
    });

    setName("");
    setTarget(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 bg-white rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Add New Habit
      </h2>
      <div className="mb-4">
        <label
          htmlFor="habit-name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Habit Name
        </label>
        <input
          id="habit-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
          placeholder="please enter habit name"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="habit-target"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Daily Target
        </label>
        <input
          id="habit-target"
          type="number"
          min="1"
          value={target}
          onChange={(e) => setTarget(parseInt(e.target.value) || 1)}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded transition duration-200"
      >
        Add Habit
      </button>
    </form>
  );
}
