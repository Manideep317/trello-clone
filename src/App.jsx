import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import './App.css'
import { Dashboard } from './components/Dashboard'

function App() {

  return (
    <>
      <Navbar className="w-[100vw]"/>
      <Dashboard className="overflow-hidden"/>
    </>
  )
}

export default App
