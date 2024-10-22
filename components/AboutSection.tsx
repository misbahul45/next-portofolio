'use client'
import React, { useEffect, useState } from 'react'
import { Playpen_Sans } from "next/font/google"
import { ABOUT_IMAGES, ABOUT_INTEREST } from '@/constants'
import Image from 'next/image'
import Aos from 'aos'

const playpen = Playpen_Sans({ subsets: ['latin'] })

const AboutSection = () => {
    const [isViewed, setIsViewed] = useState(false);

    useEffect(() => {
              Aos.init({ duration: 1000 });
      const handleScroll = () => {
        const scrolled = window.scrollY;
        if (scrolled > 20) {
          setIsViewed(true);
        }else{
          setIsViewed(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <section id="about" className='pt-12 lg:px-6 px-4'>
        <div className="flex items-center gap-0.5">
            <div className='px-4 py-2 font-semibold bg-violet-800  text-slate-100 rounded-lg'>
                About            
            </div>
            <div className={`${isViewed?'flex-1':'w-0'} transition-all duration-700 ease-linear h-1 rounded-full bg-violet-700`}></div>
        </div>
        <div className='mt-8 w-full max-w-2xl mx-auto space-y-8'>
            <div className='space-y-4'>
                <h1 className={`md:text-8xl text-6xl font-bold font-serif ${playpen.className}`}>Misbahul</h1>
                <h2 className={`font-serif lg:ml-24 md:ml-20 sm:ml-16 ml-12 md:text-8xl text-6xl font-bold`}>Muttaqin</h2>
                <h3 className={`${playpen.className}lg:text-3xl text-2xl font-semibold mt-4 text-slate-200/70`}>Some people call me <span className='text-violet-600 font-bold'>Muttaqin</span></h3>
            </div>
            <div className='space-y-4 text-slate-500'>
                <h4 className={`font-semibold ${playpen.className} text-lg`}>WHO IS MUTTAQIN ?</h4>
                <p>Hello, I&apos;m Misbahul Muttaqin from Gresik, East Java, Indonesia. Currently, I am studying at Airlangga University, majoring in Information Systems. I was very happy when I was accepted at this university and felt challenged to take part in all the learning activities here. With strong determination and high enthusiasm, I hope to develop myself into a better person.</p>
                <p>I am committed to continuing to learn and adapt to developments in information technology, as well as contributing positively to my field. My goal is to become a professional who is not only proficient in technical skills, but also has high integrity and ethics.</p>
            </div>
        </div>
        <div className='mt-8 flex justify-center sm:gap-2 gap-0.5'>
            {ABOUT_IMAGES.map((image, index) => (
                <div key={index} className={`${index%2==0?' rotate-12 z-10':'-rotate-6'} w-auto h-auto border-8 rounded-md border-slate-700 shadow-xl shadow-gray-900/90 hover:cursor-pointer hover:scale-105 hover:-translate-y-10 hover:z-20  hover:rotate-0 hover:shadow-gray-800/70 transition-all duration-300`}>
                    <Image
                        src={image.image}
                        alt={`about ${index}`}
                        width={100}
                        height={100}
                        className={`lg:w-56 md:w-48 sm:w-44 w-40 lg:h-64 md:h-56 sm:h-44 h-36 object-cover rounded-md`}
                    />
                </div>
            ))}
        </div>
        <div className='mt-8 w-full max-w-2xl mx-auto space-y-4'>
            <div className='space-y-2'>
                <h4 className={`${playpen.className} text-xl font-semibold text-slate-400`}>My Philosophy and drive</h4>
                <p className='text-gray-600 text-sm'>Have you ever imagined that an action as small as the flapping of a butterfly&apos;s wings could trigger a storm halfway across the world? This is the essence of the Butterfly Effect Theory. It&apos;s no different in our lives - simple decisions or small habits we start today can be the beginning of big changes. Smiling at a stranger or waking up early may seem trivial, but it can start a chain of life-changing events. You are the butterfly, and every “flap of your wings” has the potential to create an extraordinary transformation. So, what small changes will you start today?😊😊😊</p>
            </div>
            <div className='space-y-6'>
                <h5 className='md:text-2xl text-lg font-semibold -rotate-1 text-slate-400 relative'>My learning interests I hope to start soon <span className='w-16 h-1 rounded-full bg-violet-600 absolute -bottom-2 left-0 -rotate-1'></span></h5>
                <div className='space-y-4 text-gray-500 overflow-hidden'>
                    {ABOUT_INTEREST.map((interest, index) => (
                        <div data-aos={index%2==0?'fade-right':'fade-left'} data-aos-delay={`${index*100}`} data-aos-duration='1000' key={index} className='flex sm:flex-row flex-col items-center gap-2'>
                            <div className='w-auto h-auto border-2 border-gray-400 rounded-lg'>
                                <Image src={interest.image} alt={`about ${index}`} width={200} height={200} className='sm:size-24 w-full h-full object-cover rounded-lg' />
                            </div>
                            <div className='space-y-2 flex-1'>
                                <h1 className='font-semibold'>{interest.title}</h1>
                                <p className='text-sm'>{interest.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
