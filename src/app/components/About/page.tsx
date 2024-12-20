'use client'

import React from 'react';
import "../../../app/globals.css";

const About: React.FC = () => {
  return (
    <main className="relative bg-[#0A2B35] h-screen w-full flex flex-col md:flex-row items-center md:items-start p-8 md:p-16">
      {/* Profile Photo Section
      <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
        <Image
          src={profilePic}
          alt="Profile"
          width={250}
          height={250}
          className="object-cover rounded-full border-4 border-[#c07205]"
        />
      </div> */}

      {/* Skills and Details Section */}
      <div className="mt-8 md:mt-0 md:ml-16 w-full md:w-2/3 text-[#DDB373] space-y-8">
        <section>
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <ul className="space-y-2">
            <li>
              <strong>Programming Languages:</strong> JavaScript, TypeScript, Python, Java
            </li>
            <li>
              <strong>Frontend:</strong> React, Next.js, Angular
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Spring Boot, Django
            </li>
            <li>
              <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Spoken Languages</h2>
          <p>English, Japanese, Hindi</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Interests</h2>
          <p>
            Piano playing, badminton, climbing, exploring new technologies, and collaborating with non-profits to encourage women in STEM.
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
