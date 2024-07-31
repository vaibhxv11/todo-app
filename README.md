
# Task Management Application

This is a Task Management application built using Next.js and ShadCN for UI components. The application allows you to add, search,and toggle tasks between completed and pending status.




## System Design

### Frontend 
- Next.js: A React framework for server-rendered applications.
- ShadCN: UI component library for building stylish interfaces.
- Tailwind CSS: Utility-first CSS framework for styling.
- Lucide React: Icon library used for various icons in the UI.

### Backend
- Node.js: The backend runs on Node.js, with API routes to handle task CRUD operations.
- File System: Tasks are stored in a JSON file located in the public directory.

### API Routes
- GET /api/tasks: Fetch all tasks.
- POST /api/tasks: Add a new task.
- PUT /api/tasks: Update an existing task.
## Features

- Add Task: Add new tasks with a title and description.
- Search Tasks: Search tasks by title.
- Toggle Task: Mark tasks as completed or pending.
- Responsive Design: Responsive and user-friendly UI.




## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

To run this project,

1.Clone the repository:
```bash
git clone https://github.com/vaibhxv11/todo-appp.git
cd todo-app
```
2.Install dependencies:
```bash
npm install
```
3.Run the development server:
```bash
npm run dev
```
Open http://localhost:3000 with your browser to see the result.


## Technolgies Used

- Next.js: A React framework for server-rendered applications.
- ShadCN: UI component library for building stylish interfaces.
- Tailwind CSS: Utility-first CSS framework for styling.
- Lucide React : Icon library for react applications
