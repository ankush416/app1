import React from 'react'
import ServiceData from './ServiceData'
import ServiceCard from './ServiceCard'

const Service=()=> {
  return (
    <>
    <div className='container-xxl py-5'>
        <div className='container'>
            <div className='row g-4'>
                {
                    ServiceData.map(val=>{
                        return( <>
                            <ServiceCard key={val.sid}
                            icon={val.icon}
                            stitle={val.stitle}
                            desc={val.desc} />
                      </>  )
                    })
                }

            </div>

        </div>

    </div>
    </>
  )
}

export default Service
