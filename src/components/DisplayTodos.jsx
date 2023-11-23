import "../styels/Todo.css";
import { deleteTodo } from "../api/api";

function Display({ todos, setTodos, setUpdate }) {
  return (
    <div>
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
          {console.table(todos)}
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.note}</td>
              <td>{todo.dueDate}</td>
              <td>{todo.priority}</td>
              <td>
                <button
                  id="btn-edit"
                  onClick={() => {
                    const oldTodo = todos.find((t) => t.id === todo.id);
                    setUpdate(oldTodo);
                    console.log("the old todo is", oldTodo);
                  }}
                >
                  Edit
                </button>
                <button
                  id="btn-delete"
                  onClick={() =>
                    deleteTodo(todo.id, () => {
                      const newTodos = todos.filter((t) => t.id !== todo.id);
                      setTodos(newTodos);
                    })
                  }
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

export default Display;
