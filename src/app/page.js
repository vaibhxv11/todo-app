
"use client";

import { useRouter } from 'next/navigation';
import { useState, useContext, useEffect } from 'react';
import { TaskContext } from './context/TaskContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Card, CardContent } from '../components/ui/card'; // Ensure correct import if needed
import { Search, ListTodo } from 'lucide-react';
import Navbar from "./components/Navbar"
import { Input } from "../components/ui/input"; // Import Input component

const HomePage = () => {
  const { tasks, addTask, updateTask, toggleTaskDone, searchTasks } = useContext(TaskContext);
  const router = useRouter();
  const { query } = router;
  const [searchTerm, setSearchTerm] = useState(query?.search || '');

  useEffect(() => {
    if (query?.search) {
      searchTasks(query?.search);
    }
  }, [query?.search]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    router.push(`/?search=${e.target.value}`, undefined, { shallow: true });
    searchTasks(e.target.value);
  };

  const upcomingTasks = tasks.filter(task => !task.done);
  const completedTasks = tasks.filter(task => task.done);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          <div className='md:w-[75%]  mx-auto '>
          <div className='sm:w-[60%] md:w-[100%]'>
          <div className="flex gap-4 mb-6  ">
              <Card className="flex-1 bg-blue-50 ">
                <CardContent className="flex flex-col items-center">
                  <h3 className="text-xl font-medium text-blue-800">Upcoming Tasks</h3>
                  <p className="text-3xl font-bold text-blue-700">{upcomingTasks.length}</p>
                </CardContent>
              </Card>
              <Card className="flex-1 bg-green-50">
                <CardContent className="flex flex-col items-center">
                  <h3 className="text-xl font-medium text-green-800">Completed Tasks</h3>
                  <p className="text-3xl font-bold text-green-700">{completedTasks.length}</p>
                </CardContent>
              </Card>
            </div>
          </div>
            <Card className="p-4 mb-6 md:w-[90%] bg-white shadow-md mx-auto rounded-lg">
              <CardContent className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold mx-auto text-gray-800">
                  <ListTodo className="inline mr-2" size={20} />
                  Add New Task
                </h2>
                <TaskForm addTask={addTask} />
              </CardContent>
            </Card>
          </div>
          <div>
            <div className="flex items-center md:w-[70%] gap-4 mb-6">
              <Input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search tasks"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="text-gray-500" size={24} />
            </div>
           
            <Card className="p-4 mb-6 bg-white shadow-md rounded-lg md:w-[70%]">
              <CardContent>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Upcoming Tasks
                </h2>
                <TaskList tasks={upcomingTasks} toggleTaskDone={toggleTaskDone} />
              </CardContent>
            </Card>
            <Card className="p-4 bg-white shadow-md rounded-lg md:w-[70%]">
              <CardContent>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Completed Tasks
                </h2>
                <TaskList tasks={completedTasks} toggleTaskDone={toggleTaskDone} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
