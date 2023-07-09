import React from 'react'
import { motion } from 'framer-motion'
function Projects() {
  return (
   <>
   <h1 className='text-3xl sm:text-4xl text-center mt-56 mb-16 text-gray-700' >Projects that i've worked on:</h1>
   <div className='text-center text-gray-900 justify-center flex flex-wrap'>


   <a href="https://alam-byammar.netlify.app/" target='blank_' className='overflow-hidden'
  
   >
   <motion.div className='border-2 rounded-xl sm:w-96 w-72 p-4 sm:mx-20 my-20'
   style={{
    height: "320px"
   }}
   initial={{scale: 1}}
   whileHover={{scale: 1.1}}
   >
       <img src="./alamss.png" className=' rounded-xl ' />
       <div className='text-gray-600 text-xl'>Al'am Restraunt-page</div>
       <div className='flex justify-center'>
       <img src="./react.png" className='w-18 h-16 p-3' />
       <img src="./tailwind.png" className='w-18 h-16 p-3' />
        
       </div>
   </motion.div>

   </a>



   <a href="https://dictionary-byammar.netlify.app/" target='blank_' className='overflow-hidden'
  
   >
   <motion.div className='border-2 rounded-xl sm:w-96 w-72 p-4 sm:mx-20 my-20'
   style={{
    height: "320px"
   }}
   initial={{scale: 1}}
   whileHover={{scale: 1.1}}
   >
       <img src="./dictss.png" className=' rounded-xl ' />
       <div className='text-gray-600 text-xl'>A simple Dictionary</div>
       <div className='flex justify-center'>
       <img src="./react.png" className='w-18 h-16 p-3' />
       <img src="./tailwind.png" className='w-18 h-16 p-3' />
        
       </div>
   </motion.div>
   </a>

   


   </div>
   </>
  )
}

export default Projects