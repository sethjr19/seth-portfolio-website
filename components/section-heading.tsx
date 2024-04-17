import React from 'react'
import '../app/fonts.css'
import { Abel } from 'next/font/google';

const abel = Abel({
  subsets:['latin'],
  weight:['400']
})

type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function SectionHeading({
    children
}: SectionHeadingProps)
 {
  return (
    <h2 className={`${abel.className} text-[2rem] font-sans my-9 tracking-[2rem]`}>
        {children}
    </h2>
  )
}
