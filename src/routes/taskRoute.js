const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");
const validateToken = require("../middleware/tokenValidator"); 

router.post("/",validateToken, taskController.addTask);
router.get("/:id", validateToken, taskController.getTaskById);
router.get("/", taskController.getAllTasks);
router.put("/:id", validateToken, taskController.updateTask);
router.delete("/:id", validateToken, taskController.deleteTask);

module.exports = router;
