'use client'
 
import React from 'react';
import Image from 'next/image';
import "../../globals.css"
import profilePic from '../../../../public/profilephoto.jpeg';

const Main: React.FC = () => {
  


  return (
    <section className='flex flex-col items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
    <div className='mt-2 flex-1 md:mt-0'>
      <h1 className='title no-underline'>Hey, I&#39;m Noella.</h1>
      <p className='mt-3 font-light text-muted-foreground'>
        I&#39;m a software engineer based in Glasgow, United Kingdom. I&#39;m
        passionate about learning new technologies and sharing knowledge with
        others.
      </p>
    </div>
    <div className='relative'>
      <Image
        className='flex-1 rounded-lg'
        src={profilePic}
        alt='Noella Noronha'
        width={300}
        height={300}
        priority
      />
    </div>
  </section>
  );
};

export default Main;
