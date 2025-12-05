import { useState } from 'react';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]); // список задач
  const [inputValue, setInputValue] = useState(''); // текст в поле ввода

  // Функция обработки отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // останавливает перезагрузку страницы
    if (inputValue.trim() === '') return; // не добавлять пустые задачи

    const newTask = {
      id: Date.now(), // уникальный ID
      text: inputValue.trim(),
      completed: false, // по умолчанию — не выполнена
    };

    setTasks([...tasks, newTask]); // добавляем новую задачу в список
    setInputValue(''); // очищаем поле ввода
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
          <li key={task.id} className="task">
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}