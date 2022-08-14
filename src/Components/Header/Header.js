import React from 'react'
import {Link} from "react-router-dom"
import netflix from "../imgs/netflix.png"
import {ImSearch} from "react-icons/im"
function Header() {
  return (<>
  <nav className='header'>
    <img className='logo' src={netflix}  alt="logo"/>
    <div className='menu'>
       <Link to="/">Home</Link>
       <Link to="/">Tv Shows</Link>
       <Link to="/">List</Link>
    </div>
    <ImSearch/>
  </nav>

  </>
    
  )
}

export default Header