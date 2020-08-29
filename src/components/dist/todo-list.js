"use strict";
exports.__esModule = true;
var react_1 = require("react");
var todo_item_1 = require("./todo-item");
var todoList = function (props) {
    return (react_1["default"].createElement("div", { className: "todo-list" },
        react_1["default"].createElement("ul", null, props.todos.map(function (todo) {
            react_1["default"].createElement("li", { key: todo.id },
                react_1["default"].createElement(todo_item_1["default"], { todo: todo, handleTodoUpdate: props.handleTodoUpdate, handleTodoRemove: props.handleTodoRemove, handleTodoComplete: props.handleTodoComplete, handleTodoBlur: props.handleTodoBlur }));
        }))));
};
exports["default"] = todoList;
