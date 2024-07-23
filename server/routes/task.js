const express = require('express');
const { getTasks, getTask, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, getTasks);
router.get('/:id', auth, getTask);
router.post('/', auth, createTask);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

module.exports = router;
