import React, { useEffect, useState } from 'react'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets:['latin'],
    weight:['700']
  })
function Modal({isOpen, selectedSkill}: any) {
    const [modalisOpen, setmodalisOpen] = useState(false)
    const [selectedSkills, setSelectedSkills] = useState<any>(null);

    useEffect(() => {
        setmodalisOpen(isOpen)
    }, [isOpen])

    useEffect(() => {
        if (selectedSkill) {
            const skills = skillsData.find(skill => skill.title === selectedSkill)
            setSelectedSkills(skills)
            console.log(skills?.title)
        }
    }, [selectedSkill])

    if (!modalisOpen) return null;

  return (
    <>
      {modalisOpen ? (
        <motion.div className='sm:relative lg:h-[30rem] min-h-[15rem] w-[20rem] ml-0 md:w-[15rem] lg:mr-[2rem] flex p-5 bg-white m-3 border-l-2 border-black rounded-lg shadow-xl'
            animate={{
              opacity: modalisOpen ? 100 : 0, // Moves to the left by 200px when open
            }}
            transition={{ duration: 2 }}
            >
         <ul className='w-full md:block sm:flex flex-wrap gap-2 justify-center'>
          {
          selectedSkills.skills.map((skill: any, index: number) => {
            const IconComponent = skill.icon;
            return (
            <li className={`${roboto.className} flex items-center justify-between gap-1 w-[5rem] h-[2rem] text-[10px] mb-1 border text-center px-1 py-1 border-black rounded-sm`} key={index}>{skill.title}<IconComponent /></li>
          )})
          }
        </ul>
      </motion.div>
      ) : null}
    </>
  )
}

export default Modal