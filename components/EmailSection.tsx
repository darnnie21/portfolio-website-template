import React from 'react';
import GithubIcon from '@/public/github-icon.svg';
import LinkedinIcon from '@/public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

type EmailSectionProps = {};

const EmailSection: React.FC<EmailSectionProps> = props => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
      <div>
        <h5 className='text-2xlfont-bold text-white my-2'>
          Let's Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I'm currently looking for new opportunities, my
          inbox is always open. Whether you have a question
          or just want to say hi, I'll try my best to get
          back to you!
        </p>
        <div className='socials flex gap-2'>
          <Link href='github.com'>
            <Image
              src={GithubIcon}
              alt='Github Icon'
            ></Image>
          </Link>
          <Link href='linkedin.com'>
            <Image
              src={LinkedinIcon}
              alt='Github Icon'
            ></Image>
          </Link>
        </div>
      </div>

      <div>
        <form className='flex flex-col gap-4'>
          <div className='flex flex-col gap-3'>
            <label
              htmlFor='email'
              className='text-white block text-sm font-medium'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='jacob@gmail.com'
              className='rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label
              htmlFor='subject'
              className='text-white block text-sm font-medium'
            >
              Subject
            </label>
            <input
              type='text'
              name='subject'
              id='subject'
              required
              placeholder='Just saying hi'
              className='rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label
              htmlFor='message'
              className='text-white block text-sm font-medium'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              required
              placeholder='Leave a message...'
              className='rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5'
            />
          </div>

          <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
