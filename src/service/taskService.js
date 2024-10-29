const Task = require("../models/taskModel");
const bcrypt = require("bcrypt");
const errorMessages = require("../utils/errorMessages");

const getTaskById = async (id) => {
  try {
    const task = await Task.findById(id);
    if (!task) {
      throw new Error(errorMessages.TASK.INVALID_TASK_ID);
    }
    return task;
  } catch (error) {
    throw new Error(errorMessages.GENERAL.SERVER_ERROR);
  }
};

const getAllTasks = async () => {
  try {
    const taskList = await Task.find();
    return taskList;
  } catch (error) {
    throw new Error(errorMessages.GENERAL.SERVER_ERROR);
  }
};

const addTask = async (body) => {
  try {
    console.log(body)
    const task = await new Task(body).save();
    return task;
  } catch (error) {
    console.log(error)

    throw new Error(errorMessages.GENERAL.SERVER_ERROR);
  }
};

const updateTask = async (id, body) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, body, { new: true });
    if (!updatedTask) {
      throw new Error(errorMessages.TASK.INVALID_TASK_ID);
    }
    return updatedTask;
  } catch (error) {
    throw new Error(errorMessages.GENERAL.SERVER_ERROR);
  }
};
const deleteTask = async (id) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      throw new Error(errorMessages.TASK.INVALID_TASK_ID);
    }
    return deletedTask;
  } catch (error) {
    throw new Error(errorMessages.GENERAL.SERVER_ERROR);
  }
};
module.exports = { getAllTasks, deleteTask, getTaskById, addTask, updateTask };
