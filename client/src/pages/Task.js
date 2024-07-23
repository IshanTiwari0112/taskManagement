import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Task() {
  const { id } = useParams();
  const [task, setTask] = useState({});

  useEffect(() => {
    const fetchTask = async () => {
      const res = await axios.get(`/api/tasks/${id}`);
      setTask(res.data);
    };

    fetchTask();
  }, [id]);

  return (
    <div className="container">
      <h1 className="my-4">{task.title}</h1>
      <p>{task.description}</p>
      <p><small className="text-muted">Due: {new Date(task.dueDate).toLocaleDateString()}</small></p>
    </div>
  );
}

export default Task;
