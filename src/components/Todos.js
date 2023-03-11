import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { add,update } from '../todoSlice'
import Todo from './Todo'

const Todos = () => {
    const {id} = useParams()
    const todos = useSelector((state) => state.todos.value)
    const _todo_init_schema = {id: '', item: ''}
    const [todo, setTodo] = useState(_todo_init_schema);
    const [isEdit, setIsEdit] = useState(false)

    const dispatch = useDispatch()
    const handleAdd = () => {
        dispatch(add(todo))
        setTodo(_todo_init_schema)
    }
    const handleEdit = () => {
        console.log(todo)
        dispatch(update(todo))
        setIsEdit(false)
        setTodo(_todo_init_schema)
    }

    const handleChange = (e) => {
        setTodo({id: todo.id ? todo.id : todos.length +1 , [e.target.name]: e.target.value})
    }

    return (
        <>
            <h1>Todo Management</h1>
            <input type="text" name="item" value={todo.item} onChange={handleChange}/>
            {isEdit ? <button onClick={handleEdit}>Edit</button> : <button onClick={handleAdd}>Add</button>}
            
            <ol>
                { todos.map((t) => <Todo key={t.id} todo={t} setTodo={setTodo} setIsEdit={setIsEdit} />)}
            </ol>
        </>
    )
}

export default Todos