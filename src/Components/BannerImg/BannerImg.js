import React from 'react';
import { useState } from 'react';
import classes from '../BannerImg/Banner.module.scss';
import PlayButtonIcon from '../../icons/playbuttonicon';
import BackgroundGear from './BackgroundGear.png'
import FlowerDesign from './FlowerDesign.png'
import Popup from '../../utilities/Popup/Popup';
import HandImg from "../BannerImg/handImg.png";

const RequiredDocuments = () => {

  //State variable for opening the popup for video player
  const [openPopup,setOpenPopup] = useState(false);

    return (
        
            <div className={classes.heroParent}>
              <div className={classes.flowerAndText}>
                {/* <div className={classes.flowerImage}>
                  <img src={FlowerDesign} className={classes.flower} alt=""/>
                </div> */}
              <div className={classes.bannerText}>
              <div><div className={classes.alignText}>Borrow <div className={classes.smartAndBig}> Smart </div>,Dream <div className={classes.smartAndBig}> Big </div></div> <span className={classes.spantg}>Your Financial Journey</span></div> <span className={classes.spantg}>Made Simple.</span>
              
              <div className={classes.caption}><div>Kyunki hum hain aapke har need ke liye</div> taiyaar!</div>
              
              <div className={classes.buttonsOnBanner}>
              <div className={classes.applybtn}>Apply Today</div>
              <Popup/>
              </div>
            
              </div>
              </div>

              <div className={classes.imageContainer}>
                {/* <div>
                  <img src={BackgroundGear} alt="" className={classes.gearImage}/>
                </div> */}
              <div>
              <img src={HandImg}
                alt="Mobile IMG" />
              </div>
              </div>

            </div>

        
    );
};

export default RequiredDocuments;
 
