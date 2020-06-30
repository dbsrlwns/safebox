import React, { useEffect, useState } from 'react'
import  './caloriePage.css'
import Loc from './Sections/loc'


const { naver } = window;


function CaloriePage() {
  

  

  useEffect(() => {

    const end = Loc.members
    const names = end.map(x => x.loc);
    console.log(names,"ages")

  
      const container = document.getElementById('map');
  
      const options = {
        center: new naver.maps.LatLng(37.3685882848096, 127.11486339569092),
        level: 5
      };
  
      const map = new naver.maps.Map(container, options);
  
      var polyline = new naver.maps.Polyline({
        map: map,
        path: names,
        fillOpacity: 0.3,
        strokeColor: 'purple',
        strokeOpacity: 0.6,
        strokeWeight: 4,
        clickable: true
      },);
  
      //거리구하기
      let distance = polyline.getDistance();
    let km = distance / 1000;
      console.log(distance, "dsises")
    console.log(km.toFixed(1),"km")
   
  },[])
  
  return (
    <div id="mapContainer">
    <div id="map" >
    
    </div>
    </div>
  )
}

export default CaloriePage
