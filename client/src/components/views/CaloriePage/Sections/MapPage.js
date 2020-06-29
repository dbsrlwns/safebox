import React, { useEffect } from "react";

const { naver } = window;

function MapPage(props) {
  

  
  useEffect(() => {
    // console.log(props.movieloc,"propsssss")
    const arr = props.movieloc
    console.log(arr,"array")
    const lon = arr[0]
    const len = arr[1]
    console.log(arr[0],'이거는')
    console.log(arr[1],'이거는111')
    
    
    const container = document.getElementById('map');
    
    const options = {
      center: new naver.maps.LatLng(37.359924641705476, 127.1148204803467),
      level: 3
    };
    const map = new naver.maps.Map(container, options);
    
    var polyline = new naver.maps.Polyline({
      map: map,
      path:[
    
        new naver.maps.LatLng(37.359924641705476, 127.1148204803467),
        new naver.maps.LatLng(37.359924641705476, 127.1100204803467),
        new naver.maps.LatLng(len, lon),
        
        ]
    },[]);
    
  
  }, [])

    return(
       <>
         
         </>
    )
}

export default MapPage
