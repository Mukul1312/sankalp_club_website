import React from 'react'
import "./Signin.css"

export default function Signin() {
    return (
        <div>
            <div className="signin-page">
                <div className="login-container">
                    <h2>Login</h2>
                    <div className="login-form">
                        <div className="user-box">
                            <input type="text" />
                            <label>Username</label>
                        </div>
                        <div className="user-box">
                            <input type="password" />
                            <label>Password</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id="checkbox" />
                            <label for="checkbox">Remember me</label>
                        </div>
                        <div className="submit-btn">
                            <button>LOGIN</button>
                        </div>
                    </div>
                    <span>Not a member? </span>
                    <a href="/">Sign up now.</a>
                </div>
            </div>
        </div>
    )
}
