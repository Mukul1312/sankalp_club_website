import React from 'react'
import "./Photo.css"

export default function Photo(props) {
    return (
        <div>
            <div className="image-container">
                <div className="image">
                    <div className="image-overlay"></div>
                    <div className="image" style={{backgroundImage:`url(${props.eventPhoto})`}}></div>
                </div> 
            </div>
        </div>
    )
}

Photo.defaultProps = {
    eventPhotos: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=829&q=80"
}