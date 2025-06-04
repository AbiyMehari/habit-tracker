# React Habit Tracker

A simple and responsive Habit Tracker built with React, Vite, and Tailwind CSS.  
This app helps users create habits, track daily progress, and stay motivated by visualizing completion goals.

---

## 🚀 Features

- Create custom habits with target goals (e.g., drink water 8 times/day)
- Increment and decrement daily progress counters for each habit
- Visual feedback when habits reach their completion goal
- Overall progress tracking across all habits
- Persist data in browser local storage
- Responsive design for desktop and mobile devices

---

## 🛠️ Technologies Used

- React (with Hooks: `useState`, `useEffect`)
- Vite (build tool)
- Tailwind CSS (utility-first CSS framework)
- Local Storage API

---

## ⚙️ Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AbiyMehari/habit-tracker.git
   cd habit-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

habit-tracker/
├── src/
│ ├── components/
│ │ ├── HabitForm.jsx
│ │ ├── HabitList.jsx
│ │ ├── HabitListItem.jsx
│ │ ├── Header.jsx
│ │ └── ProgressActions.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md

## 📝 Usage

Add a new habit using the form by specifying a name and a daily target count.

Use the plus (+) and minus (-) buttons to update your progress for each habit.

When the progress matches the target, the habit is visually marked as completed.

Your habits and progress are saved locally, so they persist on page refresh.

## 🤝 Contribution

Feel free to open issues or submit pull requests for improvements and bug fixes.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Thanks to WBS CODING School for the support and guidance during this project.
Also, thanks to Vite and Tailwind CSS for the great tools.

## Happy Habit Tracking! 🚀

“Thanks for checking out this project!”

“Feel free to contribute or share your feedback.”

“Good luck building your habits!”
