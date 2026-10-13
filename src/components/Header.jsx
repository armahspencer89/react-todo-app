import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="main-header">
      <h1>Taskify</h1>
      <nav>
        <NavLink to="/" end>Tasks</NavLink>
        <NavLink to="/tasks/new">Add Task</NavLink>
      </nav>
    </header>
  );
}
