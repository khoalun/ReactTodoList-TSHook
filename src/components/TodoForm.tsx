import React, { useState, useRef } from 'react'

import {TodoInterface, TodoFormInterface} from '../interfaces'
import shortid from 'shortid'

const TodoForm = (props: TodoFormInterface) => {
    //create ref for form input
    const inputRef = useRef<HTMLInputElement>(null)

    //create form state
    const [formState, setFormState] = useState('')

    //handle todo input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //update form state with the text in input
        setFormState(event.target.value);
    }

    //handle "Enter" in todo input
    const handleInputEnter =(event: React.KeyboardEvent)=>{
        //check for 'enter' key
        if(event.key === 'Enter'){
            // prepare new todo object
            const newTodo: TodoInterface = {
                id: shortid.generate(),
                text: formState,
                isCompleted: false
            }
            //create new todoItem
            props.handleTodoCreate(newTodo)

            //reset input field
            if(inputRef && inputRef.current){
                inputRef.current.value= ''
            }
        }
     }
    return (
        <div className="todo-form">
            <input 
                ref={inputRef}
                type="text"
                placeholder="Enter new todo"
                onChange={event => handleInputChange(event)}
                onKeyPress={event => handleInputEnter(event)}
            />
        </div>
    )
}

export default TodoForm
