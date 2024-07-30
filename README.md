Task Management Application
This is a Task Management application built using Next.js and ShadCN for UI components. The application allows you to add, update, search, and toggle tasks between completed and pending statuses.

Overview
The Task Management Application is designed to help users keep track of their tasks. It provides functionalities for adding, updating, searching, and toggling tasks. The application uses a JSON file to store tasks and employs server-side routes to handle task management operations.

System Design
Frontend
Next.js: A React framework for server-rendered applications.
ShadCN: UI component library for building stylish interfaces.
Tailwind CSS: Utility-first CSS framework for styling.
Lucide React: Icon library used for various icons in the UI.
Backend
Node.js: The backend runs on Node.js, with API routes to handle task CRUD operations.
File System: Tasks are stored in a JSON file located in the public directory.
Implementation
Components
Navbar: A navigation bar that includes links to different sections of the application.
TaskForm: A form for adding and updating tasks.
TaskList: A list displaying tasks, with options to mark them as done or pending.
TaskItem: A component representing each task in the list.
API Routes
GET /api/tasks: Fetch all tasks.
POST /api/tasks: Add a new task.
PUT /api/tasks: Update an existing task.
Setting Up and Running the Application
Prerequisites
Node.js (v14 or higher)
npm or yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Run the development server:

bash
Copy code
npm run dev
# or
yarn dev
Open http://localhost:3000 with your browser to see the result.

Building for Production
Build the application:

bash
Copy code
npm run build
# or
yarn build
Start the production server:

bash
Copy code
npm start
# or
yarn start
File Structure
markdown
Copy code
/components
  /ui
    - button.jsx
    - card.jsx
    - input.jsx
    - textarea.jsx
  - Navbar.jsx
  - TaskForm.jsx
  - TaskList.jsx
  - TaskItem.jsx
/pages
  - api
    - tasks.js
  - _app.js
  - index.js
/public
  - tasks.json
/styles
  - globals.css