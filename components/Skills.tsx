'use client';
import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import Image from 'next/image'
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StyledH2 from './StyledH2';

import { useActiveSectionContext } from "@/context/active-section"
import Modal from './modal';



export default function Skills() {
  const {ref, inView} = useInView({
    threshold:0.5,  }); //checks to see if this seciton is in view
  const {setActiveSection} = useActiveSectionContext();
  const [isOpen, setisOpen] = useState(false)
  const [selectedSkill, setselectedSkill] = useState<string | null>(null);  

  useEffect(() => {
     if (inView) { 
    setActiveSection("Skills")
  }
  }, [inView, setActiveSection])

  const openModal = (skill: string) => {
    if (!selectedSkill) {
      setisOpen(!isOpen);
      setselectedSkill(skill);
    }

    else if (selectedSkill === skill) {
      setisOpen(!isOpen);
      setselectedSkill(null);
    }

    else {
      setselectedSkill(skill);
    }

    console.log('selected skill is', selectedSkill)
      
  }
  
  return (
    <motion.section ref={ref} className='flex flex-col justify-start items-center md:min-h-[30rem] relative' id='skills'>
      {/* <Image className='absolute z-[-99] opacity-60' src="/inknobg.png" 
                    alt='Abstract'
                    width={1000} height={1000}
                    /> */}
        <div>
          <SectionHeading>Skills</SectionHeading>
        </div>
        
        <div className='flex w-[100vw] justify-center relative items-center' >
          <div className='flex flex-col justify-start sm:pr-0 relative'>
          <motion.div 
            className='flex justify-center items-center gap-9'
            animate={{
              x: isOpen && selectedSkill === 'frontend' ? -250 : 0, // Moves to the left by 200px when open
            }}
            transition={{ type: "inertia"}}
          >
            <StyledH2><p className={` hover:text-gray-900 hover:cursor-pointer transition overflow-hidden duration-400 hover:scale-[115%] z-99 ${selectedSkill === 'frontend' ? 'text-gray-900' : ''}`} onClick= {() => openModal('frontend')}>FRONTEND</p>
            </StyledH2>
            <motion.span 
              className='h-[2px] bg-black' 
              animate={{
                width: isOpen && selectedSkill === 'frontend' ? 150 : 0, // Moves to the left by 200px when open
              }}
            ></motion.span>
          </motion.div>

          <motion.div 
            className='flex justify-center items-center gap-9'
            animate={{
              x: isOpen && selectedSkill === 'backend' ? -250 : 0, // Moves to the left by 200px when open
            }}
            transition={{ type: "inertia"}}
          >
            <StyledH2><p className={` hover:text-gray-900 hover:cursor-pointer transition overflow-hidden duration-400 hover:scale-[115%] z-99 ${selectedSkill === 'backend' ? 'text-gray-900' : ''}`} onClick={() => openModal('backend')}>BACKEND</p>
            </StyledH2>
            <motion.span 
              className='h-[2px] bg-black' 
              animate={{
                width: isOpen && selectedSkill === 'backend' ? 250 : 0, // Moves to the left by 200px when open
              }}
            ></motion.span>
          </motion.div>

          <motion.div 
            className='flex justify-center items-center gap-9'
            animate={{
              x: isOpen && selectedSkill === 'others' ? -250 : 0, // Moves to the left by 200px when open
            }}
            transition={{ type: "inertia" }}
          >
            <StyledH2><p className={` hover:text-gray-900 hover:cursor-pointer transition overflow-hidden duration-400 hover:scale-[115%] z-99 ${selectedSkill === 'others' ? 'text-gray-900' : ''}`} onClick={() => openModal('others')}>OTHERS</p>
            </StyledH2>
            <motion.span 
              className='h-[2px] bg-black'
              animate={{
                width: isOpen && selectedSkill === 'others' ? 250 : 0, // Moves to the left by 200px when open
              }}
            ></motion.span>
          </motion.div>
          
          </div>
          <Modal isOpen={isOpen} selectedSkill={selectedSkill} />
        </div>
        
        {/* <div className='pb-5'>
          <ul className='flex flex-wrap justify-center gap-6 text-lg'>
            {
              skillsData.map((skill, index) => (
                <motion.li key={index} className='bg-white border border-black/[0.2] rounded-lg px-4 py-1'
                initial="initial"
                >{skill}</motion.li>
              ))
            }
          </ul>
        </div> */}
        
    </motion.section>

  )
}
