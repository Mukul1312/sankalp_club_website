import React from 'react'
import './Banner.css'
import {BsChevronCompactDown} from "react-icons/bs"
import {Link,to,Button} from "react-scroll"

export default function Banner() {
    // const BannerStyle = {
    //     backgroundImage: `url(${process.env.PUBLIC_URL}/img/top-banner.jpg`}
    return (
        <div className="position-relative" >
            <div className="cover-overlay"></div>
            <div className="cover-container">
                    <div className="cover-title">
                        <h1 className="display-4 fw-bold">To make this world</h1>
                        <h1 className="display-4 fw-bold">a better place to live.</h1>
                    </div>
                    <button className="slide-button btn" >
                            <BsChevronCompactDown size={"5em"} color={"#fff"} />
                    </button>
            </div>
        </div>
    )
}
