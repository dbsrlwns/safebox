import React, { useEffect, useState } from 'react'
import  './caloriePage.css'
import Loc from './Sections/loc'
import MapPage from './Sections/MapPage'


function CaloriePage() {
  
  const [Loca, setLoca] = useState([])

  
  useEffect(() => {
    setLoca([...Loca, ...Loc.members])
    console.log(Loc.members,"되나용")
    
  },[]) 
  
  return (
    <div id="map" style={{width:"50%"}}>
  
      {Loca && Loca.map((movie, index) => (
        <React.Fragment key={index}>
          <MapPage
            movieId={movie.id}
            movieloc={movie.loc}
          />
        </React.Fragment>
      ))}
    
    </div>
  )
}

export default CaloriePage
