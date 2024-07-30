import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { CheckCircle, Circle } from 'lucide-react'; // Ensure these icons are used correctly

const TaskList = ({ tasks, toggleTaskDone }) => {
  return (
    <div className="mt-8 mb-8 max-w-4xl mx-auto">
      {/* <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">
        Task List
      </h1> */}
      <Card className="p-6 shadow-lg rounded-lg">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">
            No tasks available.
          </p>
        ) : (
          tasks.map(task => (
            <div key={task.id} className="flex items-center justify-between mb-4">
              <CardContent className="flex-1 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-900 text-lg">
                  {task.title}
                </p>
              </CardContent>
              <Button 
                variant="outline" 
                onClick={() => toggleTaskDone(task.id)} 
                className="ml-4">
                {task.done ? (
                  <CheckCircle className="text-green-500" size={20} />
                ) : (
                  <Circle className="text-gray-400" size={20} />
                )}
              </Button>
            </div>
          ))
        )}
      </Card>
    </div>
  );
};

export default TaskList;
