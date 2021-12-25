import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import "./Contact.css"

export default function Contact() {
    return (
        <div className="">
            <div className="banner-container">
                <div className="banner-overlay"></div>
                <div className="banner-content">
                    <h1 className="banner-title">Let’s do something awesome together.</h1>
                    <p className="banner-paragraph">Drop us a line, or give us a heads up if you’re interested in visiting us.</p>
                </div>
                <div className="arrow-down" onClick={() => alert("Hi")} >
                    <BsChevronDown  
                        size="2em"
                        color="black"
                    />
                </div>
            </div>
            <div className="contact" id="contact-details">
                <h1>Get in touch</h1>
                <form className="details" action="" method="post">
                    <div className="input-box">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="phoneno">Phone</label>
                        <input type="tel" name="phoneno" id="phoneno" />
                    </div>
                    <div className="input-message">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="4"></textarea>
                    </div>
                    <input class="" type="submit" value="Submit" />
                </form>
                <p>MPEC Office | Kothi Mandhana kalyanpur</p>
            </div>
        </div>
    )
}
