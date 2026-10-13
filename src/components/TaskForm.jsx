import { useState } from 'react';

const emptyTask = {
  title: '',
  description: '',
  dueDate: '',
  priority: 'Low',
  category: 'School',
  customCategory: '',
  completed: false
};

export default function TaskForm({
  initialTask, //used when editing
  onSave,
  onChange, 
  buttonText 
}) {
  const [task, setTask] = useState(initialTask || emptyTask); 
  const [didSubmit, setDidSubmit] = useState(false);

  const titleIsInvalid = didSubmit && task.title.trim() === ''; 
  const dueDateIsInvalid = didSubmit && task.dueDate === ''; 


  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (onChange) { 
      onChange();
    }

    setTask((currentTask) => ({
      ...currentTask,//Copies all existing fields.
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  //Runs when dropdown changes.
  function handleDescriptionTemplate(event) {
    const selectedValue = event.target.value; 

    if (selectedValue === '') {
      return;
    }

    setTask((currentTask) => ({
      ...currentTask,
      description: currentTask.description + ' ' + selectedValue 
    }));
  }

  //Runs when Save button clicked.
  function handleSubmit(event) {
    event.preventDefault(); 
    setDidSubmit(true); 

    if (task.title.trim() === '' || task.dueDate === '') { 
      return;
    }

    onSave(task);
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="title">Task title</label>

        <input
          id="title"
          name="title"
          value={task.title}
          onChange={handleChange}
        />

        {titleIsInvalid && (
          <p className="error-text">Title is required.</p>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="category">Category</label>

        <select
          id="category"
          name="category"
          value={task.category}
          onChange={handleChange}
        >
          <option>School</option>
          <option>Work</option>
          <option>Personal</option>
          <option>Shopping</option>
          <option>Other</option>
        </select>
      </div>

      {task.category === 'Other' && (
        <div className="form-control">
          <label htmlFor="customCategory">
            Custom category
          </label>

          <input
            id="customCategory"
            name="customCategory"
            value={task.customCategory}
            onChange={handleChange}
          />
        </div>
      )}

      <div className="form-control">
        <label htmlFor="description">
          Description
        </label>

        <select onChange={handleDescriptionTemplate}>
          <option value="">Choose quick text</option>
          <option value="📚 Study for exam">
            📚 Study for exam
          </option>
          <option value="🛒 Buy groceries">
            🛒 Buy groceries
          </option>
          <option value="💻 Finish project">
            💻 Finish project
          </option>
        </select>

        <textarea
          id="description"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <div className="form-control">
          <label htmlFor="dueDate">
            Due date
          </label>

          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={task.dueDate}
            min={new Date().toISOString().split('T')[0]}
            onChange={handleChange}
          />

          {dueDateIsInvalid && (
            <p className="error-text">
              Due date is required.
            </p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="priority">
            Priority
          </label>

          <select
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>

      <div className="form-control checkbox-control">
        <label>
          <input
            type="checkbox"
            name="completed"
            checked={task.completed}
            onChange={handleChange}
          />

          Task completed
        </label>
      </div>

      <button className="button primary" type="submit">
        {buttonText}
      </button>
    </form>
  );
}