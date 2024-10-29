const { body, validationResult, param } = require("express-validator");
const taskService = require("../service/taskService");

const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskService.getTaskById(id);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const taskList = await taskService.getAllTasks();
    res.status(200).json({ taskList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTask = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { body } = req;
    try {
      const task = await taskService.addTask(body);
      res.status(200).json({ task, status: 'success' });
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: error.message });
    }
  },
];

const updateTask = [
  param("id").isMongoId().withMessage("Invalid Task ID format"),
  body("title").notEmpty().withMessage("Title is required"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { body } = req;
    const { id } = req.params;
    try {
      const task = await taskService.updateTask(id, body);
      res.status(200).json({ task, status: 'success' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
];

const deleteTask = [
  param("id").isMongoId().withMessage("Invalid Task ID format"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { id } = req.params;
      const task = await taskService.deleteTask(id);
      res.status(200).json({ task, status: 'success' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
];
module.exports = { getAllTasks, getTaskById, addTask, deleteTask, updateTask };
