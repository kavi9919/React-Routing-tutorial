import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {

  const navLinkStyle= ({isActive}) =>{
    return {
      fontWeight: isActive? 'bold' : 'normal',

    }

  }
  return (
    <div>
        <nav>
          <NavLink className="nav-link"  style={navLinkStyle} to='/'>Home</NavLink>
         <NavLink className="nav-link" style={navLinkStyle} to='/contact'>Contact</NavLink>
         <NavLink className="nav-link" style={navLinkStyle} to='/about'>About</NavLink>


        </nav>
   
    </div>
  )
}

export default Navbar