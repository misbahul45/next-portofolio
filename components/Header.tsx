'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [currentSection, setCurrentSection] = useState('');
  const [scrolling, setScrolling] = useState(false);
  const [sectionAll, setSectionAll] = useState<NodeListOf<HTMLElement> | undefined>(undefined);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    setSectionAll(document.querySelectorAll('section'));
  }, []);

  useEffect(() => {
    if (!sectionAll) return;
    
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
  
      let currentSectionId = '';
  
      // Check if we're at the bottom of the page
      if (scrolled + viewportHeight >= documentHeight - 50) {
        currentSectionId = sectionAll[sectionAll.length - 1].id;
      } else {
        sectionAll.forEach((section) => {
          const sectionTop = section.offsetTop - 100; // Adjust offset as needed
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrolled >= sectionTop && scrolled < sectionBottom) {
            currentSectionId = section.id;
          }
        });
      }
  
      setCurrentSection(currentSectionId);
    };
  
    window.addEventListener('scroll', handleScroll);
    // Trigger once to set initial state
    handleScroll();
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionAll]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrolling(false);
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <header className={`flex justify-center px-4 items-center left-0 top-0 py-4 fixed w-full ${scrolling ? 'translate-y-0' : '-translate-y-20'} z-50 transition-all duration-500`}>
      <nav className='flex gap-1 p-0.5 border border-white/30 rounded-full backdrop-blur-md bg-white/5'>
        <Link href='#home' className={`nav-item ${currentSection === 'home' ? 'bg-slate-50/70 text-gray-800' : ''}`}>
          Home
        </Link>
        <Link href='#about' className={`nav-item ${currentSection === 'about' ? 'bg-slate-50/70 text-gray-800' : ''}`}>
          About
        </Link>
        <Link href='#projects' className={`nav-item ${currentSection === 'projects' ? 'bg-slate-50/70 text-gray-800' : ''}`}>
          Projects
        </Link>
        <Link href='#contact' className={`nav-item ${currentSection === 'contact' ? 'bg-slate-50/70 text-gray-800' : ''}`}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;