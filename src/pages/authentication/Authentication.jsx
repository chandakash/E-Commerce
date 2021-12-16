import React from 'react'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'
import './Authentication.scss'

export const Authentication = () => {
    return (
        <div className="authentication">
            <SignIn/>
            <SignUp/>
        </div>
    )
}
