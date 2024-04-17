'use client';

import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image from 'next/image';
import {motion, useTransform} from 'framer-motion';
import { useScroll } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageURL }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
      target: ref,
      offset: ['0 1', '1.33 1'] //when to start animation
    })
    const scale = useTransform(scrollYProgress, [0,1], [0.5, 1])

    return (
    <motion.div 
        ref={ref} 
        style={{ 
        scale: scale,
        opacity: scrollYProgress,
        }}
        className= 'w-[25rem] lg:w-[42rem] max-w-[50rem] '>
        <section className='group bg-gray-300 border border-pink-700/30 overflow-hidden rounded-sm mb-5 scroll-mt-5 relative sm:h-[18rem]' id='projects'>

            <div className='flex flex-col py-6 px-5 lg:w-[50%] w-[50%] h-full group-even:ml-[22rem]'>
                <h3 className='font-semibold text-2xl'>{title}</h3>
                <p className='mt-2 text-[0.9rem]'>{description}</p>
                <ul className='flex flex-wrap gap-2 items-start justify-start mt-[2rem] pb-[1rem] sm:mt-auto'>
                {tags.map((tag, index) => (
                    <li className='bg-gray-600 px-3 text-[0.7rem] rounded-full text-white' key={index}>{tag}</li>
                ))}
                </ul>
            </div>

            <Image className='rounded-t-lg shadow-2xl absolute top-[18%] left-[55%] sm:max-w-1/2 group-even:left-[initial] group-even:right-[55%]' src={imageURL} alt="Project" quality={95}  /> 
        </section>
      </motion.div>
    );
}