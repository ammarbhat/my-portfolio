import React from 'react'
import { motion } from 'framer-motion'
function Projects(props) {
    return (
            <div className='text-center text-gray-900 w-full flex flex-col justify-center'
            >
                <a href={props.link} target='blank_' className=' w-1/2 m-auto'>
                    <motion.div className='border-2 rounded-xl p-4 my-20 select-none border-neutral-400'
                        
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={props.img} className=' rounded-xl ' />
                        <div className='text-gray-600 text-xl'>{props.title}</div>
                        <div className='flex justify-center'>
                            {props.frameWorks.react && <img src="./react.png" className='w-18 h-16 p-3' />}
                            {props.frameWorks.tailwind && <img src="./tailwind.png" className='w-18 h-16 p-3' />}
                            {props.frameWorks.framerMotion && <img src="./framermotion.png" className='w-18 h-16 p-3' />}

                        </div>
                    </motion.div>
                </a>
            </div>
        
    )
}

export default Projects