import React from 'react';
import Slider from "react-slick";
const img4 = require('../../../../assets/images/cycle6.jpg');
const img5 = require('../../../../assets/images/cycle5.jpg');
const img6 = require('../../../../assets/images/cycle1.jpg');


function CarouselPage() {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        mouseDrag: true,
        pause: false
      };

    return(
       <div style={{ marginTop: '2rem' }}>
        <Slider {...settings}>
          <div>
            <img src={img4} style={{ height: '700px', width: '100%' }} />
          </div>
          <div>
            <img src={img5} style={{ height: '700px', width: '100%' }}/>
          </div>
          <div>
            <img src={img6} style={{ height: '700px', width: '100%' }}/>
          </div>
        </Slider>
      </div>
    )
}

export default CarouselPage