import React from 'react'
import Header from '../Components/Header'
import Aboutimage from '../Images/Category1.jpeg'
import Service from '../Components/Service'
const About = () => {
  return (
    <>
       <Header 
      title='About eLearning'
      para='
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum fugit pariatur beatae autem unde laboriosam, minima tempore assumenda quibusdam praesentium magni suscipit reiciendis impedit voluptatum? Praesentium a sint repudiandae velit.'
      visit='/courses'
      btntext='About Us'
      imgpath={Aboutimage}
      />
      <Service/>
    </>
  )
}

export default About
