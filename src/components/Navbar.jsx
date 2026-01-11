import React from "react"
import DarkModeToggle from "./DarkModeToggle.jsx";

const Navbar = () => {
    return(
        <nav className="w-full fixed z-50 top-0 left-0 shadow-md backdrop-blur
         bg-gray-100/80 text-gray-900
         dark:bg-gray-900/80 dark:text-gray-100">

            <div className="container mx-auto px-6 py-4">
                <div className="flex  justify-between items-center px-12 ">
                  <div>
                    <span className="text-2xl font-semibold uppercase text-gray-900 dark:text-white">Himasha Bandara</span>
                  </div>
                  
                  <div className = "hidden md:flex items-center space-x-8">
                    <a href= "#Hero" className="relative group text-gray-700 dark:text-gray-300
                     hover:text-teal-700 dark:hover:text-teal-400">
                        <span>Home</span>
                        <span className="absolute w-0 h-0.5 left-0 -bottom-2 group-hover:w-full bg-teal-600 dark:bg-teal-400 transition-all duration-300"></span>
                    </a>
                    <a href= "#Abouts" className="relative group text-gray-700 dark:text-gray-300
                     hover:text-teal-700 dark:hover:text-teal-400">
                        <span>About Me</span>
                        <span className="absolute w-0 h-0.5 left-0 -bottom-2 group-hover:w-full bg-teal-600 dark:bg-teal-400 transition-all duration-300"></span>
                    </a>
                    <a href= "#contact" className="relative group text-gray-700 dark:text-gray-300
                     hover:text-teal-700 dark:hover:text-teal-400">
                        <span>Contact</span>
                        <span className="absolute w-0 h-0.5 left-0 -bottom-2 group-hover:w-full bg-teal-600 dark:bg-teal-400 transition-all duration-300"></span>
                    </a>
                    <a href= "#project" className="relative group text-gray-700 dark:text-gray-300
                     hover:text-teal-700 dark:hover:text-teal-400">
                        <span>Projects</span>
                        <span className="absolute w-0 h-0.5 left-0 -bottom-2 group-hover:w-fullbg-teal-600 dark:bg-teal-400 transition-all duration-300"></span>
                    </a>
                  </div>
                  
                  

                  
                  <div className="hidden md:flex items-center space-x-8"></div> 
                  
                  <DarkModeToggle />
                  
                 
                </div>
            </div>
        </nav>
    )
}

export default Navbar