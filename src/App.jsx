import { useState, useEffect } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import ProgressActions from "./components/ProgressActions";
import Footer from "./components/Footer";

function App() {
  // State for storing all habits
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  // This is where the addHabit function should go - inside the App component
  const addHabit = (newHabit) => {
    setHabits((prev) => [
      ...prev,
      {
        id: Date.now(), // Unique ID using timestamp
        name: newHabit.name, // Custom name from form
        target: newHabit.target, // Target frequency from form
        current: 0, // Start with 0 completions
      },
    ]);
  };

  // Other handler functions (increment, decrement, delete etc.)
  const incrementHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, current: habit.current + 1 } : habit
      )
    );
  };

  const decrementHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id
          ? { ...habit, current: Math.max(0, habit.current - 1) }
          : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  // Save to localStorage whenever habits change
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-md">
        {/* This is where we pass addHabit to HabitForm */}
        <HabitForm onAddHabit={addHabit} />

        <HabitList
          habits={habits}
          onIncrement={incrementHabit}
          onDecrement={decrementHabit}
          onDelete={deleteHabit}
        />

        <ProgressActions
          habits={habits}
          onResetDaily={() =>
            setHabits((prev) => prev.map((habit) => ({ ...habit, current: 0 })))
          }
          onClearAll={() => {
            if (window.confirm("Are you sure you want to delete all habits?")) {
              setHabits([]);
            }
          }}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
