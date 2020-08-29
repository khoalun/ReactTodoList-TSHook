import React, {useState} from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import {TodoInterface} from'./interfaces'
// Import styles
import './styles/styles.css'

const App = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([])

  //create new todo item
  const handleTodoCreate = (todo: TodoInterface) => {
    //create new todos state
    const newTodosState: TodoInterface[] = [... todos]

    //update new todos state
    newTodosState.push(todo)

    //update todos state
    setTodos(newTodosState)
  }

  //Updating existing todo item
  const handleTodoUpdate = (event: React.ChangeEvent<HTMLInputElement>, id: string)=> {
    
    //prepare new todos state
    const newTodosState: TodoInterface[] = [... todos]

    //find correct todo item to update
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value

     // Update todos state
     setTodos(newTodosState)
  }

  //Remove existing todo item
  const handleTodoRemove = (id: string) => {

    //prepare new todo state
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)

      // Update todos state
      setTodos(newTodosState)
  }

  // Check existing todo item as completed
  const handleTodoComplete= (id: string) => {

    //copy current todos state
    const newTodosState: TodoInterface[] = [... todos]
    
    // Find the correct todo item and update its 'isCompleted' key
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted

    // Update todos state
    setTodos(newTodosState)
  }

  // Check if todo item has title
  const handleTodoBlur = (event: React.ChangeEvent<HTMLInputElement>)=> {
    if (event.target.value.length === 0) {
      event.target.classList.add('todo-input-error')
    } else {
      event.target.classList.remove('todo-input-error')
    }
  }
  return (
    <div className="todo-list-app">
    {/* Todo form component */}
    <TodoForm
      todos={todos}
      handleTodoCreate={handleTodoCreate}
    />
    {/* Todo list component */}
    <TodoList
      todos={todos}
      handleTodoUpdate={handleTodoUpdate}
      handleTodoRemove={handleTodoRemove}
      handleTodoComplete={handleTodoComplete}
      handleTodoBlur={handleTodoBlur}
    />
  </div>
  );
}

export default App;
