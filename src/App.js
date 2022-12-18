import './App.css';
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
  }

  function handleChange(e) {
    setNewTodo(e.target.value);
  }

  function handleDelete(index) {
    setTodos(todos.filter((todo, i) => i !== index));
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Todolist</h1>
      </header>
      <body>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </body>
    </div>
  );  
}

export default App;
