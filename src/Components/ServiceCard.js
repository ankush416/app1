import React from 'react'

const ServiceCard = (props) => {
  return (
    <>
      
    <div className='col-lg-3 col-sm-6'>
    <div className='text-center pt-3 service-item ' >
        <div className='p-4'>
            {props.icon}
            <h5 className='mb-3'>
                {props.stitle}
            </h5>
            <p>{props.desc}</p>
        </div>

    </div>
    </div>

      
    </>
  )
}

export default ServiceCard
