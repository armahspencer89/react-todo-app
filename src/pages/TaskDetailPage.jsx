import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TaskContext } from '../store/TaskContext.jsx';

export default function TaskDetailPage() {
  const { taskId } = useParams(); 
  const { tasks } = useContext(TaskContext);
  const task = tasks.find((currentTask) => currentTask.id === taskId); 

  if (!task) {
    return <p className="empty-message">Task not found.</p>;
  }

  return (
    <section className="detail-card">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p><strong>Due date:</strong> {task.dueDate}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <Link className="button primary" to={`/tasks/${task.id}/edit`}>Edit Task</Link>
    </section>
  );
}
