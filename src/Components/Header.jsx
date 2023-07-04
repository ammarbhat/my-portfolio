import React from 'react'
import { Link } from "react-scroll"
function Header() {
  
  return (
     
        <nav className='bg-white h-20 shadow-xl w-full flex justify-end z-4'>
            <ul className='flex m-7 items-center'>
            <Link to="about" smooth={true} duration={500}><li className='m-3 text-xl text-gray-700'>About</li></Link>
            <Link to="projects" smooth={true} duration={500}><li className='m-3 text-xl text-gray-700'>Projects</li></Link>
            <Link to="contact" smooth={true} duration={500}><li className='m-3 text-xl text-gray-700'>Contact</li></Link>
                
            </ul>
        
        </nav>
   
  )
}

export default Header