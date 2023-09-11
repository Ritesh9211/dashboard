import React from 'react'
import "./SideBar.css"
import { setSelectedComponent } from '../store/filterSlice';
import { useDispatch ,useSelector } from 'react-redux';


const SideBar = () => {
  

  const dispatch = useDispatch();
  const selected = useSelector((state) => state.filter.selectedComponent)
  
  return (
    <div className='SideBar'>
    <div className='SideList'>
        <div className=' Title'>Filters</div>
        <div   className={`SideItem ${selected === 'intensity' ? 'selected' : ''}`} onClick={() => dispatch(setSelectedComponent('intensity'))}>Intensity</div>
        <div  className={`SideItem ${selected === 'likelihood' ? 'selected' : ''}`} onClick={() => dispatch(setSelectedComponent('likelihood'))}>Likelihood</div>
        <div  className={`SideItem ${selected === 'relevance' ? 'selected' : ''}`} onClick={() => dispatch(setSelectedComponent('relevance'))}>Relevance</div>
        <div  className={`SideItem ${selected === 'end_year' ? 'selected' : ''}`} onClick={() => dispatch(setSelectedComponent('end_year'))}>End_year</div>
        <div  className={`SideItem ${selected === 'country' ? 'selected' : ''}`} onClick={() => dispatch(setSelectedComponent('country'))}>Country</div>
        <div  className={`SideItem ${selected === 'topic' ? 'selected' : ''}`} onClick={() => dispatch(setSelectedComponent('topic'))}>Topic</div>
        <div  className={`SideItem ${selected === 'region' ? 'selected' : ''}`} onClick={() => dispatch(setSelectedComponent('region'))}>Region</div>
    </div>
</div>
  )
}

export default SideBar;