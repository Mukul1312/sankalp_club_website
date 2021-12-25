import React from 'react'
import './Gallery.css'
import anchorImg from "../../assets/img/anchors-anchoring.jpeg"
import chairmanImgPortrait from "../../assets/img/chairman-gifting-on-diwali.jpeg"
import chairmanImg from "../../assets/img/chairman-giving-speech-portrait.jpeg"
import directorSpeechImgPortrait from "../../assets/img/Director-giving-speech-portrait.jpeg"
import sanlalpTeam from "../../assets/img/sankalp-team.jpeg"
import img5449 from "../../assets/img/WhatsApp Image 2021-11-07 at 8.54.49 PM.jpeg"
import img5503 from "../../assets/img/WhatsApp Image 2021-11-07 at 8.55.03 PM.jpeg"
import img5515 from "../../assets/img/WhatsApp Image 2021-11-07 at 8.55.15 PM.jpeg"
import img5534 from "../../assets/img/WhatsApp Image 2021-11-07 at 8.55.34 PM.jpeg"
import img5544 from "../../assets/img/WhatsApp Image 2021-11-07 at 8.55.44 PM.jpeg"
import img5659 from "../../assets/img/WhatsApp Image 2021-11-07 at 8.56.59 PM.jpeg"
import img5309 from "../../assets/img/WhatsApp Image 2021-11-07 at 8.53.09 PM.jpeg"
import Photo from '../Photo/Photo'


export default function Gallery() {
    return (
        <div className="pt-5" id="Gallery">
            <div className="container text-center">
                <h1 className="display-3 mb-5">Our Gallery</h1>
            </div>
            <div className="img-gallery container-fluid">
                <div className="img-container">
                    <div className="img-item">
                        <div className="overlay-img"></div>
                        <div className="img">
                            <img className=" " src={chairmanImg} alt="unclear" />
                        </div>
                    </div>  
                </div>
                <div className="img-container">
                    <div className="img-item">
                    <div className="overlay-img"></div>
                        <div className="img">
                            <img className=" " src={chairmanImgPortrait} alt="unclear" />
                        </div>
                    </div>  
                </div>
                <div className="img-container h-2">
                    <div className="img-item">
                    <div className="overlay-img"></div>
                        <div className="img">
                            <img className=" " src={directorSpeechImgPortrait} alt="unclear" />
                        </div>
                    </div>  
                </div>
                <div className="img-container w-2">
                    <div className="img-item">
                    <div className="overlay-img"></div>
                        <div className="img">
                            <img className="" src={sanlalpTeam} alt="unclear" />
                        </div>
                    </div>  
                </div>
                <div className="img-container">
                    <div className="img-item">
                    <div className="overlay-img"></div>
                        <div className="img">
                            <img className=" " src={img5515} alt="unclear" />
                        </div>
                    </div>  
                </div>
                <div className="img-container">
                    <div className="img-item">
                    <div className="overlay-img"></div>
                        <div className="img">
                            <img className=" " src={img5503} alt="unclear" />
                        </div>
                    </div>  
                </div>
                <div className="img-container">
                    <div className="img-item">
                    <div className="overlay-img"></div>
                        <div className="img">
                            <img className=" " src={img5544} alt="unclear" />
                        </div>
                    </div>  
                </div>
                <div className="img-container">
                    <div className="img-item">
                    <div className="overlay-img"></div>
                        <div className="img">
                            <img className=" " src={anchorImg} alt="unclear" />
                        </div>
                    </div>  
                </div>
                <div className="img-container">
                    <div className="img-item">
                    <div className="overlay-img"></div>
                        <div className="img">
                            <img className=" " src={img5309} alt="unclear" />
                        </div>
                    </div>  
                </div>
                <div className="img-container">
                    <div className="img-item">
                    <div className="overlay-img"></div>
                        <div className="img">
                            <img className=" " src={img5659} alt="unclear" />
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}





            {/* <div className="img-gallery container-fluid">
                <Photo className="event-photo" style={{width:"100px", height:"100px"}} eventPhoto={anchorImg} />
                <Photo className="event-photo" style={{width:"100px", height:"100px"}} eventPhoto={anchorImg} />
                <Photo className="event-photo" style={{width:"100px", height:"100px"}} eventPhoto={anchorImg} />
                <Photo className="event-photo" style={{width:"100px", height:"100px"}} eventPhoto={anchorImg} />
                <Photo className="event-photo" style={{width:"100px", height:"100px"}} eventPhoto={anchorImg} />
                <Photo className="event-photo" style={{width:"100px", height:"100px"}} eventPhoto={anchorImg} />
                <Photo className="event-photo" style={{width:"100px", height:"100px"}} eventPhoto={anchorImg} />
            </div> */}