import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Signin.css"

export default function Signin() {

    const [user, setUser] = useState({
        email:"", password:""
    })

    let name, value;
    const handleInput = (Event) => {
        name = Event.target.name;
        value = Event.target.value;
        setUser({...user, [name] : value})
    }

    const loginData = async (Event) => {
        Event.preventDefault();

        const {email, password} = user;

        const response = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        console.log(response.status);

        if(response.status === 200) {
            window.alert("user signin successfully");
        }
        else if(response.status === 401) {
            window.alert("Invalid credentials");
        }
        else if(response.status === 400) {
            window.alert("Please filled all details correctly");
        }
        else {
            window.alert("Server Error");
        }

        // const data = await response.json();
    }
    return (
        <div>
            <div className="signin-page">
                <div className="login-container">
                    <h2>Sign in</h2>
                    <div className="login-form">
                        <div className="user-box">
                            <input type="email" name='email' value={user.email} onChange={handleInput} autoComplete='off' />
                            <label>Email</label>
                        </div>
                        <div className="user-box">
                            <input type="password" name='password' value={user.password} onChange={handleInput} />
                            <label>Password</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id="checkbox" />
                            <label for="checkbox">Remember me</label>
                        </div>
                        <div className="submit-btn">
                            <button onClick={loginData} >LOGIN</button>
                        </div>
                    </div>
                    <span>Not a member? </span>
                    <Link to="/signup">Sign up now.</Link>
                </div>
            </div>
        </div>
    )
}