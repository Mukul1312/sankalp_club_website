import React from 'react'
import SocialHandle from '../SocialHandle/socialHandle';
import "./card.css"


export default function Card(props) {


    const cardStyle = {
        backgroundImage:`url(${props.photo})`,
        // display: props.post.includes("Associate") ? "none" : "inherit"
    }

    

    function IsHead(){
        if (props.post.includes("Head") && !(props.post.includes("Associate"))) {
            return (
                <div className="Associates">
                    <p>Associates Head</p>                                
                </div>
            );
          
        }else {
            return null;
        }
    }

    return (
        <div>
            <div className="card" style={cardStyle}>
                <div className="card-content">   
                   <h3 className="card-title">{props.name}</h3>
                   <p className="">{props.post}</p>
                   <SocialHandle />
                   <IsHead />
                </div>
            </div>
        </div>
    )
}

Card.defaultProps = {
    photo: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    name: "Member Name",
    post: "Volunteer"
}

// "https://cn.i.cdn.ti-platform.com/cnapac/content/2017/showpage/ben-10/sa/showicon.png"