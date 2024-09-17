const exppress = require("express");
const { addTasks, allTasks, complete, deleteTasks, editTasks, favourite, progress } = require("../controller/tasksContoroller");
const checkLogin = require("../middlewares/checkLogin");


const tasksRoute = exppress.Router();
tasksRoute.get("/all", checkLogin, allTasks);
tasksRoute.get("/favourite", checkLogin, favourite);
tasksRoute.get("/inprogerss", checkLogin, progress);
tasksRoute.get("/complete", checkLogin, complete);
tasksRoute.post("/addtasks", checkLogin, addTasks);
tasksRoute.put("/edit", checkLogin, editTasks);
tasksRoute.delete("/delete/:id", checkLogin, deleteTasks);

module.exports = tasksRoute;