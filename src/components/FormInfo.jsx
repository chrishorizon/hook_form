import React from 'react'

const FormInfo = (props) => {
    
    const { firstName, lastName, email, password, confirmPass } = props.data

    return (
        <div>
            <p>First Name: {firstName} </p>
            <p>Last Name: {lastName} </p>
            <p>Email: {email} </p>
            <p>Password: {password} </p>
            <p>Confirm Password: {confirmPass} </p>
        </div>
    )
}

export default FormInfo
