'use client';
import React from 'react'
import {motion} from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div className='bg-gray-700 my-10 h-[12rem] w-[0.2rem] rounded-full  sm:block lg:block'
    initial={{ opacity:0, y:100 }}
    animate={{ opacity:1, y:0 }}
    transition={{ delay:0.2 }}>

    </motion.div>
  )
}
