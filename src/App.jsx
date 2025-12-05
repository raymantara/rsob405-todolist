import './App.css';

export default function App() {
  return (
    <div className="app">
      <h1>To-Do List</h1>
      <form>
        <input type="text" placeholder="Введите задачу..." className="input" />
        <button type="submit" className="button">
          Добавить
        </button>
      </form>
      <ul className="task-list">
        <li className="task">Пример задачи</li>
      </ul>
    </div>
  );
}
