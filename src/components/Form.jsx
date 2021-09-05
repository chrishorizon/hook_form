import React, { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const [ state, setState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPass: ""
      })
    

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
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName" value={firstName} id="" />
                </div>
                <div>
                    <label>Last Name </label>
                    <input onChange={(e) => setLastName(e.target.value)} type="text" name="lastName" vlaue={lastName} id="" />
                </div>
                <div>
                    <label>Email </label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" value={email} />
                </div>
                <div>
                    <label>Password </label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password} />
                </div>
                <div>
                    <label>Confirm Password </label>
                    <input onChange={(e) => setConfirmPass(e.target.value)} type="password" name="confirmPass" value={confirmPass} />
                </div>

            </form>
        </div>
    )
}

export default Form
