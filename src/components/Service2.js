import React from 'react'

const Service2 = ({ text, img, textp }) => {
  return (
    <div>
      <div className="box-img">
       <img src='' alt="" img={img} />
    </div>
      <h3>{text}</h3>
      <p>{textp}</p>
    </div>
  )
}

export default Service2