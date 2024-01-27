// import React from 'react';

// const HomePage = () => {
//     return (
//         <div>
//             <h1>Hello Hom21</h1>
//         </div>
//     );
// };

// export default HomePage;

import React from 'react';
import WhyLendingking from '../WhyLendingking/WhyLendingKing'
import SimpleApplicationProcess from '../SimpleApplicationProcess/SimpleApplicationProcess'
import RequiredDocuments from '../RequiredDocuments/RequiredDocuments'
import Testimonials from '../Testimonials/Testimonials'
import EmiCalculator from '../EmiCalculator/EmiCalculator'
import MainEmiComponent from '../MainEmiComponent/MainEmiComponent'
import Footer from '../Footer/Footer'
import BannerImg from '../BannerImg/BannerImg'
import PartnersSlider from '../PartnersSlider/PartnersSlider'
// import OurTeam from '../OurTeam/OurTeam'
import FrequencyAskedQuestions from '../FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import JoinUsKnowMore from '../JoinUsKnowMore/JoinUsKnowMore';
import MobileApp from '../MobileApp/MobileApp';
import CreditScore from '../CreditScore/CreditScore';
import FormElement from "../FormElement/FormElement.js";
import classes from "../Footer/Footer.module.scss"
import EMICalculator from '../EmiCalculator/EmiCalculator';
// import EMICalculator from '../EmiCalculator/EmiCalculator';
import { isMobile } from "react-device-detect";

function HomePage() {
    return (
        <div style={{   overflowX:isMobile?"hidden":null }} className="main-container">

            <CreditScore/>
            <div className={classes.Backgroundscreen}>
            <BannerImg/>
            <WhyLendingking/>
            </div>
            <PartnersSlider/>
            <SimpleApplicationProcess/>
            {/* <EmiCalculator/> */}
            {/* <EMICalculator/> */}
            {/* <MainEmiComponent/> */}
            <EMICalculator/>
            <RequiredDocuments/>
            <Testimonials/>
            <MobileApp/>
            <JoinUsKnowMore/>
            <FrequencyAskedQuestions/>
            <FormElement/>
            {/* <OurTeam/> */}
            <Footer />
        </div>
    )
}

export default HomePage;


