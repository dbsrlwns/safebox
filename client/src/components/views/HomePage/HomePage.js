import React from 'react';
import CarouselPage from "./Sections/CarouselPage.js";
import MapsPage from "./Sections/MapsPage.js";
import StartPage from "./Sections/StartPage.js";
import LastPage from "./Sections/LastPage.js";

function HomePage() {


    return (
        <div>
            <StartPage></StartPage>
            
            <CarouselPage></CarouselPage>

            <MapsPage></MapsPage>

            <LastPage></LastPage>
        </div>
    )
}

export default HomePage