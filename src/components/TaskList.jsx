import TaskItem from './TaskItem.jsx';

export default function TaskList({ tasks, onDelete, onToggle }) { 
  if (tasks.length === 0) {
    return (
      <p className="empty-message">
        No tasks found. Add your first task.
      </p>
    );
  }

  return (
    <div className="task-table">
      <div className="task-table-header">
        <h3>Task Name</h3>
        <h3>Due Date</h3>
        <h3>Priority</h3>
        <h3>Category</h3>
        <h3>Done</h3>
        <h3>Status</h3>
        <h3>Actions</h3>
      </div>

      <ul className="task-list">
        {tasks.map((task) => ( 
          <TaskItem
            key={task.id} 
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}