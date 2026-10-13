import { createContext, useEffect, useState } from 'react';
import { addTask, deleteTask, getTasks, updateTask } from '../api/tasks.js';

export const TaskContext = createContext({ 
  tasks: [],
  isLoading: false,
  error: null,
  createTask: async () => {},
  editTask: async () => {},
  removeTask: async () => {}
});

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    async function loadTasks() {
      setIsLoading(true);
      setError(null);
      try {
        const loadedTasks = await getTasks();
        setTasks(loadedTasks);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }

    loadTasks();
  }, []);

  async function createTask(task) {
    const savedTask = await addTask(task);
    setTasks((currentTasks) => [...currentTasks, savedTask]);
  }


  async function editTask(id, task) {
    const savedTask = await updateTask(id, task); 

    setTasks((currentTasks) => 
      currentTasks.map((currentTask) => 
        currentTask.id === id ? savedTask : currentTask 
      )
    );
  }
 
    async function toggleTaskStatus(task) {
      const updatedTask = {
        ...task,
        completed: !task.completed
      };

      const savedTask = await updateTask(task.id, updatedTask);

      setTasks((currentTasks) =>
        currentTasks.map((currentTask) =>
          currentTask.id === task.id ? savedTask : currentTask
        )
      );
    }

  async function removeTask(id) {
  await deleteTask(id);

  const updatedTasks = tasks.filter((task) => task.id !== id);

  setTasks(updatedTasks);
}

  const contextValue = {
    tasks,
    isLoading,
    error,
    createTask,
    editTask,
    toggleTaskStatus,
    removeTask
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
}
