import React from "react"

const Contact =() => {
    return(
      <div className="py-20 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100" id="contact">
        
        <div className="container mx-auto px-6">
            <div className="text-center mb-10">
               <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 dark:text-white">Contact</h1>
               <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Get in touch</span>
            </div>
             {/* Form Card */}
             <form
               className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-black/40 p-8"
               action="https://formspree.io/f/xnjjaywd"
               method="POST"
               encType="text/plain">

               <div className="w-full max-w-2xl mx-auto mt-6">
                 <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-400 mb-2">Your Name</label>
                    <input className="w-full px-6 py-2 rounded outline-none bg-white text-gray-900 border border-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 placeholder-gray-400" type="text" name="name" placeholder="Enter Your Name" required/>
                 </div>
                 <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input className="w-full px-6 py-2 rounded outline-none bg-white text-gray-900 border border-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 placeholder-gray-400" type="email" name="email" placeholder="Enter Your Email" required/>
                 </div>
                
                 <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Your Message</label>
                    <textarea className="w-full px-6 py-2 rounded outline-none bg-white text-gray-900 border border-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 placeholder-gray-400" type="textarea" name="message" placeholder="Enter Your Message" required/>
                 </div>

                 <input type="hidden" name="_next" value="https://himasha2003.github.io/my-portfolio-website/thank-you" />


                 <div className="flex justify-center mt-4">
                 <button
                   onClick={() => {
                   window.location.href = `mailto:himashah910@gmail.com?subject=Portfolio%20Contact&body=Hello%2C%20I%20would%20like%20to%20connect%20with%20you.`;
                  }}
                  className="px-8 py-2 rounded-full bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-black transition"
                 >
                 Send Message
                 </button>
                 </div>
                </div>
             </form>

             
        </div>
      </div>
    )
}

export default Contact