import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <>
      <div className='container-fluid py-5 bg-dark hero-header mb-5'> 
      <div className='container my-5 p-5'>
        <div className='row align-items-center g-5'>
            <div className='col-lg-6 text-center text-lg-start'>
                <h1 className='display-4 text-white'>{props.title} </h1>
                <p className='text-white mb-4 pb-2'> {props.para}  </p>
<NavLink to={props.visit} className='btn btn-light py-mb-3 px-md-5 hero-btn'>{props.btntext}</NavLink>
            </div>
            <div className='col-lg-6 text-center text-lg-end overflow-hidden'>
                <img className='img-fluid' src={props.imgpath} alt="imge not found"/>
            </div>
        </div>
        </div></div>
    </>
  )
}

export default Header
