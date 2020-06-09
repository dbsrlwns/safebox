import React from 'react';
const img3 = require('../../../../assets/images/kakaoMap.png');
const img4 = require('../../../../assets/images/Image9.jpg');

function LastPage() {
    return (
        <div>
            <div>
                <p style={{ textAlign: "center", fontSize: '55px', color: 'black', fontWeight: 'bolder', marginTop: '7rem' }}>
                파트너 앱 & 액세서리
                </p>
                <p style={{ textAlign: "center", fontSize: '20px', color: 'black', fontWeight: '200' }}>
                건강하고 안전한 라이프스타일을 유지하기 위해 당신이 필요한 도구 외에도, GPS 기능과 칼로리 계산기를 포함한 추가 기능을 
                제공하기 위해<br/> 준비된 다양한 파트너 앱들이 있습니다.
                </p>
            </div>

            <div style={{marginTop: '3rem'}}>
                <img src={img3} style={{ width: '450px', height: '440px', marginLeft: '280px' }} />
                <div className="div1">
                    <img src={img4} style={{ width: '450px', height: '440px', marginLeft: '220px' }}/>
                </div>
            </div>
               
        </div>
    )
}

export default LastPage