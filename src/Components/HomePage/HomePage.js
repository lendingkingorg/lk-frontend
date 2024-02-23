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
// import EMICalculator from '../EmiCalculator/EmiCalculator';
import { isMobile } from "react-device-detect";
import DataTable from '../DataTable/DataTable';

function HomePage() {
    return (
        <div style={{   overflowX:isMobile?"hidden":null }} className="main-container">
<DataTable/>
           
         
        </div>
    )
}

export default HomePage;


