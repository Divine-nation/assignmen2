import React from 'react'
import '../components/Main.css'
import Service2 from '../components/Service2'
import des1 from '../images/des-1.jpg'
import des2 from '../images/des-2.jpg'

const Service = () => {
  return (
    <div>
     <div className="container">
         <div className="box-img">
       <Service2 text='Travels and Tours'  img={des1} textp='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptates.' />
    </div>
         <div className="box-img">
       
       <Service2 text='Nature Travel' img={des2} textp='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptates.' />
    </div>
      
        </div>
       
    </div>
  )
}

export default Service