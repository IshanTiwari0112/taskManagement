import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function CreateEditTask() {
  const { id } = useParams();
  const history = useHistory();
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    status: ''
  });

  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        const res = await axios.get(`/api/tasks/${id}`);
        setTask(res.data);
      };

      fetchTask();
    }
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setTask(prevTask => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (id) {
      await axios.put(`/api/tasks/${id}`, task);
    } else {
      await axios.post('/api/tasks', task);
    }
    history.push('/');
  };

  return (
    <div className="container">
      <h1 className="my-4">{id ? 'Edit Task' : 'Create Task'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" name="title" value={task.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" name="description" value={task.description} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <input type="date" className="form-control" name="dueDate" value={task.dueDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Priority</label>
          <select className="form-control" name="priority" value={task.priority} onChange={handleChange} required>
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="form-group">
          <label>Status</label>
          <select className="form-control" name="status" value={task.status} onChange={handleChange} required>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">{id ? 'Update Task' : 'Create Task'}</button>
      </form>
    </div>
  );
}

export default CreateEditTask;
