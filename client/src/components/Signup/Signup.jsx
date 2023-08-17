import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [user, setUser] = useState({
        name:"", email:"", password:""
    });

    let name,value;
    const handleInput = (Event) => {
        name = Event.target.name;
        value = Event.target.value;
        setUser({...user, [name] : value})
    }

    const postData = async (Event) => {
        Event.preventDefault();

        const {name, email, password} = user;

        const response = await fetch("https://sankalp-club.herokuapp.com/register", {
            method: "POST",
            headers: {
                "Origin": "https://sankalp-mpgi.netlify.app/",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password
            })
        });

        
        if(response.status === 201) {
            window.alert("registration successfull");
            
        }
        else if(response.status === 409) {
            window.alert("User already exists");
        }
        else if(response.status === 400) {
            window.alert("please filled all details correctly");
        }
        else{
            window.alert("Server Error");
        }

        // const data = await response.json();
    }

    return (
        <div>
            <div className="signin-page">
                <div className="login-container">
                    <h2>Sign up</h2>
                    <form method="post">
                        <div className="login-form">
                            <div className="user-box">
                                <input type="text" name="name" value={user.name} onChange={handleInput} />
                                <label>Username</label>
                            </div>
                            <div className="user-box">
                                <input type="email" name="email" value={user.email} onChange={handleInput} />
                                <label>Email</label>
                            </div>
                            <div className="user-box">
                                <input type="password" name="password" value={user.password} onChange={handleInput} />
                                <label>Password</label>
                            </div>
                            <div className="submit-btn">
                                <button onClick={postData} >Register</button>
                            </div>
                        </div>
                    </form>
                    <span>Already Signup? </span>
                    <Link to="/login">Sign in now.</Link>
                </div>
            </div>
        </div>
    )
}
