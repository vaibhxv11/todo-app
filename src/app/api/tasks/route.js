
"use server";
import fs from 'fs';
import path from 'path';

const tasksFilePath = path.join(process.cwd(), 'public', 'tasks.json');

// Initialize tasks file if it doesn't exist
const initializeTasksFile = () => {
  if (!fs.existsSync(tasksFilePath)) {
    fs.writeFileSync(tasksFilePath, JSON.stringify([]), 'utf8');
  }
};

// Read tasks from file
const getTasks = () => {
  initializeTasksFile();
  try {
    const data = fs.readFileSync(tasksFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading tasks file:', error);
    return [];
  }
};

// Save tasks to file
const saveTasks = (tasks) => {
  try {
    const data = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(tasksFilePath, data, 'utf8');
  } catch (error) {
    console.error('Error saving tasks file:', error);
  }
};

// GET route handler
export async function GET() {
  try {
    const tasks = getTasks();
    return new Response(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}

// POST route handler
export async function POST(request) {
  try {
    const newTask = await request.json();
    const tasks = getTasks();
    tasks.push(newTask);
    saveTasks(tasks);
    return new Response(JSON.stringify(newTask), { status: 201 });
  } catch (error) {
    console.error('Error adding new task:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}

// PUT route handler
export async function PUT(request) {
  try {
    const updatedTask = await request.json();
    const tasks = getTasks();
    const index = tasks.findIndex(task => task.id === updatedTask.id);

    if (index !== -1) {
      tasks[index] = updatedTask;
      saveTasks(tasks);
      return new Response(JSON.stringify(updatedTask), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: 'Task not found' }), { status: 404 });
    }
  } catch (error) {
    console.error('Error updating task:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
