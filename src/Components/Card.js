import React from 'react'

function Card({imag}) {
  return (
    <div>
         <img  src={imag} alt="cover" className="card" />
         
    </div>
  )
}

export default Card