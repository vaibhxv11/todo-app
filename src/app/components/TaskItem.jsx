
import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TaskItem = ({ task, toggleTaskDone }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="mb-4 bg-white shadow-md rounded-lg w-[10%]">
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTaskDone(task.id)}
              className="mr-3"
            />
            <h6 className="text-lg font-semibold text-gray-900">
              {task.title}
            </h6>
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        {isOpen && (
          <div className="mt-4">
            <p className="text-gray-600">{task.description}</p>
            <p className="text-gray-500 text-sm">
              Last updated: {new Date(task.updatedAt).toLocaleString()}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskItem;
