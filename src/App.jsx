import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

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
    const text = inputValue.trim();
    if (text === '') return;

    const newTask = {
      id: Date.now(),
      text,
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

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

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
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`task ${task.completed ? 'completed' : ''}`}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>

      <div className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          Все
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >
          Активные
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Выполненные
        </button>
      </div>
    </div>
  );
}