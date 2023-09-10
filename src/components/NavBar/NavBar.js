import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='NavBar'>
        <div className='NavList'>
            <div className='NavItem'>
             Home
            </div>
            <div className='NavItem'>
             Filters
            </div>
            <div className='NavItem'>
             Graphs
            </div>
            {/* <div className='NavItem'>
             data
            </div>
            <div className='NavItem'>
             data
            </div>
            <div className='NavItem'>
             data
            </div> */}
        </div>
    </div>
  )
}

export default NavBar