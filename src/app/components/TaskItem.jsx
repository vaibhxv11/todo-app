
"use client";

import React, { useState } from 'react';
import { Button } from '../../components/ui/button'; // Assuming custom Button component
import { Card, CardContent } from '../../components/ui/card'; // Adjust based on actual import path if needed
import { Check, X, ChevronDown } from 'lucide-react';

const TaskItem = ({ task, toggleTaskDone }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <CardContent>
        <div className="flex justify-between items-center">
          <h6 className="text-lg font-semibold text-gray-900">
            {task.title}
          </h6>
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleExpand}
              className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              aria-expanded={isExpanded}
              aria-label="Show more"
              variant="link"
            >
              <ChevronDown className="w-5 h-5 text-gray-600" />
            </Button>
            <Button
              onClick={() => toggleTaskDone(task.id)}
              className={task.done ? 'text-green-600' : 'text-gray-600'}
              aria-label={task.done ? 'Undo' : 'Done'}
              variant="link"
            >
              {task.done ? <X className="w-5 h-5" /> : <Check className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
          <div className="mt-2">
            <p className="text-gray-700">
              {task.description}
            </p>
            <p className="text-gray-500 mt-2">
              Updated at: {new Date(task.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
