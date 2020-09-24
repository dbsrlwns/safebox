import React, { useEffect, useState } from 'react'
import './caloriePage.css'
import Loc from './Sections/loc'
import { Select, DatePicker } from 'antd'

const { naver } = window

function CaloriePage () {
  
  const a = Loc.three
  const b = Loc.three
  
  const [date, setDate] = useState()
  
  console.log(date, 'qqqq')
  
  //데이터 받아오기
  const end = Loc.one
  console.log(end, 'endendendendned')
  const names = end.map(x => x.loc)
  console.log(names, 'ages')
  
  useEffect(() => {
    
    // const end = Loc.one
    // const names = fetchdate.map(x => x.loc);
    // console.log(names,"ages")
    
    const container = document.getElementById('map')
    
    const options = {
      center: new naver.maps.LatLng(37.3685882848096, 127.11486339569092),
      level: 5,
    }
    
    const map = new naver.maps.Map(container, options)
    
    var polyline = new naver.maps.Polyline({
      map: map,
      path: names,
      fillOpacity: 0.3,
      strokeColor: 'blue',
      strokeOpacity: 0.6,
      strokeWeight: 4,
      clickable: true,
    })
    
    //거리구하기
    let distance = polyline.getDistance()
    let km = distance / 1000
    // console.log(distance, "distance")
     let showDistance = km.toFixed(1)
  
    console.log(showDistance, 'km로 표현')
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      
      
      <div id="mapContainer">
        
        
        <div>
        
        </div>
        <div id="map">
        
        </div>
      
      </div>
    </div>
  )
}

export default CaloriePage
