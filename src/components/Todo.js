import React from 'react'
import { remove } from '../todoSlice'
import { useDispatch } from 'react-redux'

const Todo = (props) => {
  const dispatch = useDispatch()
  const {todo, setTodo, setIsEdit} = props

  const handleUpdate = (t)=> {
    setTodo(t)
    setIsEdit(true)
  }
  
  const handleDelete = (id)=> {
    dispatch(remove(id))
  }

  return (
    <li>
      ({todo.id}), {todo.item}
      <button onClick={()=>handleUpdate(todo)}>update</button>
      <button onClick={()=>handleDelete(todo.id)}>delete</button>
    </li>
  )
}

export default Todo