'use client';
import Image from 'next/image'
import React, { useEffect } from 'react';
import {motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section';

export default function Me() {
    const {ref, inView} = useInView({
        threshold:0.5,  }); //checks to see if this seciton is in view
      const {setActiveSection} = useActiveSectionContext();
      
      useEffect(() => {
         if (inView) { 
        setActiveSection("Home")
      }
      }, [inView, setActiveSection])

  return (
    <section ref={ref} className='flex mt-[8rem] scroll-mb-20' id="Home">
        <div className='flex items-center justify-center'>

            <div className='h-full pl-10 flex flex-col '>
                <p className='text-[2rem]'>Hi, Im Seth</p>
                <motion.span className='underline underline-offset-8 decoration-pink-700' 
                    initial={{ x:-50, opacity: 0 }}
                    animate={{ x:0, opacity:1 }}
                    transition={{ delay:0.5 }}
                    ><p className='text-[2rem]'><span className='text-[2rem] font-bold'>Web Developer<span className='text-pink-300'>.</span></span></p></motion.span>

                <div className='my-3 flex gap-3 lg:pr-[52%]'>
                    <Link href="#contact" className='bg-gray-900 text-white px-3 py-3 rounded-full outline-none focus:scale-110 hover:scale-105 transition'>
                        <p className='text-[0.5rem]'>Contact Me</p>
                    </Link>
                    <Link href="#contact" className='bg-pink-700 text-white px-3 py-3 rounded-full outline-none focus:scale-110 hover:scale-105 transition'>
                        <p className='text-[0.5rem]'>Download My CV</p>
                    </Link>
                </div>

                <div>
                    <h2 className='mt-4 mb-2 text-[0.8rem] text-pink-700 font-semibold'>About me</h2>
                    <span>
                        <p className='text-[0.7rem]'>
                        I am a front-end web developer, I graduated in 2023 from the <b>University of Loughborough. </b>
                 My passion's are in creating beautiful, intuitive websites and web applications.</p>
                    </span>
                </div>
            </div>

            <div className='pl-[5rem]'>
                <motion.div 
                //     initial={{ opacity:0 }}
                //     animate={{ opacity:1 }}
                //     transition={{ 
                //     duration:1
                //  }}
                 >
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
