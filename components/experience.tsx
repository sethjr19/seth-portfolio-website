'use client';

import React, { useRef } from 'react'
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { experienceData } from '@/lib/data';
import 'react-vertical-timeline-component/style.min.css';
import {motion, useTransform} from 'framer-motion';
import { useScroll } from 'framer-motion';

export default function Experience() {
    
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
      target: ref,
      offset: ['0 1', '1.33 1'] //when to start animation
    })
    const scale = useTransform(scrollYProgress, [0,1], [0.5, 1])
  return (
    <section id='experience' className='w-[80vw] flex flex-col items-center'>
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline>
            {
                experienceData.map((experience, index) => (
                    <React.Fragment key={index}>
                    <VerticalTimelineElement visible={true}
                    
                    contentStyle={{ 
                        background: "gray",
                        boxShadow: "none",
                        border: "2px solid #191919",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                     }}
                     contentArrowStyle= {{ 
                        borderRight: "0.5rem solid #191919",
                      }}
                      date={experience.date}
                      icon={experience.icon}
                      iconStyle={{ 
                        background: 'white',
                       }}
                      >
                        <h3 className='!font-semibold'>{experience.title}</h3>
                        <p>{experience.location}</p>
                        <p>{experience.description}</p>
                    </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}
