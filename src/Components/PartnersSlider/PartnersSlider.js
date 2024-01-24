
import React from 'react';
import iifl from './iifl2.jpeg';
import primal from './pirmal.jpeg';
import vivriti from './vivriti2.jpeg';
// import lendingKart from './lk2.jpeg';
import classes from '../PartnersSlider/PartnersSlider.module.scss';
import kotak from './kotak-logo.png.png';
import abc from './abc-logo.png.png';
import flexiloan from './Flexiloan.png.png';
import lendingKart from './lending-kart.png.png';

const partnerLogos = [kotak, flexiloan, lendingKart, abc,kotak, flexiloan, lendingKart, abc,kotak, flexiloan, lendingKart, abc,kotak, flexiloan, lendingKart, abc,kotak, flexiloan, lendingKart, abc,kotak, flexiloan, lendingKart, abc,kotak, flexiloan, lendingKart, abc,kotak, flexiloan, lendingKart, abc,kotak, flexiloan, lendingKart, abc,kotak, flexiloan, lendingKart, abc,kotak, flexiloan, lendingKart, abc,kotak, flexiloan, lendingKart, abc,kotak, flexiloan, lendingKart, abc];

const PartnersSlider = () => {
  return (
    
    <div className={classes.main}>
      <div className={classes.heading}>Our Partners</div>
      <div className={classes.fader}></div>
      <div className={classes.marquee}>
        <div className={classes.marqueeContent}>
          {partnerLogos.map((logo, index) => (
            <div key={index} className={classes.marqueeItem}>
              <img
                src={logo}
                alt="client image"
                style={{ height: "110px", width: '265.25px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default PartnersSlider;

