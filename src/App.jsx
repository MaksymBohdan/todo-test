import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo App</h1>
      </header>
    </div>
  )
}

export default App