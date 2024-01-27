import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import './App.css'
import { Dashboard } from './components/Dashboard'

function App() {

  return (
    <>
      <Navbar className="w-screen"/>
      <Dashboard className=""/>
    </>
  )
}

export default App
