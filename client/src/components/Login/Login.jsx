import React from 'react'
import "./Login.css"

export default function Login() {
    return (
        <div>
            <div className="login-page">
                <div className="login-container">
                    <div className="signin" id="signin">
                        <h2>Signin</h2>
                        <div className="form">
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
                                <button>SIGN UP</button>
                            </div>
                        </div>
                        <span>Not a member? </span>
                        <a href="/">Sign up now.</a>
                    </div>
                    <div className="signin" id="signup">
                        <h2>Signin</h2>
                        <div className="form">
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
                                <button>SIGN UP</button>
                            </div>
                        </div>
                        <span>Not a member? </span>
                        <a href="/">Sign up now.</a>
                    </div>
                </div>
                {/* <div className="login-container">
                    <h2>Signin</h2>
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
                </div> */}
            </div>
        </div>
    )
}
