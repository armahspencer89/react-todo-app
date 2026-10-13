import { Link } from 'react-router-dom';

export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className="task-row">
      <p>{task.title}</p>

      <p>{task.dueDate}</p>

      <p>{task.priority}</p>

      <p>
        {task.category === 'Other'
          ? task.customCategory
          : task.category}
      </p>

      <p>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task)}
        />
      </p>

      <p>
        {task.completed ? 'Completed' : 'Open'}
      </p>

      <div className="task-actions">
        <Link
          className="button secondary"
          to={`/tasks/${task.id}`}
        >
          View
        </Link>

        <Link
          className="button secondary"
          to={`/tasks/${task.id}/edit`}
        >
          Edit
        </Link>

        <button
          className="button danger"
          onClick={() => {
            const confirmed = window.confirm(
              'Are you sure you want to delete this task?'
            );

            if (confirmed) {
              onDelete(task.id);
            }
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}