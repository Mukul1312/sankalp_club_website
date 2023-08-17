import React from 'react'
import './Banner.css'
import {BsChevronCompactDown} from "react-icons/bs"
import { Link } from "react-scroll"
import { Link as RouterLink } from 'react-router-dom'

export default function Banner() {
    // const BannerStyle = {
    //     backgroundImage: `url($../../assets/img/top-banner.jpg/`}
    return (
        <div className="position-relative" >
            <div className="cover-overlay"></div>
            <div className="cover-container">
                <div className="cover-title">
                    <h1>To make this world</h1>
                    <h1>a better place to live.</h1>
                </div>
                <RouterLink to="/donate" className="razorpay-donate">DONATE</RouterLink>
                {/* <domLink to="/donate" className="razorpay-donate">DONATE</domLink> */}
                <Link to="Gallery" className='slide-button' >
                    <BsChevronCompactDown  size={"5rem"} color={"#fff"} />
                    {/* <BsChevronCompactDown className="slide-button" size={"5em"} color={"#fff"} /> */}
                    {/* <BsChevronCompactDown size={"5rem"} color={"#fff"} /> */}
                </Link>
            </div>
        </div>
    )
}
