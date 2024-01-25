import React, { useState, useEffect } from 'react';
import image from './midun.jpeg'
import './Testimonials.css';
import classes from "../Testimonials/Testimonials.module.scss";
import Comma from "../../icons/Comma/Comma.js";

const Testimonials = () =>{
    return (
       
            <div className={classes.container}>
                <div className={classes.main}>
                <div className={classes.heading}>We Care About Our Customers Experience Too</div>
                <div className={classes.cardContainer}>
                    <div className={classes.cardOne}>
                        <div className={classes.comma}><Comma/></div>
                        <div className={classes.name}>Midhun Mohan</div>
                        <div className={classes.cardOneInfo}>Loan with Minimum Documents I was looking for working capital for my business expansion. I was a bit frustrated with the banks as they asked for lots of documents. I appreciate the way LendingKing processes the loan applications as they ask for minimum documents and give a loan in a few days.</div>
                    </div>

                    <div className={classes.cardTwo}>
                    <div className={classes.comma}><Comma/></div>
                    <div className={classes.name}>Rakesh Kumar</div>
                        <div className={classes.cardTwoInfo}>Professional & Quick services LendingKing has been very helpful! They are very professional and the best thing is the timely services. A true savior of startups I must say.</div>
                    </div>

                    <div className={classes.cardThree}>
                    <div className={classes.comma}><Comma/></div>
                    <div className={classes.name}>Suraj Sinha</div>
                        <div className={classes.cardThreeInfo}>Instant and hassle-free support I am very glad that I was able to find LendingKing at the right time. The instant support that LendingKing gives to procure a loan in the most hassle-free way online is parallel to no other in the market. I will recommend LendingKing to everyone who is in urgent need for a business loan.</div>
                    </div>

                </div>
                </div>
            </div>
    );
};

export default Testimonials;




// const testimonialsData = [
//     {
//         id: 1,
//         quote: "Loan with Minimum Documents I was looking for working capital for my business expansion. I was a bit frustrated with the banks as they asked for lots of documents. I appreciate the way LendingKing processes the loan applications as they ask for minimum documents and give a loan in a few days.",
//         author: "Midhun",
//         company: "Founding Member:- LendingKing",
//     },
//     {
//         id: 2,
//         quote: "Professional & Quick services LendingKing has been very helpful! They are very professional and the best thing is the timely services. A true savior of startups I must say.",
//         author: "Midhun",
//         company: "Founding Member:- LendingKing",
//     },
//     {
//         id: 3,
//         quote: "Instant and hassle-free support I am very glad that I was able to find LendingKing at the right time. The instant support that LendingKing gives to procure a loan in the most hassle-free way online is parallel to no other in the market. I will recommend LendingKing to everyone who is in urgent need for a business loan.",
//         author: "Midhun",
//         company: "Founding Member:- LendingKing",
//     },
//     {
//         id: 4,
//         quote: "Flexible Loan & Repayment terms I am grateful to LendingKing for coming through when my need for working capital was the most. The flexibility that LendingKing provides in procuring a loan as well as the repayment is unlike any other company in the market today. I am forever grateful!",
//         author: "Midhun",
//         company: "Founding Member:- LendingKing",
//     },
// ];

// const Testimonials = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             handleNext();
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [currentIndex]); // Add currentIndex as a dependency
    
//     return (
//         <div className="testimonials-container">
//             <h2>Testimonials*</h2>
//             <div className="testimonials">
//                 <div className="cards-wrapper">
//                     {/* Map through the first three testimonials */}
//                     {testimonialsData.slice(0, 3).map((testimonial, index) => (
//                         <div key={testimonial.id} className={`card ${index === currentIndex ? 'active' : ''}`}>
//                             {/* <img src={image} alt="image" className="quotes-image" /> */}
//                             <p>{testimonial.quote}</p>
//                             {/* <div className="customer-info">
//                                 <span>{testimonial.author} | {testimonial.company}</span>
//                                 <img src={image} alt="Trusted" className="trusted-image" />
//                             </div> */}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/* <div className="navigation">
//                 <button onClick={handlePrev}>Prev</button>
//                 <button onClick={handleNext}>Next</button>
//             </div> */}
//             <p className="disclamer">* These are dummy Testimonials</p>

//         </div>
//     );
// };

