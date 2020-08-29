"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var TodoForm_1 = require("./components/TodoForm");
var TodoList_1 = require("./components/TodoList");
// Import styles
require("./styles/styles.css");
var App = function () {
    var _a = react_1.useState([]), todos = _a[0], setTodos = _a[1];
    //create new todo item
    var handleTodoCreate = function (todo) {
        //create new todos state
        var newTodosState = __spreadArrays(todos);
        //update new todos state
        newTodosState.push(todo);
        //update todos state
        setTodos(newTodosState);
    };
    //Updating existing todo item
    var handleTodoUpdate = function (event, id) {
        //prepare new todos state
        var newTodosState = __spreadArrays(todos);
        //find correct todo item to update
        newTodosState.find(function (todo) { return todo.id === id; }).text = event.target.value;
        // Update todos state
        setTodos(newTodosState);
    };
    //Remove existing todo item
    var handleTodoRemove = function (id) {
        //prepare new todo state
        var newTodosState = todos.filter(function (todo) { return todo.id !== id; });
        // Update todos state
        setTodos(newTodosState);
    };
    // Check existing todo item as completed
    var handleTodoComplete = function (id) {
        //copy current todos state
        var newTodosState = __spreadArrays(todos);
        // Find the correct todo item and update its 'isCompleted' key
        newTodosState.find(function (todo) { return todo.id === id; }).isCompleted = !newTodosState.find(function (todo) { return todo.id === id; }).isCompleted;
        // Update todos state
        setTodos(newTodosState);
    };
    // Check if todo item has title
    var handleTodoBlur = function (event) {
        if (event.target.value.length === 0) {
            event.target.classList.add('todo-input-error');
        }
        else {
            event.target.classList.remove('todo-input-error');
        }
    };
    return (react_1["default"].createElement("div", { className: "todo-list-app" },
        react_1["default"].createElement(TodoForm_1["default"], { todos: todos, handleTodoCreate: handleTodoCreate }),
        react_1["default"].createElement(TodoList_1["default"], { todos: todos, handleTodoUpdate: handleTodoUpdate, handleTodoRemove: handleTodoRemove, handleTodoComplete: handleTodoComplete, handleTodoBlur: handleTodoBlur })));
};
exports["default"] = App;
