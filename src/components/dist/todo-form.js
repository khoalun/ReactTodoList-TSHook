"use strict";
exports.__esModule = true;
var react_1 = require("react");
var shortid_1 = require("shortid");
var TodoForm = function (props) {
    //create ref for form input
    var inputRef = react_1.useRef(null);
    //create form state
    var _a = react_1.useState(''), formState = _a[0], setFormState = _a[1];
    //handle todo input change
    var handleInputChange = function (event) {
        //update form state with the text in input
        setFormState(event.target.value);
    };
    //handle "Enter" in todo input
    var handleInputEnter = function (event) {
        //check for 'enter' key
        if (event.key === 'Enter') {
            // prepare new todo object
            var newTodo = {
                id: shortid_1["default"].generate(),
                text: formState,
                isCompleted: false
            };
            //create new todoItem
            props.handleTodoCreate(newTodo);
            //reset input field
            if (inputRef && inputRef.current) {
                inputRef.current.value = '';
            }
        }
    };
    return (react_1["default"].createElement("div", { className: "todo-form" },
        react_1["default"].createElement("input", { ref: inputRef, type: "text", placeholder: "Enter new todo", onChange: function (event) { return handleInputChange(event); }, onKeyPress: function (event) { return handleInputEnter(event); } })));
};
exports["default"] = TodoForm;
