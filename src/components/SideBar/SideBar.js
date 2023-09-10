import React from 'react'
import "./SideBar.css"

const SideBar = () => {
  

  return (
    <div className='SideBar'>
    <div className='SideList'>
        <div className=' Title'>Filters</div>
        <div className='SideItem'>Intensity</div>
        <div className='SideItem'>Likelihood</div>
        <div className='SideItem'>Relevance</div>
        <div className='SideItem'>Year</div>
        <div className='SideItem'>Country</div>
        <div className='SideItem'>Topic</div>
        <div className='SideItem'>Region</div>
    </div>
</div>
  )
}

export default SideBar;