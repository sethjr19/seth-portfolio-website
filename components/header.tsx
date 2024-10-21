'use client';

import React, { useEffect, useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import { useActiveSectionContext } from "@/context/active-section"
import clsx from 'clsx';

export default function Header() {
    const ref = useRef<HTMLDivElement>(null)
    const { activeSection, setActiveSection} = useActiveSectionContext();
    // const [activeSection, setActiveSection] = useState('Home')
    const { scrollYProgress } = useScroll()
    
      // Adjust transform mapping
      const navOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);


  return (
    <header className='z-[99] relative'>
        <motion.div className='fixed h-[3rem] mt-8 w-[40rem] left-1/2 shadow-sm border-white bg-white rounded-full'
        style={{ opacity: navOpacity }}
        initial={{ y: -100, x:"-50%", opacity: 0 }}
        animate={{ y:0, x:"-50%", opacity:1 }}>
        </motion.div>
        <motion.nav className='flex fixed mt-[2rem] left-1/2 h-12 -translate-x-1/2'>
            <ul className='flex w-[30rem] flex-wrap items-center justify-evenly font-medium sm:gap-1'>
                {links.map(link => (
                    <motion.li className='h-3/4 flex items-center justify-center relative' key={link.hash} 
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y:0, opacity:0.8 }}>
                        <Link className={clsx('px-3 hover:text-gray-500 transition text-[8px]',
                         {
                            "text-white" : activeSection === link.name
                        })} href={link.hash} onClick={() => setActiveSection(link.name)}>{link.name}
                        {link.name === activeSection && (
                            <motion.span className='bg-pink-500 rounded-full inset-1 absolute -z-10' layoutId='activeSection'
                            transition={{ 
                                type:'spring',
                                stiffness:'350',
                                damping:30,
                             }}></motion.span>
                        )}
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
        
    </header>
  )
}
