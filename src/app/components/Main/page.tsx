'use client'
 
import React from 'react';
import Image from 'next/image';
import { useState } from "react"
import Link from 'next/link'
import "../../globals.css"
import profilePic from '../../../../public/profilephoto.jpeg';

const Main: React.FC = () => {
  const [photo, setPhoto] = useState(false);

  const flipPhoto = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setPhoto(!photo);
  };

  return (
    <main className="relative bg-[#0A2B35] h-screen w-full overflow-hidden">
      
      {/* Image with Click Flip */}
      <div className="relative mt-50 ml-50 md:mt-32 md:ml-32">
        <Image
          src={profilePic}
          alt="Profile"
          width={480} 
          height={480} 
          className="object-cover cursor-pointer rounded-full border-2 border-[#c07205] mx-auto md:mx-0"
          onClick={flipPhoto}
        />
      </div>

      {/* Navigation Links */}
      <div className="absolute top-[50%] left-1/4 transform -translate-x-1/4 space-y-6 text-4xl font-semibold text-[#DDB373] md:top-[30%] md:left-1/2 md:transform md:-translate-x-1/4 md:text-2xl">
        <Link href="/pages/about" className="block hover:text-[#c38c8c] transition-all duration-300">
          About Me
        </Link>
        <Link href="/pages/posts" className="block hover:text-[#c38c8c] transition-all duration-300">
          Projects
        </Link>
        <Link href="/publications" className="block hover:text-[#c38c8c] transition-all duration-300">
          Publications
        </Link>
        <Link href="/interests" className="block hover:text-[#c38c8c] transition-all duration-300">
          Interests
        </Link>
      </div>
    </main>
  );
};

export default Main;
