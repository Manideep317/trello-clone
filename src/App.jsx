import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import './App.css'
import { Dashboard } from './components/Dashboard'

function App() {

  return (
    <>
      <div className='w-screen'>
      <Navbar className="w-screen"/>
      <Dashboard/>
      </div>
    </>
  )
}

export default App
