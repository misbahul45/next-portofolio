'use client'
import React, { useEffect } from 'react'
import HeaderSection from './HeaderSection'
import { PORTFOLIO_PROJECTS } from '@/constants'
import Image from 'next/image'
import { Playpen_Sans } from 'next/font/google'
import AOS from 'aos';
import Link from 'next/link'
import { FaGithub, FaPlay } from 'react-icons/fa6'

const playpen = Playpen_Sans({ subsets: ['latin'] })


const ProjectsSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id='projects' className='pt-10 px-4'>
      <HeaderSection title={'Projects'} />
      <h1 className='lg:text-5xl sm:text-4xl text-3xl text-center font-bold font-serif my-6'>My Latest Projects</h1>
      <div className='w-full max-w-3xl mx-auto'>
        {PORTFOLIO_PROJECTS.map((project) =>{
          return(
            <div data-aos="fade-up" data-aos-delay={`${10*project.id}`} key={project.id} className='space-y-8 my-4 flex gap-2 md:h-64 h-56 border-2 pl-4 border-slate-600 rounded-lg pt-4 group relative overflow-hidden'>
              <div className='flex-1 flex flex-col justify-between'>
                <div  className='md:space-y-4 space-y-3'>
                  <h1 className={`lg:text-2xl sm:text-xl text-xl font-bold ${playpen.className}`}>{project.title}</h1>
                  <p className='md:text-sm text-xs text-slate-600'>{project.description}</p>
                  <div className='flex gap-3 flex-wrap'>
                    {project.stack.map((stack) => (
                      <div key={stack} className='md:px-4 px-2 py-1 rounded-lg bg-gradient-to-r from-violet-600 to-purple-800 group-hover:rotate-6 transition-all duration-100'>
                        <p className='md:text-sm text-xs text-slate-10 font-semibold text-nowrap'>{stack}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='flex justify-center md:gap-4 gap-2 pb-4'>
                  {project?.demo &&(
                    <Link href={project.demo} className='md:px-4 px-2 md:py-2 py-1.5 flex gap-2 items-center rounded bg-slate-800 text-slate-100 border-2 border-slate-800 hover:bg-slate-900 hover:border-slate-600 transition-all duration-150'>
                      <FaPlay size={15} className='text-slate-100' />
                      <span className='lg:text-sm text-xs'>Demo</span>
                    </Link>
                  )}
                  <Link href={project.github} className='md:px-4 px-2 md:py-2 py-1.5 flex gap-2 items-center rounded bg-slate-800 text-slate-100 border-2 border-slate-800 hover:bg-slate-900 hover:border-slate-600 transition-all duration-150'>
                    <FaGithub size={15} className='text-slate-100' />
                    <span className='lg:text-sm text-xs'>Code</span>
                  </Link>
                </div>
              </div>
              <div className='w-1/3'>
                <Image src={project.image} alt={project.title} width={500} height={500} className='absolute -bottom-6 left-2/3 object-left-bottom md:h-56 h-52 rounded-xl border-4 border-slate-600 group-hover:rotate-1 transition-all duration-100' />
              </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
