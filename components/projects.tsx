import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'

export default function Projects() {
  return (
    <section className='flex flex-col justify-center items-center mb-[8rem]'>
        <SectionHeading>My Projects</SectionHeading>
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
