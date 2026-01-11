import React from "react"
import HeroImage from "../assets/Hero.jpeg"

const Hero = () => {
    return (
        <div id="Hero"
         className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100
         text-center py-20">
            <img src={HeroImage} alt="Himasha Bandara"
             className="mx-auto mb-8 w-48 h-48 rounded-full object-cover shadow-lg dark:shadow-black/40 transform transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-4xl font-bold mb-4">
                I am{" "}
                <span className="text-teal-400">Himasha Bandara</span>
                ,<br/>Bsc.Hons IT Undergratuate
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                University of sri jayewardenepura
            </p>
            <div className= "flex justify-center items-center space-x-4" >
                {/* Hire Me Button */}
                <a
                  href="mailto:himashah910@gmail.com?subject=Hiring Inquiry"
                >
                <button className="px-5 py-2 border border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-400 dark:hover:text-black transition">HIRE ME</button>
                </a>
                <a
                 href="/Resume.pdf"
                 target="_blank"
                 rel="noopener noreferrer">

                 <button className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">RESUME</button>
                </a>
            </div>
        </div>
    )
}

export default Hero