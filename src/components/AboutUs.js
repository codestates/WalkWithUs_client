import React,{Component} from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import "./AboutUs.css"
import axios from "axios";

import Introduce from "./introduce"
import ShareStory from "./shareYourStory"



class AboutUs extends Component {
    constructor(props){
        super(props)
        this.state = {};

    }
    render() {
        return (
            <div>
                <div className="aboutUsPage">
                <div className="page1">
                <div className="challenge container">
                <Link to ={{pathname: "https://www.instagram.com/walkwithus3/"}} target="_blank">
                    <span className="blue">#같이 걸어요</span>
                    </Link>
                    <br/>
                    <Link to ={{pathname: "https://www.instagram.com/walkwithus3/"}} target="_blank">
                    <span className ="darkGreen">#walkingAroundTheWorld</span>
                    </Link>
                    <Link to ={{pathname: "https://www.instagram.com/walkwithus3/"}} target="_blank">
                    <span className ="orange">#walkingChallenge</span>
                    </Link>
                    <br/>
                    <Link to ={{pathname: "https://www.instagram.com/walkwithus3/"}} target="_blank">
                    <span className="black">#걷기 챌린지</span>
                    </Link>
                    <br/>
                    <Link to ={{pathname: "https://www.instagram.com/walkwithus3/"}} target="_blank">
                    <span className="apricot">#건강해지기</span>&nbsp;&nbsp;&nbsp;
                    </Link>
                    <Link to ={{pathname: "https://www.instagram.com/walkwithus3/"}} target="_blank">
                    <span className="yellowGreen">#walkwithus</span>
                    </Link>
                    <br/>
                    <Link to ={{pathname: "https://www.instagram.com/walkwithus3/"}} target="_blank">
                    <span className="pink">#우울함은 이제 안녕</span>
                    </Link>

                </div>
                <br/>
                <div className="ourVision">
                    
                   <h1>Our vision</h1> 
                <p>언젠가부터, 우리에게 너무나도 당연했던 산책이 힘든 세상이 되었습니다.<br/>

이로 인한, 우울감을 WalkWith Us를 통해 각자의 산책을 공유하면서, 조금이나마 마음의 답답함을 푸실 수 있기를 바랍니다.<br/>

저희 서비스가 사람들에게 작은 희망이 될 수 있기를 기원합니다. </p>
                
                </div>

                </div>
                <div className="page2">
                 <p>집에 갇혀버린 일상,<br/>
                 당신의 사진첩 속 힐링을 공유해보세요.
                 </p>

                 <p>
                 Stuck at home...<br/>

Are you feel depressed?<br/>

Share your memories here
                 </p>
             

                </div>

                <div className="page3">
                    <h1>Share your story</h1>

                    <ShareStory/>





                </div>

                <div className="page4">
                    <h1>Let me introduce our team member!</h1>
                </div>

                <Introduce/>
        


                
                </div>
            </div>
        );
    }
}

export default AboutUs;
