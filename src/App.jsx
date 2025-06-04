import { useState } from "react";
import Header from "./components/Header.jsx";
import HabitForm from "./components/HabitForm.jsx";
import HabitList from "./components/HabitList.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [habits, setHabits] = useState([]);

  function addHabit({ name, goal }) {
    const newHabit = {
      id: Date.now().toString(),
      name,
      goal,
      progress: 0,
      completed: false,
    };
    setHabits((prev) => [...prev, newHabit]);
  }

  function deleteHabit(id) {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <HabitForm onAddHabit={addHabit} />
        <HabitList habits={habits} onDelete={deleteHabit} />
      </main>
      <Footer />
    </div>
  );
}
