import React from 'react'
import Card from '../card/card'
import profile1 from "../../assets/img/team21/profile1.jpg"
import "./Team.css"

export default function Team() {
    return (
        <div className="team-page">
            <div className="container mb-4 text-center">
                <h1 className="display-3">Our Team</h1>
            </div>

            {/* <div className="row row-cols-6 row-cols-md-2 row-col-sm-1 g-5 mb-5">
                <div className="col"><Card memberName={"Kashif Akhtar"}/></div>
                <div className="col"><Card memberName={"kirti shukla"}/></div>
                <div className="col"><Card memberName={"Vikas Kumar mourya "}/></div>
                <div className="col"><Card memberName={"shreya trivedi"}/></div>
            </div> */}

            <div className="row row-cols-md-4 row-col-sm-1 g-4">
                <div className="col"><Card memberName={"Kashif Akhtar"} memberPost={"idk"} /></div>
                <div className="col"><Card memberName={"Arshveer Singh"} memberPost={"Anchor"} /></div>
                <div className="col"><Card memberName={"Adarsh Singh chauhan"} memberPost={"Vice President"} /></div>
                <div className="col"><Card memberName={"Vikas Kumar mourya "} memberPost={"Event Manager"} /></div>
                <div className="col"><Card memberName={"saksham sahu"} memberPost={"Head"} /></div>
                <div className="col"><Card memberName={"shreya trivedi"} memberPost={"Associate Head"} /></div>
                <div className="col"><Card memberName={"Mukul dubey"} memberPost={"Web development Head"} /></div>
                {/* <div className="col"><Card memberName={"Jatin Rastogi"}/></div>
                <div className="col"><Card memberName={"Vedansh Singh "}/></div>
                <div className="col"><Card memberName={"Shobhit Vishwakarma"}/></div>
                <div className="col"><Card memberName={"kalpna shukla"}/></div>
                <div className="col"><Card memberName={"Saurabh Prajapati"}/></div>
                <div className="col"><Card memberName={"Tanya shivhare"}/></div>
                <div className="col"><Card memberName={"Shikhar Verma"}/></div>
                <div className="col"><Card memberName={"kirti shukla"}/></div>
                <div className="col"><Card memberName={"Himani Singh"}/></div>
                <div className="col"><Card memberName={"Ayush Sharma"}/></div>
                <div className="col"><Card memberName={"Virat mishra"}/></div>
                <div className="col"><Card memberName={"Sonam rajput"}/></div>
                <div className="col"><Card memberName={"Aryan Singh"}/></div>
                <div className="col"><Card memberName={"Aanshi Mishra"}/></div>
                <div className="col"><Card memberName={"Akancha singh kanoujia"}/></div>
                <div className="col"><Card memberName={"arya gupta"}/></div>
                <div className="col"><Card memberName={"Ritik Saxena"}/></div> */}
            </div>
        </div>
    )
}
