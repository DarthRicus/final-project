import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './RegistrationForm.css'
import Login from './Login'
import Register from './Register'

function RegistrationForm() {
  const navigate = useNavigate()
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  const handleLogin = () => {
    navigate('/')
  }

  return (
    <div className="RegistrationForm">
      {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} onLogin={handleLogin} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  )
}

export default RegistrationForm
