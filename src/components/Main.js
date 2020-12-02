import React,{Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import axios from "axios";
import "./Main.css"


class Main extends Component {
    constructor(props){
        super(props)
        this.state = {};
    }
    render() {
        return (
            <div>
             
             <div className="videoListBody">
              <Link to={`/video/videolist`}>
              <button>walk with us</button>
              </Link>
              <Link to={`/video/uploadvideo`}>
              <div>Upload your video here</div>
              </Link>
             </div>

             <div className="videoListFooter">
              <Link to ={{pathname: "https://www.instagram.com/walkwithus3/"}} target="_blank">
                <div>Instagram</div>
              </Link>  
              <Link to ={{pathname: "https://www.buymeacoffee.com/home"}} target="_blank">
                <div>Support us</div>
              </Link>  
              
             </div>

            </div>
        );
    }
}

export default Main;