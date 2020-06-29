import React, { useEffect } from "react";

const { naver } = window;

function MapPage(props) {
  
  useEffect(() => {
    const container = document.getElementById('map');
    
    const options = {
      center: new naver.maps.LatLng(37.359924641705476, 127.1148204803467),
      level: 3
    };

    const map = new naver.maps.Map(container, options);
    const arr = props.movieloc

    const lon = arr[0]
    const len = arr[1]
    
    var polyline = new naver.maps.Polyline({
      map: map,
      path:[

        new naver.maps.LatLng(37.359924641705476, 127.1100204803467),
        new naver.maps.LatLng(len, lon)
        
        ]
      
    },);
    
  
  }, [])

    return(
      <div>

      </div>
    )
}

export default MapPage
