import React, { useEffect, useState } from 'react'
import  './caloriePage.css'
import Loc from './Sections/loc'
import MapPage from './Sections/MapPage'

const { naver } = window;

function CaloriePage() {
  
  const [Loca, setLoca] = useState([])

  
  useEffect(() => {
    setLoca([...Loca,...Loc.members])
    console.log(Loc.members,"되나용")
    
  },[])
  
<<<<<<< HEAD
    fakeLoc()
  },[])
=======
>>>>>>> 9fcd3380c5b1df2e2ea41932846c0493f995934d
  
  
  
  
  return (
    <div>
<<<<<<< HEAD
      <div id="map" >
    
      </div>
=======
    <div id="map" >
  
      {Loca && Loca.map((movie, index) => (
        <React.Fragment key={index}>
          <MapPage
            movieId={movie.id}
            movieloc={movie.loc}
          />
        </React.Fragment>
      ))}
      
      
  
>>>>>>> 9fcd3380c5b1df2e2ea41932846c0493f995934d
    </div>
  )
}

export default CaloriePage
