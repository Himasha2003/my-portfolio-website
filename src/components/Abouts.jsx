import React from "react";
import AboutImage from "../assets/Hero.jpeg";

const skills = [
  "Project Management",
  "Communication",
  "UI / UX",
  "Time Management",
  "Git / GitHub",
];


const Abouts = () => {
  return (
    <div id="Abouts"
      className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300
      py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
       About Me
      </h2>

      
      <div className="flex items-center justify-center gap-8 flex-wrap">

        
        <img 
          src={AboutImage} 
          alt="About Me" 
          className="w-72 rounded-xl shadow-lg dark:shadow-black/40"

        />

        
        <div className="max-w-lg text-left space-y-4">

          <p>
            I am an enthusiastic <strong>BSc IT undergraduate</strong> with a strong passion 
            for technology and problem-solving. I have hands-on experience in 
            <strong> Python, C#, and JavaScript</strong>, and I enjoy building both 
            <strong> web applications</strong> and <strong>website designs</strong>.
          </p>
          <p>
            Beyond academics, I actively participate in <strong>university clubs</strong>, 
            where I’ve developed valuable skills in <strong>teamwork and leadership</strong>. 
            I am also passionate about <strong>Business Analysis (BA)</strong> and 
            <strong> Quality Assurance (QA)</strong>.
          </p>
          
          
        </div>
      </div>
      {/* Skills Section */}
      <div className="max-w-3xl mx-auto mt-16">
       <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
         Skills
       </h3>

       <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
           <div
            key={index}
            className="bg-gray-200 dark:bg-gray-700
            text-gray-800 dark:text-gray-200
            px-4 py-2 rounded-lg text-sm font-medium
            hover:scale-105 transition-transform duration-200"
           >
            {skill}
           </div>
          ))}
        </div>
       </div>
      </div>


    </div>
  );
};

export default Abouts;
