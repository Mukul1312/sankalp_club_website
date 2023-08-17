import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter, BsLinkedin} from 'react-icons/bs';

export default function social() {
    return (
        <div>
            <ul>
                <li className="social_facebook">
                    <a href="https://github.com/Mukul1312"><BsFacebook color="white" className="" /></a>
                </li>
                <li className="social_instagram">
                    <a href="https://github.com/Mukul1312"><BsInstagram color="white" className="" /></a>
                </li>
                <li className="social_twitter">
                    <a href="https://github.com/Mukul1312"><BsTwitter color="white" className="" /></a>
                </li>
                <li className="social_linkedin">
                    <a href="https://github.com/Mukul1312"><BsLinkedin color="white" className="" /></a>
                </li>
            </ul>
        </div>
    )
}
