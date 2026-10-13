/*
  This file is inside the api folder because it communicates with the backend.
  tasks.js separates backend communication from the UI. Components do not directly write fetch code; 
  they call these functions instead.
*/
const API_URL = 'http://localhost:3000/tasks'; //This is the json-server endpoint.

export async function getTasks() {
  const response = await fetch(API_URL); //Sends a GET request.
  if (!response.ok) {
    throw new Error('Could not load tasks.');
  }
  return response.json();
}

//Adds a new task using POST. POST means create new data.
export async function addTask(task) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task) //Converts the JavaScript task object into JSON.
  });
  if (!response.ok) {
    throw new Error('Could not add task.');
  }
  return response.json();
}

//Updates an existing task.
export async function updateTask(id, task) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT', //PUT replaces the task with updated data.
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  });
  if (!response.ok) {
    throw new Error('Could not update task.');
  }
  return response.json();
}

//deletes a task. the methode DELETE removes data from the backend.
export async function deleteTask(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Could not delete task.');
  }
}
