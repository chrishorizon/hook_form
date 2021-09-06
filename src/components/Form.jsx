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
        "confirmPass" : false
    })
    
    // Validations
    const submitHandler = (e) => {
        e.preventDefault();
        let firstName = false;
        let lastName = false;
        let email = false;
        let confirmPass = false;
        // First name must contain more than 2 characters
        if(inputs.firstName.length >= 2){
            firstName = true;
        }
        // Last name must contain more than 2 characters
        if(inputs.lastName.length > 2){
            lastName = true;
        }
        // Email must contain more than 5 characters
        if(inputs.email.length > 5){
            email = true;
        }
        // Password must match and be at least 8 characters
        if(inputs.confirmPass != inputs.password){
            confirmPass = true;
        }
        setValidState({
            firstName,
            lastName,
            email,
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
                    {(validState.firstName) ? null : <p style={{"color" : "red"}}>Error</p> }
                    {/* {(inputs.firstName.length < 2) ? <p style={{"color" : "red"}}> First name must contain more than 2 characters</p> : null} */}
                </div>
                <div>
                    <label>Last Name </label>
                    <input onChange={onChange} type="text" name="lastName" />
                </div>
                <div>
                    <label>Email </label>
                    <input onChange={onChange} type="email" name="email" />
                </div>
                <div>
                    <label>Password </label>
                    <input onChange={onChange} type="password" name="password" />
                </div>
                <div>
                    <label>Confirm Password </label>
                    <input onChange={onChange} type="password" name="confirmPass" />
                </div>
            </form>
        </div>
    )
}

export default Form
