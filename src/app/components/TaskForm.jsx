"use client"
import React, { useState, useEffect } from 'react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';
import { Plus, Edit } from 'lucide-react';

const TaskForm = ({ task, addTask, updateTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      updateTask({ ...task, title, description });
    } else {
      addTask({
        id: Date.now().toString(),
        title,
        description,
        done: false,
        updatedAt: new Date(),
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-lg mx-auto p-4 border border-gray-300 rounded-lg">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Task Title</label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Task Description</label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="mt-1"
          rows={4}
        />
      </div>
      <Button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md flex items-center">
        {task ? <Edit className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
        {task ? 'Update Task' : 'Add Task'}
      </Button>
    </form>
  );
};

export default TaskForm;
