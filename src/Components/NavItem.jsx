import React from 'react'

const NavItem = (props) => {
  return (
    <div>
      <a href={props.url} className='nav_item'>{props.name}</a>

    </div>
  )
}

export default NavItem