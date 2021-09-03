import React, { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName}
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPass("")
        console.log(`Welcome`, newUser)
    }

    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName" value={firstName} id="" />
                </div>

            </form>
        </div>
    )
}

export default Form
