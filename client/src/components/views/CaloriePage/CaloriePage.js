import React, { useEffect, useState } from 'react'
import  './caloriePage.css'
import Loc from './Sections/loc'
import MapPage from './Sections/MapPage'

const { naver } = window;

function CaloriePage() {
  
  const [Loca, setLoca] = useState([])

  
  useEffect(() => {
    setLoca([...Loca,...Loc.members])
    // console.log(Loc.members,"되나용")
   
  },[])
  
  
  
  return (
    <div>

    <div id="map" style={{height:'400px', width:'500px'}} >


 

      {Loca && Loca.map((movie, index) => (
        <React.Fragment key={index}>
          <MapPage
            movieId={movie.id}
            movieloc={movie.loc}
          />
        </React.Fragment>
      ))}
      
    </div>

    </div>
  )
}

export default CaloriePage
