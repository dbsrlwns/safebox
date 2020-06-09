import React from 'react';
const Image1 = require('../../../../assets/images/cycle4.jpg');
const Image2 = require('../../../../assets/images/Image2.png');
const Image3 = require('../../../../assets/images/icon4.PNG');
const Image4 = require('../../../../assets/images/icon5.PNG');
const Image5 = require('../../../../assets/images/icon6.PNG');

function StartPage() {
    return (
        <div>
            <div style={{ textAlign: 'center', marginTop: '7rem' }}>
                <img src={Image2} style={{ width: '80px', height: '80px'}} />
                <p style={{ fontSize: '55px', color: 'black', fontWeight: 'bolder', marginTop: '4rem' }}>
                    <i><span style={{fontSize:'65px'}}>Safe Box</span></i>로 만나는 좋은 날날skfskfskfskfskf ccccc
                </p>
            
            <img src={Image1} style={{ width: '100%', height: '750px', marginTop: '2rem', marginBottom: '2rem' }} />
            </div>

            <div className="div1">
                <span style={{ marginLeft: '2rem', fontSize: '20px', color: 'black', fontWeight: 'bold' }}>
                    SAFE BOX
                </span>
                <img src={Image3} style={{ marginLeft: '72rem', width:'60px', height: '70px' }}/>
                <img src={Image4} style={{ marginLeft: '5rem', width:'60px', height: '70px' }}/>
                <img src={Image5} style={{ marginLeft: '5rem', width:'60px', height: '70px' }}/>
            </div>
            
            
        </div>
    )
}

export default StartPage
