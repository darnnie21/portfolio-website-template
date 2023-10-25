'use client';

import React, { useState, useTransition } from 'react';
import AboutImage from '@/public/images/about-image.png';
import Image from 'next/image';
import { Tab, Tab_Data } from '@/types';
import TabButton from './TabButton';
import { TAB_DATA } from '@/data';

type AboutSectionProps = {};

const AboutSection: React.FC<AboutSectionProps> = props => {
  const [tab, setTab] = useState<Tab>('Skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: Tab) => {
    startTransition(() => setTab(id));
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src={AboutImage}
          alt='about image'
          width={500}
          height={500}
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold mb-3'>
            About Me
          </h2>
          <p className='text-base lg:text-lg'>
            I am a fullstack web developer with a passion
            for creating interactive and responsive web
            applications. I have experience working with
            HTML, CSS, Javascript, Git, React, Redux,
            Node.js, Express, PostgreSQL, Sequelize, etc. I
            am a quick learner and I am always looking to
            expand my knowledge and skill set. A team player
            who is always willing to work with and learn
            from others
          </p>
          <div className='flex flex-row mt-4 gap-3'>
            <TabButton
              selectTab={() => handleTabChange('Skills')}
              active={tab === 'Skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('Education')}
              active={tab === 'Education'}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() =>
                handleTabChange('Certifications')
              }
              active={tab === 'Certifications'}
            >
              Certifications
            </TabButton>
          </div>

          <div className='mt-4'>
            <ul className='list-disc pl-2'>
              {TAB_DATA.find(
                t => t.id === tab
              )?.content.map((item, index) => (
                <li
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
