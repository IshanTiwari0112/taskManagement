import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get('/api/tasks');
      setTasks(res.data);
    };

    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Tasks</h1>
      {tasks.map(task => (
        <div key={task._id} className="card my-2">
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.description}</p>
            <p className="card-text"><small className="text-muted">Due: {new Date(task.dueDate).toLocaleDateString()}</small></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
