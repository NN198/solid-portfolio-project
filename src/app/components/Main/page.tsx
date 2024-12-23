'use client'
 
import React from 'react'
import { useState, useEffect} from 'react';
import Image from 'next/image';
import "../../globals.css"
import profilePic from '../../../../public/profilephoto.jpeg';
import { ArrowDownIcon, DoubleArrowDownIcon, DownloadIcon } from '@radix-ui/react-icons';
const Main: React.FC = () => {

  const [typedText, setTypedText] = useState('');
  const [position, setPosition] = useState(0); // Tracks the arrow's position
  const [direction, setDirection] = useState(1); // 1 for down, -1 for up
  const textToType = `\\H\i! I\'m Noella`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < textToType.length) {
        setTypedText((prev) => prev + textToType.charAt(index));
        index++;
      } else {
        clearInterval(interval); // Stop the interval when typing is complete
      }
    }, 200);
    return () => clearInterval(interval); // Cleanup on component unmount

  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 10) setDirection(-1); // If at the max height, move up
        if (prev <= 0) setDirection(1); // If at the min height, move down
        return prev + direction * 2; // Increment position by direction
      });
    }, 50); // Adjust for smoother animation

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [direction]);

  
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
    <div className='mt-2 flex-1 md:mt-0'>
      <h1 className='title no-underline'>
        {typedText}
      <span className="animate-blink">|</span>
      </h1>
      <p className='mt-3 font-light text-muted-foreground'>
        I&#39;m a software engineer based in Glasgow, UK
        <br/>
        I love building software applications that help create impactful experiences for end-users
        <br/>
        Enjoy problem solving and getting into the nitty-gritty of application development
      </p>
      <br></br>
      <h4>Click below to find out more!</h4>
      <div
      style={{
        transform: `translateY(${position}px)`,
        transition: "transform 0.002s linear", // Smooth transition
      }}
    ><ArrowDownIcon /></div>

      <div className="mt-3 flex items-baseline gap-2">
      
      <button
      onClick={() => {
        const link = document.createElement('a');
        link.href = '/pdf/Noella_Noronha_Resume.pdf';
        link.download = 'Noella_Noronha_Resume.pdf';
        link.click();
      }}
      className="inline-flex items-center text-blue-500 hover:text-blue-600"
    >
      <span>Resume</span>
      <DownloadIcon className="h-4 w-4" />
    </button>
    
    </div>
    </div>
    <div className='relative'>
      <Image
        className='flex-1 rounded-full'
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
