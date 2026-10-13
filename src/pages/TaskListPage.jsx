import { useContext, useState } from 'react';
import { TaskContext } from '../store/TaskContext.jsx';
import TaskList from '../components/TaskList.jsx';

export default function TaskListPage() {
  const {
    tasks,
    isLoading,
    error,
    removeTask,
    toggleTaskStatus
  } = useContext(TaskContext);

  // State for search and filter
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Highest priority first
  const priorityOrder = {
    High: 1,
    Medium: 2,
    Low: 3
  };

  // Filter tasks
  const filteredTasks = tasks
    .filter((task) => {
      if (statusFilter === 'All') {
        return true;
      }

      if (statusFilter === 'Completed') {
        return task.completed === true;
      }

      return task.completed !== true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    );

  // Sort tasks by priority
  const sortedTasks = [...filteredTasks].sort((taskA, taskB) => {
    return priorityOrder[taskA.priority] - priorityOrder[taskB.priority];
  });

  return (
    <section>
      <div className="page-title">
        <h2>My Tasks</h2>
        <p>View, edit or delete your tasks.</p>
      </div>

      <div className="task-toolbar">
        <div className="filter-box">
          <label htmlFor="statusFilter">Filter</label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option>All</option>
            <option>Open</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="search-box">
          <label htmlFor="searchText">Search</label>
          <input
            id="searchText"
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search task..."
          />
        </div>
      </div>

      {isLoading && <p>Loading tasks...</p>}

      {error && <p className="error-text">{error}</p>}

      {!isLoading && !error && (
        <TaskList
          tasks={sortedTasks}
          onDelete={removeTask}
          onToggle={toggleTaskStatus}
        />
      )}
    </section>
  );
}