import fetchData from "../utils.mjs";

const API_URL = "http://localhost:3001/";

// Get All Users
export function getTodos(callback) {
  fetchData(`${API_URL}todos`, callback, "GET");
}

// Get Todo By Id
export function getTodoById(id, callback) {
  fetchData(`${API_URL}todos/${id}`, callback, "GET");
}

// Add Todo
export function addTodo(todo, callback) {
  callback(todo);
  fetchData(`${API_URL}todos`, () => {}, "POST", todo[todo.length - 1]);
}

// Edit Todo
export function editTodo(todo, callback) {
  fetchData(`${API_URL}todos/${todo.id}`, callback, "PUT", todo);
}

// Delete Todo
export function deleteTodo(id, callback) {
  fetchData(`${API_URL}todos/${id}`, callback, "DELETE");
}
