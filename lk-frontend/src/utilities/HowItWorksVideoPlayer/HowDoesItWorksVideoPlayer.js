import React from "react";
import { Container } from 'react-bootstrap';
// import classes from './VideoPlayer.module.scss'
// import ErrorRedButton from "../../icons/ErrorRedButton/ErrorRedButton.js";

const HowDoesItWorksVideoPlayer = () =>{
    return (
        <div>
            <Container >
                <div style ={{padding:'-20px' , margin: '-20px'}} className="ratio ratio-4x3">
  <iframe style={{width:'550px' , height:'295px'}} src="https://www.youtube.com/embed/rdB13lFexNk?si=JguRDPyxd5OHLthq" title="YouTube video" allowFullScreen></iframe>
</div>
            </Container>
        </div>
    )
}

export default HowDoesItWorksVideoPlayer;

