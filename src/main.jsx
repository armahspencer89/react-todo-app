import React from 'react';
import ReactDOM from 'react-dom/client'; //ReactDOM is used to display the React application inside the browser
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; //imports the router provider so the app can use multiple pages/routes.
import App from './App.jsx';
import TaskListPage from './pages/TaskListPage.jsx';
import TaskFormPage from './pages/TaskFormPage.jsx';
import TaskDetailPage from './pages/TaskDetailPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import { TaskProvider } from './store/TaskContext.jsx';
import 'normalize.css';
import './style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <TaskListPage /> },
      { path: 'tasks/new', element: <TaskFormPage /> },
      { path: 'tasks/:taskId', element: <TaskDetailPage /> },
      { path: 'tasks/:taskId/edit', element: <TaskFormPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  </React.StrictMode>
);
