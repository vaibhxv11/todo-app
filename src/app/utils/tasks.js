export const fetchTasks = async () => {
    const response = await fetch('/api/tasks');
    const data = await response.json();
    return data;
  };
  
  export const addTask = async (task) => {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
  };
  
  export const updateTask = async (task) => {
    const response = await fetch('/api/tasks', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
  };
  