import React from 'react'
import CategoryCard from './CategoryCard'
import CategoryData from './CategoryData'
const Category = () => {
  return (
    <>
    <div className='container-xxl py-5'>

    <div className='container'>
      <div className='text-center'>
        <h6 className='section-title bg-white text-center px-3'>Categories</h6>
        <h1 className='mb-5'> Courses Categories</h1>
      </div>
      <div className='row g-3 mb-2'>
        {
          CategoryData.map((val)=>{
            return(
            <CategoryCard  key ={val.id}
            title={val.title}
            imagename={val.imagename}
            />
             )
          })
        }
      </div>
    </div>

    </div>
    </>
  )
}

export default Category
