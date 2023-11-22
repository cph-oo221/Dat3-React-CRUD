import { useEffect, useRef } from "react";
import "../styels/Todo.css";
import { useState } from "react";
import { getTodos, addTodo, deleteTodo } from "../api/api";

function Todo() {
  const [todos, setTodos] = useState([]);

  const noteRef = useRef(null);
  const dateRef = useRef(null);
  const prioRef = useRef(null);

  useEffect(() => {
    getTodos(setTodos);
  }, []);

  async function addTodoHandler() {
    const newTodo = {
      id: todos.length + 1,
      note: noteRef.current.value,
      dueDate: dateRef.current.value,
      priority: prioRef.current.value,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    await addTodo(newTodo, setTodos);
  }

  return (
    <div id="todo-container">
      <h1>My Todos</h1>

      <div>
        <input type="text" placeholder="Note" ref={noteRef} />
        <input type="date" ref={dateRef} />
        <select ref={prioRef}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button id="btn-add" onClick={addTodoHandler}>
          Add Todo
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Note</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>{index + 1}</td>
              <td>{todo.note}</td>
              <td>{todo.dueDate}</td>
              <td>{todo.priority}</td>
              <td>
                <button id="btn-edit">Edit</button>
                <button
                  id="btn-delete"
                  onClick={() => deleteTodo(todo.id, setTodos)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todo;
