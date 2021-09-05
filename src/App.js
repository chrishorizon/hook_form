import './App.css';
import Form from './components/Form'
import FormInfo from './components/FormInfo'
import React, { useState } from 'react'

function App() {

  // Destructure state - Object
  const [ state, setState ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: ""
  })

  return ( //Input and setInputs were collectted into a dict. called props
    <div className="App">
      <Form inputs={state} setInputs={setState} />
      <FormInfo data={state} />
    </div>
  );
}

export default App;
