import React, { useEffect } from "react";

const { naver } = window; 

function MapPage() {
  
        useEffect(() => {
            const container = document.getElementById('map'); 
            const mapOptions = {
                center: new naver.maps.LatLng(37.3595704, 127.105399),
                zoom: 10
            }
            const map = new naver.maps.Map('map', {
                center: new naver.maps.LatLng(37.3595704, 127.105399),
                zoom: 10
            });
        }, [])
  
    return(
        <div id="map" style={{ width: "100%", height: "1000px", overflow: 'visible' }}>
           
        </div>
    )
}

export default MapPage