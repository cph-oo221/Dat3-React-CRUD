import fetchData from "../utils.mjs";

const API_URL = "http://localhost:3001/";

// get all users
export function getTodos(callback) {
  fetchData(`${API_URL}todos`, callback, "GET");
}

// get user by id
export function getTodoById(id, callback) {
  fetchData(`${API_URL}todos/${id}`, callback, "GET");
}

// add user
export function addTodo(todo, callback) {
  fetchData(`${API_URL}todos`, callback, "POST", todo);
}

// edit user
export function editTodo(todo, callback) {
  fetchData(`${API_URL}todos/${todo.id}`, callback, "PUT", todo);
}

// delete user
export function deleteTodo(id, callback) {
  fetchData(`${API_URL}todos/${id}`, callback, "DELETE");
}
