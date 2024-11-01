import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState('');
  
  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo)
  }

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }

  return (
    <>
    <AddTodo editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
    <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
    </>
  )
}

export default App
