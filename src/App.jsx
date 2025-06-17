import './App.css' 
import React from 'react'
import Nav from './Nav.jsx'

function App() {
  return (
    <div className="app-container">
      <Nav />
      <main className="content">
        <h1>Welcome to Real Madrid Trivia</h1>
        <p>Test your knowledge about the greatest football club in the world!</p>
      </main>
    </div>
  )
}

export default App
