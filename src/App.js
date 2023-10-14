import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js' // question kya hm bootstrap koo index.js me import krwa skte he
import Navbar from './Components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Contact  from './Pages/Contact'
import Courses from './Pages/Courses'
import About from './Pages/About'
import './css/style.css'
import Footer from './Components/Footer'
const App = () => {
  return (
    <> <div className='{stylescustomFont}'>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='courses' element={<Courses/>}/>
  <Route path='contact' element={<Contact/>}/>
</Routes></div>
   
   <Footer/> </>
  )
}
export default App
