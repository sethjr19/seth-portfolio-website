'use client';
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import Image from 'next/image'
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StyledH2 from './StyledH2';


export default function Skills() {
  
  return (
    <motion.section className='flex flex-col justify-start items-center relative h-[100vh]' id='skills'>
      <Image className='absolute z-[-99] opacity-60' src="/inknobg.png" 
                    alt='Abstract'
                    width={1000} height={1000}
                    />
        <SectionHeading>My Skills</SectionHeading>
        <div className='flex flex-col justify-start sm:pr-0 lg:pr-[30rem]'>
          <StyledH2><p className='hover:text-gray-900 transition'>FRONTEND</p></StyledH2>
          <StyledH2>BACKEND</StyledH2>
          <StyledH2>OTHER</StyledH2>
        </div>
        <div className='pb-5'>
          <ul className='flex flex-wrap justify-center gap-6 text-lg'>
            {
              skillsData.map((skill, index) => (
                <motion.li key={index} className='bg-white border border-black/[0.2] rounded-lg px-4 py-1'
                initial="initial"
                >{skill}</motion.li>
              ))
            }
          </ul>
        </div>
    </motion.section>

  )
}
