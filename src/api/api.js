import fetchData from "../utils.mjs";

const API_URL = "http://localhost:3001/";

// get all users
export function getUsers(callback) {
  fetchData(`${API_URL}todos`, callback, "GET");
}

// get user by id
export function getUserById(id, callback) {
  fetchData(`${API_URL}todos/${id}`, callback, "GET");
}

// add user
export function addUser(user, callback) {
  fetchData(`${API_URL}todos`, callback, "POST", user);
}

// edit user
export function editUser(user, callback) {
  fetchData(`${API_URL}todos/${user.id}`, callback, "PUT", user);
}

// delete user
export function deleteUser(id, callback) {
  fetchData(`${API_URL}todos/${id}`, callback, "DELETE");
}
