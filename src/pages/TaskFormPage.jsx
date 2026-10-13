import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm.jsx';
import { TaskContext } from '../store/TaskContext.jsx';

export default function TaskFormPage() {
  const { taskId } = useParams(); 
  const navigate = useNavigate();
  const { tasks, createTask, editTask } = useContext(TaskContext);

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const selectedTask = tasks.find((task) => String(task.id) === taskId); 
  const isEditing = taskId !== undefined; 

  async function handleSave(task) { 
    if (isEditing) { 
      await editTask(taskId, task);
    } else {
      await createTask(task);
    }

    setHasUnsavedChanges(false);
    navigate('/');
  }

  function handleBack() {
    if (hasUnsavedChanges) {
      const leavePage = window.confirm(
        'You have unsaved changes. Do you want to leave without saving?'
      );

      if (!leavePage) {
        return;
      }
    }

    navigate('/');
  }

  if (isEditing && !selectedTask) {
    return <p className="empty-message">Task not found.</p>;
  }

  return (
    <section>
      <div className="page-title">
        <h2>{isEditing ? 'Edit Task' : 'Add Task'}</h2>
        <p>{isEditing ? 'Change the task information.' : 'Create a new task.'}</p>
      </div>

      <button className="button secondary" type="button" onClick={handleBack}>
        Back
      </button>

      <TaskForm
        initialTask={selectedTask}
        onSave={handleSave}
        onChange={() => setHasUnsavedChanges(true)}
        buttonText={isEditing ? 'Save Changes' : 'Add Task'}
      />
    </section>
  );
}