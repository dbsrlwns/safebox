// <<<<<<< HEAD
// import React from "react";
// import MapPage from './Sections/MapPage.js';

// function CaloriePage() {
//     return(
//         <div>
//             <MapPage />
//         </div>
//     )
// =======
import React, { useEffect, useState } from 'react'
import  './caloriePage.css'
import Loc from './Sections/loc'

const { naver } = window;

function CaloriePage() {
  
  const [Loca, setLoca] = useState([])

  
  useEffect(() => {
    const fakeLoc = () => {
      for(let i=0; i<3;i++){
        setLoca(Loc.members[i].loc)
        console.log(Loc.members[i].loc,"되나용")
      }
    }
  
    fakeLoc()
  })
  
  console.log(Loca, "qqqq")
  
  useEffect(() => {
    
    
    
    const container = document.getElementById('map');
   
    const options = {
      center: new naver.maps.LatLng(37.359924641705476, 127.1148204803467),
      level: 3
    };
    const map = new naver.maps.Map(container, options);
  
    var polyline = new naver.maps.Polyline({
      map: map,
      
      path: [
        [127.12293148040771, 37.36043630196386],
        [127.12310314178465, 37.36354029942161],
        [127.12456226348876, 37.365211629488016],
        [127.1122455596923, 37.37544345085402]
      ]
      
    });
    
  }, [])
  
  return (
    <div>
    <div id="map" >
    
    </div>
  </div>
      )
      

}
export default CaloriePage
