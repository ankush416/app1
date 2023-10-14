import React from 'react';
import { NavLink } from 'react-router-dom';
const CategoryCard = (props) => {
  return (
    <>
      <div className='col-md-4'>
        <div className='card'>
          <img src={props.imagename} alt="..." />
  <div className='card-body'>
  <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" className="btn btn-primary">Join Now</NavLink>



  </div>


        </div>
      </div>
    </>
  )
}

export default CategoryCard
