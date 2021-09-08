import React, { useState } from 'react'

const Form = (props) => {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPass, setConfirmPass] = useState("");

    // Destructuring props dict. from Inputs and setInputs
    const { inputs, setInputs } = props;

    // ...inputs brings in entire collection of state (from app data) and spreads it out.
    // [e.target.name] goes inside of e, find what was targeted and bring out attribute name
    // [e.target.value] sets it to the target value, value gets captured when the client changes info.
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    // Set default boolean to validations below
    const [ validState, setValidState ] = useState({
        "firstName" : false,
        "lastName" : false,
        "email" : false,
        "password" : false,
        "confirmPass" : false
    })
    
    // Validations
    const submitHandler = (e) => {
        e.preventDefault();
        let firstName = false;
        let lastName = false;
        let email = false;
        let password = false;
        let confirmPass = false;
        // First name must contain more than 2 characters
        if(inputs.firstName.length >= 2){
            firstName = true;
        }
        // Last name must contain more than 2 characters
        if(inputs.lastName.length >= 1){
            lastName = true;
        }
        // Email must contain more than 5 characters
        if(inputs.email.length >= 4){
            email = true;
        }
        if(inputs.password.length >= 7){
            password = true;
        }
        // Password must match and be at least 8 characters
        if(inputs.confirmPass != inputs.password){
            confirmPass = true;
        }
        setValidState({
            firstName,
            lastName,
            email,
            password,
            confirmPass
        })
    }

    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = {firstName, lastName}
    //     setFirstName("")
    //     setLastName("")
    //     setEmail("")
    //     setPassword("")
    //     setConfirmPass("")
    // }

    return (
        <div>
            <form onChange={submitHandler}>
                <div>
                    <label>First Name </label>
                    <input onChange={onChange} type="text" name="firstName" />
                    {(validState.firstName) ? null : <p style={{"color" : "red"}}>First name requires at least 2 characters</p> }
                    {/* {(inputs.firstName.length < 2) ? <p style={{"color" : "red"}}> First name must contain more than 2 characters</p> : null} */}
                </div>
                <div>
                    <label>Last Name </label>
                    <input onChange={onChange} type="text" name="lastName" />
                    {(validState.lastName) ? null : <p style={{'color' : 'red'}}>Last name requires at least 2 characters</p> }
                </div>
                <div>
                    <label>Email </label>
                    <input onChange={onChange} type="email" name="email" />
                    {(validState.email) ? null : <p style={{'color' : 'red'}}>Email must be atleast 5 characters</p> }
                </div>
                <div>
                    <label>Password </label>
                    <input onChange={onChange} type="password" name="password" />
                    {(validState.password) ? null : <p style={{"color" : "red"}}>Password must be atleast 8 characters long</p> }
                </div>
                <div>
                    <label>Confirm Password </label>
                    <input onChange={onChange} type="password" name="confirmPass" />
                    {(validState.confirmPass) ? <p style={{"color" : "red"}}>Confirm must match password</p> : null }
                </div>
            </form>
        </div>
    )
}

export default Form
