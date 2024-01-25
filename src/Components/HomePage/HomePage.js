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


function HomePage() {
    return (
        <div className="main-container">
            <CreditScore/>
            <BannerImg/>
            <WhyLendingking/>
            <PartnersSlider/>
            <SimpleApplicationProcess/>
            {/* <EmiCalculator/> */}
            <MainEmiComponent/>
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


