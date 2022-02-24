import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './Form'

const initialFormValues = {
  name = '',
  email = '',
  password = '',
  tos = false
}

const initialFormErrors = {
  name = '',
  email = '',
  password = ''
}

const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  
  
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.data, ...users])
      setFormValues(initialFormValues)
    }).catch(err => console.error(err))
  }

  
  return (
    <div className="app-container">
      
    </div>
  );
}

export default App;
