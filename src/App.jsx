import { useState } from "react"
import "./style.css"
import { NewTodoForm } from "./NewTodoForm"

export default function App(){

  const [todos, setTodo] = useState([])

  function addTodo(title){
      setTodo( currentTodos =>{
          return [...todos, {id: crypto.randomUUID(), title, completed: false},]
         })
  }


  function toggleTodo(id, completed){
    setTodo(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id==id){
          return{...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
  setTodo(currentTodos =>{
    return currentTodos.filter(todo =>todo.id !== id)
  })
  }

  return(
  <>
  <NewTodoForm onSubmit = {addTodo} />
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo =>{
      return <li key={todo.id}>
      <label>
        <input type ="checkbox" checked={todo.completed} onChange={e=>{
          toggleTodo(todo.id, e.target.checked)
        }} />
        {todo.title}
      </label>
      <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
    </li>
    })}
    </ul>
  </>
  )
}