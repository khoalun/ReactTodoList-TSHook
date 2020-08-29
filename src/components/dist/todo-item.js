"use strict";
exports.__esModule = true;
var React = require("react");
//TodoImter component
var todoItem = function (props) {
    return (React.createElement("div", { className: "todo-item" },
        React.createElement("div", { onClick: function () { return props.handleTodoComplete(props.todo.id); } }, props.todo.isCompleted ? (React.createElement("span", { className: "todo-item-checked" }, "DONE")) : (React.createElement("span", { className: "todo-item-unchecked" }))),
        React.createElement("div", { className: "todo-item-input-wrapper" },
            React.createElement("input", { value: props.todo.text, onBlur: props.handleTodoBlur, onChange: function (event) { return props.handleTodoUpdate(event, props.todo.id); } })),
        React.createElement("div", { className: "item-remove", onClick: function () { return props.handleTodoRemove(props.todo.id); } }, "Remove")));
};
exports["default"] = todoItem;
