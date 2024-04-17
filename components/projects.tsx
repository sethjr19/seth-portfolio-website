'use client';
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useActiveSectionContext } from '@/context/active-section';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const {ref, inView} = useInView({
    threshold:0.5,  }); //checks to see if this seciton is in view
  const {setActiveSection} = useActiveSectionContext();
  
  useEffect(() => {
     if (inView) { 
    setActiveSection("Projects")
  }
  }, [inView, setActiveSection])

  return (
    <section ref={ref} className='flex flex-col justify-center items-center mb-[8rem]'>
        <SectionHeading>Projects</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project}/>
                 </React.Fragment>
            ))}
        </div>
    </section>
  )
}
