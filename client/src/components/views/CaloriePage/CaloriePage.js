import React, { useEffect, useState } from 'react'
import  './caloriePage.css'
import Loc from './Sections/loc'
import {Select, DatePicker} from 'antd'

const { naver } = window;


function CaloriePage() {

  const a = Loc.one
  const b = Loc.three

  
  const Date = [
    { value: a, label: '1번' },
    { value: b, label: '2번' }
  ]
  const [date,setDate] = useState()
  
  const handleChangeOne = (event) => {
    setDate(event.currentTarget.value)
  }
 
  var qqq = JSON.stringify(date)
  console.log( typeof (qqq),"qqq")
  
  //데이터 받아오기
  const end = Loc.one
  console.log(end,"endendendendned")
  const names = end.map(x => x.loc);
  console.log(names,"ages")
  
  useEffect(() => {
  
    // const fetchdate = Date[1].value
    // console.log(fetchdate,"date")
  
  
    // const end = Loc.one
    // const names = fetchdate.map(x => x.loc);
    // console.log(names,"ages")
    
    
    
    // const end = Loc.one
    // const names = end.map(x => x.loc);
    // console.log(names,"ages")
      
      const container = document.getElementById('map');
  
      const options = {
        center: new naver.maps.LatLng(37.3685882848096, 127.11486339569092),
        level: 5
      };
  
      const map = new naver.maps.Map(container, options);
  
      var polyline = new naver.maps.Polyline({
        map: map,
        path:qqq ,
        fillOpacity: 0.3,
        strokeColor: 'purple',
        strokeOpacity: 0.6,
        strokeWeight: 4,
        clickable: true
      },);
  
      //거리구하기
      let distance = polyline.getDistance();
    let km = distance / 1000;
    console.log(distance, "distance")
    let showDistance = km.toFixed(1)
    console.log(showDistance,"km로 표현")
 
  },[])
  
  
  return (
    <div id="mapContainer">
  
      <select onChange={handleChangeOne}>
        {Date.map((item, index) => (
          <option key={index} value={[item.value]}>{item.label}</option>
        ))}
      </select>
  
  <div> {qqq}
  </div>
    <div id="map" >
    
    </div>

    </div>
  )
}

export default CaloriePage
