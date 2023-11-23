import { useRef, useState, useEffect } from "react";
import { addTodo, editTodo } from "../api/api";

function TodoForm({ todos, setTodos, edit, setEdit, update, setUpdate }) {
  const noteRef = useRef(null);
  const dateRef = useRef(null);
  const prioRef = useRef(null);

  const [btnText, setBtnText] = useState("Add");

  useEffect(() => {
    if (update) {
      noteRef.current.value = update.note;
      dateRef.current.value = update.dueDate;
      prioRef.current.value = update.priority;

      setBtnText(`Update id: ${update.id}`);
    }
  }, [update]);

  function resetForm() {
    noteRef.current.value = null;
    dateRef.current.value = null;
    prioRef.current.value = "High";
  }

  function todoCurrent(idValue) {
    return {
      id: idValue,
      note: noteRef.current.value,
      dueDate: dateRef.current.value,
      priority: prioRef.current.value,
    };
  }

  return (
    <div>
      <h1>My Todos ({todos.length})</h1>
      <label htmlFor="note">Note</label>
      <input type="text" id="note" placeholder="Note" ref={noteRef} />

      <label htmlFor="date">Due Date</label>
      <input type="date" ref={dateRef} />

      <label htmlFor="priority">Priority</label>
      <select id="priority" ref={prioRef}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button
        id="btn-add"
        onClick={() => {
          if (edit) {
            const updateTodo = todoCurrent(update.id);

            console.log("yoyoyoyoy ", updateTodo);
            editTodo(updateTodo, () => {
              const newTodos = todos.map((todo) => {
                if (todo.id === update.id) {
                  return updateTodo;
                }
                return todo;
              });
              setTodos(newTodos);
              resetForm();
              setUpdate(null);
              setEdit(false);
              setBtnText("Add");
            });
          } else {
            const id = todos.length + 1;
            const newTodo = todoCurrent(id);
            addTodo([...todos, newTodo], setTodos);
            resetForm();
          }
        }}
      >
        {btnText}
      </button>
    </div>
  );
}

export default TodoForm;
