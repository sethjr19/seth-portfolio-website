import React, { ReactNode } from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets:['latin'],
  weight:['700']
})

interface StyledH2Props {
    children: ReactNode;
  }

const StyledH2 = ({ children }: StyledH2Props) => {
  return (
    <h2 className={`${roboto.className} text-[4rem] lg:text-[8rem]` } style={{ color: 'transparent', WebkitTextStroke: '1px black',}}>
      {children}
    </h2>
  );
};

export default StyledH2;