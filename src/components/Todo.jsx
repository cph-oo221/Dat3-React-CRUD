import "../styels/Todo.css";
import { useState, useEffect } from "react";
import { getTodos } from "../api/api";
import Display from "./DisplayTodos";
import TodoForm from "./TodoForm";
import Line from "./SeparationLine";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (todos.length === 0) {
      getTodos(setTodos);
    }

    if (update) {
      setEdit(true);
    }
  }, [todos, update]);

  return (
    <div id="todo-container">
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        edit={edit}
        setEdit={setEdit}
        update={update}
        setUpdate={setUpdate}
      />
      <Line />
      <p>filter</p>
      <Line />
      <Display todos={todos} setTodos={setTodos} setUpdate={setUpdate} />
    </div>
  );
}

export default Todo;
