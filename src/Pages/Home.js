import React from 'react'
import Header from '../Components/Header'
import Service from '../Components/Service'
import Homeimg from '../Images/Home1.jpeg'
import Category from '../Components/Category'
const Home = () => {
  return (
    <>
      <Header 
      title='Get Educated Online from your Home.'
      para='
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum fugit pariatur beatae autem unde laboriosam, minima tempore assumenda quibusdam praesentium magni suscipit reiciendis impedit voluptatum? Praesentium a sint repudiandae velit.'
      visit='/courses'
      btntext='Join Now'
      imgpath={Homeimg}
      />
      <Service/>
      <Category/>
    </>
  )
}

export default Home
