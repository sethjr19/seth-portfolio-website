'use client';

import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { experienceData } from '@/lib/data';
import 'react-vertical-timeline-component/style.min.css';
import { useActiveSectionContext } from '@/context/active-section';
import { useInView, IntersectionOptions  } from 'react-intersection-observer';

export default function Experience() {
  const {ref, inView} = useInView({
    threshold:0.5,  }); //checks to see if this seciton is in view
    
  const {setActiveSection} = useActiveSectionContext();
  
  useEffect(() => {
     if (inView) { 
    setActiveSection("Experience")
  }
  }, [inView, setActiveSection])

  return (
    <section ref={ref} id='experience' className='w-[80vw] flex flex-col items-center'>
        <SectionHeading>Experience</SectionHeading>
        <VerticalTimeline lineColor='gray'>
            {
                experienceData.map((experience, index) => (
                        <React.Fragment key={index}>
                        <VerticalTimelineElement 
                        {...(inView) ? {visible:true} : {visible:false}} 
                    contentStyle={{ 
                        zIndex:99,
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
