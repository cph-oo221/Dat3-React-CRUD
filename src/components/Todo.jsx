import "../styels/Todo.css";
import { useState, useEffect } from "react";
import { getTodos } from "../api/api";
import Display from "./DisplayTodos";
import TodoForm from "./TodoForm";
import Line from "./SeparationLine";
import TodoFilter from "./TodoFilter";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState(null);
  const [edit, setEdit] = useState(false);
  const [initLoad, setInitLoad] = useState(true);

  useEffect(() => {
    if (initLoad) {
      getTodos(setTodos);
      setInitLoad(false);
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

      <TodoFilter todos={todos} setTodos={setTodos}>
        <Line />
      </TodoFilter>

      <Display todos={todos} setTodos={setTodos} setUpdate={setUpdate} />
    </div>
  );
}

export default Todo;
