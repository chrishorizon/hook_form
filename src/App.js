import './App.css';
import Form from './components/Form'
import FormInfo from './components/FormInfo'
import React, { useState } from 'react'

function App() {
  const [ state, setState ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: ""
  })

  return (
    <div className="App">
      <Form />
      <FormInfo />
    </div>
  );
}

export default App;
