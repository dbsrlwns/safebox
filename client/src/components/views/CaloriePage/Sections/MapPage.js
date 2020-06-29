import React, { useEffect } from "react";

const { naver } = window;

function MapPage(props) {
  
  console.log(typeof(props.movieloc),"propsssss")
  const obbb = props.movieloc;
  console.log(Object.entries(obbb),'이거는')
  
  
  useEffect(() => {
    
    const container = document.getElementById('map');
    
    const options = {
      center: new naver.maps.LatLng(37.359924641705476, 127.1148204803467),
      level: 3
    };
    const map = new naver.maps.Map(container, options);
    
    var polyline = new naver.maps.Polyline({
      map: map,
      path:[
        props.movieloc
      ]
    });
    
  
  }, [])

    return(
       <>
         
         </>
    )
}

export default MapPage
