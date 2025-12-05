import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите задачу..."
          className="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="button">
          Добавить
        </button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task ${task.completed ? 'completed' : ''}`}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}