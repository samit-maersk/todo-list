import React from 'react'
import { useParams } from 'react-router-dom'
import Todos from '../components/Todos'

const Todo = () => {
  document.title = `Todo`
  return (
    <Todos />
  )
}

export default Todo