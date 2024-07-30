import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';

const TaskDetailPage = () => {
  const { tasks, updateTask } = useContext(TaskContext);
  const router = useRouter();
  const { id } = router.query;
  const [task, setTask] = useState(null);

  useEffect(() => {
    if (id) {
      const foundTask = tasks.find(task => task.id === id);
      setTask(foundTask);
    }
  }, [id, tasks]);

  return task ? (
    <TaskForm task={task} updateTask={updateTask} />
  ) : (
    <p>Loading...</p>
  );
};

export default TaskDetailPage;
