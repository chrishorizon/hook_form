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
            <form>
                <div>
                    <label>First Name </label>
                    <input onChange={onChange} type="text" name="firstName" />
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
