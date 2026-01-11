import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Abouts from "./components/Abouts"
import Project from "./components/Project"
import Contact from "./components/Contactform"
import Footer from "./components/Footer"






function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <div className="bg-primary dark:bg-primary-dark dark:text-white "></div>

       <Navbar/>
          
       <Hero/>
       <Abouts/>
       <Project/>
       <Contact/>
      <Footer/>
     
      
      
      
    
      
    </div>
  )
}

export default App
