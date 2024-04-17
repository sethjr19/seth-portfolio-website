import React from 'react'
import '../app/fonts.css'

type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function SectionHeading({
    children
}: SectionHeadingProps)
 {
  return (
    <h2 className='text-[2rem] font-sans my-9'>
        {children}
    </h2>
  )
}
