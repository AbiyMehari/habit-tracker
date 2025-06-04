import { useState } from "react";

export default function HabitForm({ onAddHabit }) {
  // State for form inputs
  const [name, setName] = useState("");
  const [target, setTarget] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Call parent component's function to add the new habit
    onAddHabit({
      name: name.trim(), // Remove extra whitespace
      target: target, // Use the selected target
    });

    // Reset form
    setName("");
    setTarget(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 bg-white rounded-lg shadow"
    >
      {/* Habit Name Input */}
      <div className="mb-4">
        <label htmlFor="habit-name" className="block text-gray-700 mb-2">
          Habit Name
        </label>
        <input
          id="habit-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., Drink water"
          required
        />
      </div>

      {/* Target Frequency Input */}
      <div className="mb-4">
        <label htmlFor="habit-target" className="block text-gray-700 mb-2">
          Daily Target
        </label>
        <input
          id="habit-target"
          type="number"
          min="1"
          value={target}
          onChange={(e) => setTarget(parseInt(e.target.value) || 1)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        Add Habit
      </button>
    </form>
  );
}
