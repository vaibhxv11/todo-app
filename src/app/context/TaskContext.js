"use client";
import { createContext, useState, useEffect } from 'react';
import { fetchTasks, addTask, updateTask } from '../utils/tasks';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
        setFilteredTasks(data); // Set initial filteredTasks to all tasks
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };
    getTasks();
  }, []);

  const addTaskHandler = async (task) => {
    try {
      const newTask = await addTask(task);
      setTasks(prevTasks => [...prevTasks, newTask]);
      setFilteredTasks(prevTasks => [...prevTasks, newTask]);
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  const updateTaskHandler = async (task) => {
    try {
      const updatedTask = await updateTask(task);
      setTasks(prevTasks =>
        prevTasks.map(t => (t.id === updatedTask.id ? updatedTask : t))
      );
      setFilteredTasks(prevTasks =>
        prevTasks.map(t => (t.id === updatedTask.id ? updatedTask : t))
      );
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const toggleTaskDone = async (taskId) => {
    try {
      const task = tasks.find(task => task.id === taskId);
      const updatedTask = await updateTask({ ...task, done: !task.done });
      setTasks(prevTasks =>
        prevTasks.map(t => (t.id === taskId ? updatedTask : t))
      );
      setFilteredTasks(prevTasks =>
        prevTasks.map(t => (t.id === taskId ? updatedTask : t))
      );
    } catch (error) {
      console.error('Failed to toggle task status:', error);
    }
  };

  const searchTasks = (term) => {
    if (term) {
      const filtered = tasks.filter(task => task.title.toLowerCase().includes(term.toLowerCase()));
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks); // Reset to all tasks if search term is empty
    }
  };

  return (
    <TaskContext.Provider
      value={{ 
        tasks: filteredTasks, // Use filteredTasks for displaying
        addTask: addTaskHandler,
        updateTask: updateTaskHandler,
        toggleTaskDone,
        searchTasks 
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
