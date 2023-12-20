import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import TodoMainPage from './components/TodoMainPage/TodoMainPage'
import NavigationMenu from './components/NavigationMenu/NavigationMenu'
import AboutUs from './components/AboutUs/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<TodoMainPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<RegistrationForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
