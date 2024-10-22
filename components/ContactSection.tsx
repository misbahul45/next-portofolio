import React from 'react'
import HeaderSection from './HeaderSection'
import { CONTACT_SOCIAL } from '@/constants'
import Link from 'next/link'

const ContactSection = () => {
  return (
    <section id='contact' className='mt-6 pt-12 pb-20 px-6 bg-purple-950'>
      <HeaderSection title={'Contact'} />
      <div className="w-full py-10">
        <h1 className='font-bold lg:text-[10rem] md:text-7xl sm:text-6xl text-5xl text-center'>Get In Touch</h1>
        <div className='w-full max-w-3xl mx-auto flex md:flex-row flex-col space-y-4 justify-between items-center mt-12'>
            <div className='md:w-auto w-full border-t-2 border-white pt-4'>
                <p><small>@2024 Misbahul Muttaqin</small></p>
                <p><small>Surabay - Indonesia</small></p>
                <p><small>All Rights Reserved</small></p>
            </div>
            <div className='md:w-auto w-full flex gap-4 items-center border-t-2 border-white pt-4'>
                <div className='space-y-2'>
                    <p className='font-bold mb-3'><small>Message</small></p>
                    <p><small>misbahulmuttaqin395@gmail.com</small></p>
                    <Link href="mailto:misbahulmuttaqin395@gmail.com" className='text-center py-2.5 rounded-md bg-violet-700 text-slate-100 mx-auto block shadow-lg shadow-slate-500/20 hover:bg-violet-900 transition-all duration-150'>Send a message</Link>
                </div>
                <div>
                    <p className='font-bold mb-3'><small>Social</small></p>
                    <div className='flex gap-0.5 flex-col'>
                        {CONTACT_SOCIAL.map((contact) => (
                            <Link key={contact.id} href={contact.link} target={contact.link} className='text-xs'>{contact.title}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
