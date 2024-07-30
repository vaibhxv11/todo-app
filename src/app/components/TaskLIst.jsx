
import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { CheckCircle, Circle, ChevronDown, ChevronUp } from 'lucide-react'; // Ensure these icons are used correctly

const TaskList = ({ tasks, toggleTaskDone }) => {
  const [expandedTasks, setExpandedTasks] = useState({});

  const toggleExpand = (taskId) => {
    setExpandedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  return (
    <div className="mt-8 mb-8 max-w-4xl mx-auto">
      <Card className="p-6 shadow-lg rounded-lg">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks available.</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="mb-4">
              <div className="flex items-center justify-between">
                <CardContent className="flex-1 p-4 bg-gray-100 rounded-lg">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-900 text-lg">{task.title}</p>
                    <Button
                      variant="outline"
                      onClick={() => toggleExpand(task.id)}
                      className="ml-4"
                    >
                      {expandedTasks[task.id] ? (
                        <ChevronUp className="text-gray-500" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-500" size={20} />
                      )}
                    </Button>
                  </div>
                  {expandedTasks[task.id] && (
                    <div className="mt-4 text-gray-700">
                      <p className="text-sm">{task.description}</p>
                      <p className="text-xs mt-2">
                        Last updated: {new Date(task.updatedAt).toLocaleString()}
                      </p>
                    </div>
                  )}
                </CardContent>
                <Button
                  variant="outline"
                  onClick={() => toggleTaskDone(task.id)}
                  className="ml-4"
                >
                  {task.done ? (
                    <CheckCircle className="text-green-500" size={20} />
                  ) : (
                    <Circle className="text-gray-400" size={20} />
                  )}
                </Button>
              </div>
            </div>
          ))
        )}
      </Card>
    </div>
  );
};

export default TaskList;
