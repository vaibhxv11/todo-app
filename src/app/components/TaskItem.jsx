
// "use client";

// import React, { useState } from 'react';
// import { Button } from '../../components/ui/button'; // Assuming custom Button component
// import { Card, CardContent } from '../../components/ui/card'; // Adjust based on actual import path if needed
// import { Check, X, ChevronDown } from 'lucide-react';

// const TaskItem = ({ task, toggleTaskDone }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <Card className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
//       <CardContent>
//         <div className="flex justify-between items-center">
//           <h6 className="text-lg font-semibold text-gray-900">
//             {task.title}
//           </h6>
//           <div className="flex items-center space-x-2">
//             <Button
//               onClick={handleExpand}
//               className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
//               aria-expanded={isExpanded}
//               aria-label="Show more"
//               variant="link"
//             >
//               <ChevronDown className="w-5 h-5 text-gray-600" />
//             </Button>
//             <Button
//               onClick={() => toggleTaskDone(task.id)}
//               className={task.done ? 'text-green-600' : 'text-gray-600'}
//               aria-label={task.done ? 'Undo' : 'Done'}
//               variant="link"
//             >
//               {task.done ? <X className="w-5 h-5" /> : <Check className="w-5 h-5" />}
//             </Button>
//           </div>
//         </div>
//         <div className={`transition-all duration-300 ${isExpanded ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
//           <div className="mt-2">
//             <p className="text-gray-700">
//               {task.description}
//             </p>
//             <p className="text-gray-500 mt-2">
//               Updated at: {new Date(task.updatedAt).toLocaleString()}
//             </p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default TaskItem;
"use client";

import React, { useState } from 'react';
import { Button } from '../../components/ui/button'; // Assuming custom Button component
import { Card, CardContent } from '../../components/ui/card'; // Adjust based on actual import path if needed
import { Check, X, ChevronDown, Edit3, Save } from 'lucide-react';

const TaskItem = ({ task, toggleTaskDone, updateTaskName }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    updateTaskName(task.id, newTitle);
    setIsEditing(false);
  };

  return (
    <Card className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <CardContent>
        <div className="flex justify-between items-center">
          {isEditing ? (
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="text-lg font-semibold text-gray-900 border border-gray-300 rounded p-1"
            />
          ) : (
            <h6 className="text-lg font-semibold text-gray-900">
              {task.title}
            </h6>
          )}
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
            {isEditing ? (
              <Button
                onClick={handleSave}
                className="text-blue-600"
                aria-label="Save"
                variant="link"
              >
                <Save className="w-5 h-5" />
              </Button>
            ) : (
              <Button
                onClick={handleEditToggle}
                className="text-blue-600"
                aria-label="Edit"
                variant="link"
              >
                <Edit3 className="w-5 h-5" />
              </Button>
            )}
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

