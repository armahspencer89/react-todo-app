# React ToDo Application

A task management application built with React. Users can create, organize, and track tasks using priorities, categories, due dates, and completion status.

Developed as a coursework project for the GUI Development course at Thomas More.

## Features

- Create, view, edit, and delete tasks
- Mark tasks as completed or incomplete
- Search and filter tasks
- Organize tasks by priority and category
- Add custom categories
- Set due dates, with validation to prevent past dates
- View task descriptions and details
- Confirm before deleting a task
- Receive a warning about unsaved changes when editing

## Technologies

- **React** — component-based user interface
- **Vite** — development server and production builds
- **React Router** — navigation between pages
- **Context API** — shared task state
- **JSON Server** — local REST API backed by `db.json`
- **CSS and normalize.css** — styling

## Getting Started

### Prerequisites

Install Node.js and npm. Use a Node.js version compatible with the Vite version listed in `package.json`.

### Installation

Clone the repository:

```bash
git clone https://github.com/armahspencer89/react-todo-app.git
cd react-todo-app
```

Install dependencies:

```bash
npm ci
```

### Run the Application

Start the local API:

```bash
npm run server
```

Open a second terminal in the same project folder and start React:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

Keep both terminals running while using the application. Task data is stored in `db.json` through JSON Server.

## Other Commands

Build the frontend for production:

```bash
npm run build
```

Preview the frontend build:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

JSON Server must also be running when using the frontend preview.

## Project Structure

```text
src/
├── api/          # API requests
├── assets/       # Images and other assets
├── components/   # Reusable UI components
├── pages/        # Pages used by React Router
├── store/        # Shared state using Context API
├── App.jsx
└── main.jsx

public/           # Static assets
db.json           # Local task data
```

## What I Practiced

- Building reusable React components
- Managing state with hooks and Context API
- Navigating with React Router
- Making REST API requests
- Implementing task CRUD operations
- Validating forms and handling user interactions
- Using Git and GitHub for version control

## Author

Spencer Armah  
[GitHub](https://github.com/armahspencer89)