import React from 'react'
import { motion } from "framer-motion"
function About() {
  return (
    <>
      <motion.div className=' w-full h-screen text-6xl text-left md:p-48 sm:20 p-12 pt-36 font-medium text-gray-800'
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 1 }}
      >Hello there! I'm <span className='text-red-500'>Ammar.</span>
        <div className="text-gray-500 text-xl block pl-1">A <span className='text-red-500'>Front-end Web developer</span> and active learner. </div>
        <div className="block text-gray-500 text-xl  pl-1">I like to build minimalist websites.</div>
        <div className="block text-gray-500 text-xl  pl-1"><img src="./location.png" className='w-3 inline' /> Jammu & Kashmir, India</div>

      </motion.div>
      <div className='w-auto  flex flex-col items-center overflow-hidden'>
        <motion.div className='text-gray-700  mx-20 bg-white rounded-xl w-86 sm:w-auto border-2 p-10'
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >I'm an accomplished web developer proficient in a range of technologies. With expertise in HTML, CSS, and JavaScript, I have the foundation to build stylish and interactive web pages. I also specialize in React, a powerful library that enables me to create dynamic and scalable applications. To enhance user experiences, I utilize Tailwind CSS, a utility-first framework known for its flexibility and rapid development capabilities. Additionally, I incorporate Framer Motion to bring websites to life through captivating animations. I'm passionate about crafting visually appealing and functional websites that leave a lasting impression. Let's collaborate and bring your digital vision to reality!</motion.div>
        <motion.div className='  rounded-xl border-2 mx-20 mt-12 bg-white flex flex-wrap sm:flex-row items-center justify-center'
          whileInView={{ x: 0 }}
          initial={{ x: 300 }}
          transition={{ duration: 0.5 }}
        >
          <img src="./html.png" className='w-20 h-20 p-3' />
          <img src="./css.png" className='w-16 h-16 bg-white p-3' />
          <img src="./js.png" className='w-16 h-16 p-3 rounded-xl' />
          <img src="./react.png" className='w-18 h-16 p-3' />
          <img src="./tailwind.png" className='w-18 h-16 p-3' />
          <img src="./git.png" className='w-18 h-16 p-3' />
          <img src="./github.png" className='w-18 h-16 p-3' />
          <img src="./framermotion.png" className='w-18 h-16 p-3' />
        </motion.div>
      </div>

    </>
  )
}

export default About