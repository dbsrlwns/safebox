import React, { useEffect } from 'react';
import '../../../../index.css';
import Aos from "aos";
import "aos/dist/aos.css";
const Image3 = require('../../../../assets/images/image7.jpg');
const Image4 = require('../../../../assets/images/Image6.png');


function MapsPage() {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);

    return (
        <div>
            <img data-aos="fade-down"  data-aos-offset="300" src={Image3} style={{ marginLeft: '8rem', width: '600px', height: '500px' }}/>
            <div data-aos="fade-up"  data-aos-offset="500" className="div1">
                
                <p style={{ textAlign: "left", fontSize: '50px', color: 'black', fontWeight: 'bolder', marginTop: '15rem', marginLeft: '12rem' }}>
                Safe Box
                </p>
                <p style={{ textAlign: "left", fontSize: '20px', color: 'black', fontWeight: '200', marginLeft: '12rem'}}>
                
                Safe Box는 기존 블랙박스, 액션 카메라의 영상촬영,<br/>
                저장기능을 이용하여 사고가 발생 하였을 때 정확한 상황<br/>
                판단하는 기능을 구현하여 사고가 발생한 기록 또는 사용자의<br/>
                운동기록을 웹사이트에서 영상으로 확인할 수 있습니다.
                
                </p>
            </div>

            <div data-aos="fade-down"  data-aos-offset="500" className="div1" style={{ marginTop: '5rem' }}>
                <p style={{ marginLeft: '8rem', fontSize: '50px', color: 'black', fontWeight: 'bolder', marginTop: '15rem' }}>
                    GPS 기능
                </p>
                <p style={{ marginLeft: '8rem', textAlign: "left", fontSize: '20px', color: 'black', fontWeight: '200'}}>
                자신의 아이의 안전이 걱정되십니까? Safe Box는<br/>
                GPS 기능을 추가하여 사용자의 이동경로 파악할 수 있고<br/>
                이동거리를 계산하여 자신의 운동 기록을 볼 수 있습니다. <br/>
                이것은 당신의 안전과 운동 본능을 일깨워 줄 것입니다.</p>
            </div>
            <div className="div1">
                <img data-aos="fade-up"  data-aos-offset="300" src={Image4} style={{ marginBottom: '3rem', marginLeft: '19rem', width: '550px', height: '500px'}} />
            </div>
            
                
        </div>
    )
}

export default MapsPage