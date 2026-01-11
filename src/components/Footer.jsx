import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Himasha Heshani</h3>
            <p className="text-sm">
              A passionate developer eager to build modern, user-friendly, and impactful digital solutions.  
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#Hero" className="hover:text-white">Home</a></li>
              <li><a href="#Abouts" className="hover:text-white">About Me</a></li>
              <li><a href="#project" className="hover:text-white">Project</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Contact</h3>
            
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <p className="text-sm flex items-center justify-center md:justify-start gap-2">
               <FaEnvelope /> 
               <a href="mailto:himashah910@gmail.com" className="hover:underline">
               himashah910@gmail.com</a>
              </p>
            </div> 
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <p className="text-sm flex items-center justify-center md:justify-start gap-2">
               <FaLinkedinIn /> 
              
              <a href="https://linkedin.com/in/Himasha Bandara" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
              </p>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <p className="text-sm flex items-center justify-center md:justify-start gap-2">
               <FaGithub /> 
              <a href="https://github.com/Himasha2003" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
              </p>
            </div>
            
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center text-sm">
          © {new Date().getFullYear()} All Rights Reserved | Designed by <span className="text-white">Himasha</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
