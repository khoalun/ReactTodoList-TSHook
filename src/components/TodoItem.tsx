import * as React from 'react'

//import interfaces
import { TodoItemInterface } from '../interfaces' 

//TodoImter component
const todoItem = (props: TodoItemInterface) => {
    return (
        <div className="todo-item">
            <div onClick={ () => props.handleTodoComplete(props.todo.id)}>
                {props.todo.isCompleted ? (
                    <span className="todo-item-checked">DONE</span>
                ): (
                    <span className="todo-item-unchecked"></span>
                )}
            </div>
            <div className="todo-item-input-wrapper">
                <input 
                    value={props.todo.text}
                    onBlur={props.handleTodoBlur}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}
                />
            </div>

            <div className="item-remove" onClick={ ()=> props.handleTodoRemove(props.todo.id)}> 
                    Remove
            </div>
        </div>
        

    )
}

export default todoItem
