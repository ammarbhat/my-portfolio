import React from 'react'
import { motion } from 'framer-motion'
function Contact() {
  return (
    <>
    <div className='text-3xl sm:text-4xl text-center mt-20 mb-16 text-gray-700 select-none'>Contact</div>
    <div className='m-auto flex h-48 justify-center'>
        <a href="https://www.linkedin.com/in/ammar-qayoom-030b34272" target='blank_'><motion.img src="./linkedin.png" className='w-18 h-16 p-3 m-2' initial={{scale:1}} whileHover={{scale: 1.2}} /></a>
        <a href="https://github.com/ammarbhat" target='blank_'><motion.img src="./github.png" className='w-18 h-16 p-3 m-2' initial={{scale:1}} whileHover={{scale: 1.2}} /></a>
        <a href="mailto:bhatmmr@gmail.com" target='blank_'><motion.img src="./email.png" className='w-18 h-16 p-3 m-2' initial={{scale:1}} whileHover={{scale: 1.2}} /></a>
        <a href="https://twitter.com/bhat_ammar_?t=AGBFdINxyyHRcKo8XF13Lg&s=08" ><motion.img src="./twitter.png" className='w-18 h-16 p-3 m-2' initial={{scale:1}} whileHover={{scale: 1.2}} /></a>
        <a href="tel:+918899155524"><motion.img src="./phone.png" className='w-18 h-16 p-3 m-2' initial={{scale:1}} whileHover={{scale: 1.2}} /></a>


    </div>
    </>
  )
}

export default Contact