import React from "react"
import desktopImage from "../assets/desktopapp.png"
import jwebsiteImage from "../assets/juicebar.png"
import swebsiteImage from "../assets/swebsite.png"

const projects =[
    {
        id:1,
        name:"Desktop Application",
        image: desktopImage,
        github:"https://github.com/ICT-Courses/application-development-ca1-Himasha2003.git",
    },
    {
        id:2,
        name:"web site",
        image: jwebsiteImage,
        github:"https://github.com/ICT-Courses/ict2233-ca-01-Himasha2003.git",
    },
    {
        id:3,
        name: "shoe website",
        image: swebsiteImage,
        github: "https://github.com/Hansi-Umayangani/S-S-Footwear-Promo-Website.git",
    },
   
]


const project =() => {
    return(
        <div className="py-20 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100" id="project">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl text-center mb-12 font-bold text-gray-900 dark:text-white">My PROJECTS</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) =>(
                        <div keys={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-black/40 transform transition-transform duration-300 hover:scale-105">
                            <img src={project.image} alt={project.name} className="rounded-lg mb-4
                            w-full h-48 object-cover"></img>
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{project.name}</h3>
                            <p className="text-gray-400 mb-4">{project.technologies}</p>
                            <a href={project.github} className="px-5 py-2 border border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-400 dark:hover:text-black transition rounded-full" target="_blank"
                            rel="noopener noreferrer">GitHub</a>
                        </div>
                    ))}
                        

                  </div>
                  <div className="text-center mt-6">
                    <button className="px-6 py-2 border border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition
                    rounded-full cursor-pointer">View All</button>
                  </div>
                
                
                
            </div>
        </div>
    )
}
export default project