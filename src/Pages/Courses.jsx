import React from 'react'
import Header from '../Components/Header'
import Service from '../Components/Service'
import Course from '../Images/Category2.jpeg'
const Courses = () => {
  return (
    <>
       <Header 
      title='Get Educated Online from your Home.'
      para='
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum fugit pariatur beatae autem unde laboriosam, minima tempore assumenda quibusdam praesentium magni suscipit reiciendis impedit voluptatum? Praesentium a sint repudiandae velit.'
      visit='/courses'
      btntext='Join Now'
      imgpath={Course}
      />
      <Service/>
    </>
  )
}

export default Courses
