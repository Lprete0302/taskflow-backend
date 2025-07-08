const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware'); // Auth middleware

// All task routes require authentication
router.get('/', protect, getTasks);           // GET all tasks
router.post('/', protect, createTask);        // POST create task
router.get('/:id', protect, getTaskById);     // GET task by ID
router.put('/:id', protect, updateTask);      // PUT update task
router.delete('/:id', protect, deleteTask);   // DELETE task

module.exports = router;
