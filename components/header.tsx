'use client';

import React, { useContext, useState } from 'react'
import {motion} from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';

export default function Header() {
    const [activeSection, setActiveSection] = useState('Home')

  return (
    <header className='z-[99] relative'>
        <motion.div className='fixed top-0 mt-8 h-[3.5rem] w-2/5 left-1/2 shadow-sm border-white bg-white rounded-full'
        initial={{ y: -100, x:"-50%", opacity: 0 }}
        animate={{ y:0, x:"-50%", opacity:1 }}>
        </motion.div>

        <nav className='flex fixed top-[2.2rem] left-1/2 h-12 -translate-x-1/2'>
            <ul className='flex w-[50rem] flex-wrap items-center justify-evenly font-medium sm:gap-1'>
                {links.map(link => (
                    <motion.li className='h-3/4 flex items-center justify-center relative' key={link.hash} 
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y:0, opacity:0.8 }}>
                        <Link className={clsx('px-3 hover:text-gray-500 transition',
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
        </nav>
    </header>
  )
}
