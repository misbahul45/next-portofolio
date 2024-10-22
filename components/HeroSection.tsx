'use client'
import Image from 'next/image'
import React from 'react'
import heroImage from '@/public/images/hero-section.png'
import Link from 'next/link'
import { FaArrowDown } from "react-icons/fa6";
import Marquee from 'react-fast-marquee';
import { HERO_SKILLS } from '@/constants';
import { useTypewriter } from '@/hooks/useTypeWritter'

const HeroSection = () => {
  const text=useTypewriter("JavaScript Developer",70)
  const gdsc=useTypewriter("Available for get intouch",50)
  return (
    <section
      id='home'
      className='pt-8 w-full flex flex-col justify-center items-center space-y-6 overflow-hidden'
    >
      <Image alt='bg hero image' src={'/images/hero-blured-gradient.svg'} width={1000} height={1000} className='absolute left-0  top-0 -z-10 w-full' />
      <div className='container relative'>
            <div className='space-y-2 mx-auto'>
              <Image src={heroImage} alt='user image' height={250} width={250} className='mx-auto' />
              <div className='px-4 py-2 w-auto rounded bg-slate-800 flex justify-center items-center gap-4 shadow-lg shadow-slate-500/40'>
                <div className='size-2 rounded-full bg-green-600'></div>
                <p className='italic font-semibold font-sans text-sm'>{gdsc}</p>
              </div>
            </div>
            <div className='w-full max-w-lg mx-auto md:px-0 px-4 space-y-4  '>
              <h1 className='text-center font-bold text-slate-500 lg:text-5xl md:text-2xl text-xl'>Full Stack <span className='text-slate-200'>{text}</span> & Continuous Learner</h1>
              <p className='text-sm text-slate-500 mt-2 text-center'>Unlock the full potential of your web presence with cutting-edge technology! I specialize in crafting dynamic, fast, and SEO-optimized websites using <span className='text-white font-semibold'>Next.js/React.js</span> for sleek user interfaces, paired with <span className='text-slate-400'>Express.js</span> for scalable, efficient backend solutions. Let&#39;s build the future of web applications together, ensuring your platform is modern, robust, and ready for growth!</p>
              <div className="w-full md:max-w-lg max-w-56 flex lg:mx-0 mx-auto gap-4 items-center justify-center md:flex-row flex-col">
                <Link href={'https://drive.google.com/file/d/1pfCCXlC3Fx5h-PK4mBg1GKwDGOHLL7Un/view?usp=sharing '} className='w-full flex items-center justify-center gap-1 px-4 py-2 bg-gray-800 border border-gray-50 text-gray-300 rounded-md hover:bg-gray-900 hover:text-gray-200 transition-all duration-100 font-semibold'>
                  <span className='text-sm'>Reach out</span>
                  <FaArrowDown size={12} />
                </Link>
                <Link href={'#contact'} className='flex w-full items-center gap-1 px-4 justify-center py-2 rounded-lg bg-gray-200 text-gray-900 font-semibold'>
                  <span>👋</span>
                  <span className='text-sm'>Let&#39;s connect</span>
                </Link>
              </div>
            </div>
      </div>
      <br />
      <div className='w-full overflow-hidden space-y-4 -rotate-3'>
        <Marquee gradient={false} speed={100} pauseOnHover className='w-full max-w-5xl [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]'>
          {HERO_SKILLS.map((skill, index) => (
            <div 
              className='px-4 md:h-24 h-20 w-auto rounded-lg bg-slate-800/50 flex mx-2 justify-center items-center gap-3 shadow-lg shadow-slate-500/40 opacity-40 hover:opacity-100 transition-all duration-200' 
              key={`${skill.title}-${index}`}>
              <div className='size-3 rounded-full bg-green-600'></div>
              <div className="flex items-center gap-4">
                <Image src={skill.image} alt={skill.title} height={50} width={50} className='mx-auto rounded-md' />
                <p className='italic font-semibold font-sans'>{skill.title}</p>
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee gradient={false} speed={100} pauseOnHover className='lg:ml-12 w-full max-w-5xl [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]'>
          {HERO_SKILLS.slice(3,HERO_SKILLS.length).reverse().map((skill, index) => (
            <div 
              className='px-4 h-24 w-auto rounded-lg bg-slate-800/50 flex mx-2 justify-center items-center gap-3 shadow-lg shadow-slate-500/40 opacity-40 hover:opacity-100 transition-all duration-200' 
              key={`${skill.id}-${index}`}>
              <div className='size-3 rounded-full bg-green-600'></div>
              <div className="flex items-center gap-4">
                <Image src={skill.image} alt={skill.title} height={50} width={50} className='mx-auto' />
                <p className='italic font-semibold font-sans'>{skill.title}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default HeroSection
