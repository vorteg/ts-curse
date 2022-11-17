"use strict";
//Clase que represente una tarea
//1.- Nombre de la tarea
//2.- se ha completado?
class TodoItem {
    constructor(task, isCompleted) {
        this.task = task;
        this.isCompleted = isCompleted;
    }
}
//Administrador de tareas
//1.- Lista de las tareas
//2.- defina las operaciones a ejecutar con las tareas
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        const newItem = new TodoItem(task, false);
        this.tasks.push(newItem);
    }
}
class HTMLHelper {
    static createTaskItem(task) {
        const listItem = document.createElement("li");
        const checkBox = document.createElement("input");
        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                task.isCompleted = true;
                displayTasks();
            }
        });
        const label = document.createElement("label");
        checkBox.type = "checkbox";
        label.innerHTML = task.task;
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        return listItem;
    }
}
const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-task");
const incompleteTasksHolder = document.getElementById("incomplete-tasks");
const completedTasksHolder = document.getElementById("completed-tasks");
const taskManager = new TaskManager();
addButton.addEventListener("click", () => {
    taskManager.addTask(taskInput.value);
    displayTasks();
    clear();
});
function displayTasks() {
    completedTasksHolder.innerHTML = "";
    incompleteTasksHolder.innerHTML = "";
    taskManager.tasks.forEach((element) => {
        var listItem = HTMLHelper.createTaskItem(element);
        if (element.isCompleted) {
            completedTasksHolder.appendChild(listItem);
        }
        else {
            incompleteTasksHolder.appendChild(listItem);
        }
    });
}
function clear() {
    taskInput.value = "";
}
