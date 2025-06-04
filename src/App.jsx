import { useState, useEffect } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import ProgressActions from "./components/ProgressActions";
import Footer from "./components/Footer";

export default function App() {
  const [habits, setHabits] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever habits change
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  const incrementHabit = (id) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          const newCount = habit.count + 1;
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

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const resetDailyProgress = () => {
    setHabits(
      habits.map((habit) => ({
        ...habit,
        count: 0,
        completed: false,
      }))
    );
  };

  const clearAllHabits = () => {
    if (window.confirm("Are you sure you want to delete all habits?")) {
      setHabits([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-md">
        <HabitForm onAddHabit={addHabit} />
        <HabitList
          habits={habits}
          onIncrement={incrementHabit}
          onDecrement={decrementHabit}
          onDelete={deleteHabit}
        />
        {habits.length > 0 && (
          <ProgressActions
            habits={habits}
            onResetDailyProgress={resetDailyProgress}
            onClearAllHabits={clearAllHabits}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
