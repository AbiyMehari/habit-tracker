// Import React hooks for managing state and side effects
import { useState, useEffect } from "react";

// Import custom components
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import ProgressActions from "./components/ProgressActions";
import Footer from "./components/Footer";

// Main App component
export default function App() {
  // Initialize the state for habits
  // Load from localStorage on first render, or use an empty array if nothing is stored
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync habits to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // Add a new habit to the state
  const addHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  // Increment the count of a specific habit
  const incrementHabit = (id) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          const newCount = habit.count + 1;
          return {
            ...habit,
            count: newCount,
            completed: newCount >= habit.target, // Mark as completed if count meets/exceeds target
          };
        }
        return habit;
      })
    );
  };

  // Decrement the count of a specific habit, not going below 0
  const decrementHabit = (id) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          const newCount = Math.max(habit.count - 1, 0);
          return {
            ...habit,
            count: newCount,
            completed: newCount >= habit.target,
          };
        }
        return habit;
      })
    );
  };

  // Delete a habit by filtering it out of the state
  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  // Reset the daily progress of all habits (set count to 0 and mark as not completed)
  const resetDailyProgress = () => {
    setHabits(
      habits.map((habit) => ({
        ...habit,
        count: 0,
        completed: false,
      }))
    );
  };

  // Clear all habits after a confirmation prompt
  const clearAllHabits = () => {
    if (window.confirm("Are you sure you want to delete all habits?")) {
      setHabits([]);
    }
  };

  // Return the layout of the app
  return (
    <div className="min-h-screen bg-gray-50">
      {/* App header */}
      <Header />

      {/* Main content section */}
      <main className="container mx-auto px-4 py-8 max-w-md">
        {/* Form to add a new habit */}
        <HabitForm onAddHabit={addHabit} />

        {/* List of current habits with control buttons */}
        <HabitList
          habits={habits}
          onIncrement={incrementHabit}
          onDecrement={decrementHabit}
          onDelete={deleteHabit}
        />

        {/* Show reset and clear buttons only if there are habits */}
        {habits.length > 0 && (
          <ProgressActions
            habits={habits}
            onResetDailyProgress={resetDailyProgress}
            onClearAllHabits={clearAllHabits}
          />
        )}
      </main>

      {/* App footer */}
      <Footer />
    </div>
  );
}
