import React, { useState } from 'react'
import "./styles/Login.css"
import {Link,useNavigate as useHistory} from "react-router-dom"
// import { auth } from './firebase'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = (event) => {
        event.preventDefault()  // this line will stops the refresh
        // auth.signInWithEmailAndPassword(email, password)
        //     .then((auth) => {
        //         // logged in, redirect to homepage...
        //         history.push('/')
        //     })
        //     .catch((e) => alert(e.message))
    }
    const register = (event) => {
        event.preventDefault()  //this line will stops the refresh
        // auth.createUserWithEmailAndPassword(email, password)
        //     .then(auth =>{
        //         // created a user and logged in, redirect to homepage...
        //         history.push('/')
        //     })
        //     .catch((e) => alert(e.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img
                 className="login_logo"
                 src="/assets/upchaar.png"
                 alt="upchaar"
                />
            </Link>
            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h6>E-mail</h6>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h6>Password</h6>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button type="submit" onClick={login} style={{color: "#fff"}}>Sign In</button>
                </form>
            </div>
            <div className="create_account">
                <h6> Don't have account? </h6>
                <div></div>
                <button onClick={register}>Create new account</button>
            </div>
        </div>
    )
}

export default Login
