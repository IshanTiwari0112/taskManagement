import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Task from './pages/Task';
import CreateEditTask from './pages/CreateEditTask';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/task/:id" component={Task} />
        <Route path="/create-task" component={CreateEditTask} />
        <Route path="/edit-task/:id" component={CreateEditTask} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
