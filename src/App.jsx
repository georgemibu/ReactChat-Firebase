import { useState } from 'react'
import Chat from './components/chat'
import User from './components/User'
import './App.css'

function App() {

  return (
      <div className="App">
        <User/>
        <Chat/>        
      </div>

  )
}

export default App
