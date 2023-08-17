import React from 'react'
import './Footer.css'
import {IconContext} from 'react-icons'
import {BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsCircle} from 'react-icons/bs'

export default function Footer() {
    return (
        <div className="text-light bg-dark">
            <div className="py-5 container-fluid text-center">
                <IconContext.Provider value={{size: "5em"}} >
                    <BsCircle />
                </IconContext.Provider>
                <h1>Sankalp MPGI</h1>
                <div className="footer-social">
                    <ul>
                        <li className="footer_social_facebook">
                            <a href="https://github.com/Mukul1312"><BsFacebook color="white" /></a>
                        </li>
                        <li className="footer_social_instagram">
                            <a href="https://github.com/Mukul1312"><BsInstagram color="white" /></a>
                        </li>
                        <li className="footer_social_twitter">
                            <a href="https://github.com/Mukul1312"><BsTwitter color="white" /></a>
                        </li>
                        <li className="footer_social_linkedin">
                            <a href="https://github.com/Mukul1312"><BsLinkedin color="white" /></a>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>About Us</p>
                    <p>Privacy Policy • Legal</p>
                    <p>Notice a bug? Let us know here.</p>
                    <p>Copyright © 2021 All rights reserved.</p>
                </div>               
            </div>
        </div>
    )
}
