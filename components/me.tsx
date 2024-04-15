'use client';
import Image from 'next/image'
import React from 'react';
import {motion} from 'framer-motion';


export default function Me() {
  return (
    <section className='flex mt-[10rem] mx-[2rem]'>
        <div className='flex items-center justify-center'>

            <div className='h-full pl-10 flex flex-col '>
                <p className='text-[5rem]'>Hi, Im Seth</p>
                <p className='text-[5rem]'>I'm a Web Developer</p>
                <div>
                    contact me
                </div>
            </div>

            <div className='pl-[5rem]'>
                <motion.div 
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ 
                    duration:1
                 }}>
                    <Image src="/abstractnobg.png" 
                    alt='Abstract'
                    width={800} height={700}
                    />
                </motion.div>
            </div>
        </div>

        
    </section>
  )
}
