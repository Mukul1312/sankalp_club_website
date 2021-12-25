import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter, BsLinkedin} from 'react-icons/bs'

export default function social() {
    return (
        <div>
            <ul>
                <li className="social_facebook">
                    <a href="#"><BsFacebook color="white" className="" /></a>
                </li>
                <li className="social_instagram">
                    <a href="#"><BsInstagram color="white" className="" /></a>
                </li>
                <li className="social_twitter">
                    <a href="#"><BsTwitter color="white" className="" /></a>
                </li>
                <li className="social_linkedin">
                    <a href="#"><BsLinkedin color="white" className="" /></a>
                </li>
            </ul>
        </div>
    )
}
