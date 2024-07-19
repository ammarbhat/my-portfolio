import React from 'react'
import { motion } from 'framer-motion'
function Projects(props) {
    return (
        <>
            <div className='text-center text-gray-900 justify-center flex flex-wrap'>


                <a href={props.link} target='blank_' className='overflow-hidden'

                >
                    <motion.div className='border-2 rounded-xl sm:w-96 w-72 p-4 sm:mx-20 my-20 select-none'
                        style={{
                            height: "320px"
                        }}
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
        </>
    )
}

export default Projects