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
import React, { useEffect } from 'react'
import  './caloriePage.css'

const { naver } = window;

function CaloriePage() {
  
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
        new naver.maps.LatLng(37.359924641705476, 127.1148204803467),
        new naver.maps.LatLng(37.36343797188166, 127.11486339569092),
        new naver.maps.LatLng(37.368520071054576, 127.11473464965819),
        new naver.maps.LatLng(37.3685882848096, 127.1088123321533),
        new naver.maps.LatLng(37.37295383612657, 127.10876941680907),
        new naver.maps.LatLng(37.38001321351567, 127.11851119995116),
        new naver.maps.LatLng(37.378546827477855, 127.11984157562254),
        new naver.maps.LatLng(37.376637072444105, 127.12052822113036),
        new naver.maps.LatLng(37.37530703574853, 127.12190151214598),
        new naver.maps.LatLng(37.371657839593894, 127.11645126342773),
        new naver.maps.LatLng(37.36855417793982, 127.1207857131958)
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
