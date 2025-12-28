import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from "/mainLogo.png";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

export const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);

    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, [isDark]);

  // Close mobile menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b dark:border-zinc-800/50 ${
      scrolled 
        ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-lg py-3 shadow-sm' 
        : 'bg-transparent py-5 border-transparent'
    }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-10'>
        
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="active:scale-95 transition-transform shrink-0"
        >
          <img className='w-32 sm:w-40 h-auto dark:invert' src={mainLogo} alt="Logo" />
        </Link>

        {/* Desktop Actions */}
        <div className='hidden md:flex justify-between items-center gap-4'>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700/80 active:scale-95 transition-all"
            aria-label="Toggle dark mode"
          >
            <span className="text-lg">{isDark ? '🌙' : '☀️'}</span>
          </button>

          {isSignedIn ? (
            <div className='scale-150 mt-2'>
              <UserButton afterSignOutUrl="/"/>
            </div> 
          ) : (
            <button 
              onClick={() => openSignIn({})} 
              className='bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-2.5 text-sm font-semibold rounded-full hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 shadow-sm'
            >
              Get Started
              <img className='w-3 dark:invert' src={assets.arrow_icon} alt="" />
            </button>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className='flex md:hidden items-center gap-3'>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700/80 active:scale-95 transition-all"
            aria-label="Toggle dark mode"
          >
            <span className="text-sm">{isDark ? '🌙' : '☀️'}</span>
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='p-2 text-zinc-900 dark:text-white active:scale-95 transition-transform'
            aria-label="Toggle menu"
          >
            <div className='w-6 h-5 flex flex-col justify-between overflow-hidden relative'>
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 translate-x-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

 {/* Mobile Menu Dropdown - Minimalist & Sleek */}
      <div className={`md:hidden absolute top-16  left-0  right-0 w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden origin-top ${
        isOpen 
          ? 'max-h-96 opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className='px-6 py-10 flex flex-col gap-8 items-center justify-center'>

          {isSignedIn ? (
            <div className='flex flex-col items-center gap-4'>
               {/* showName={true} removed for a cleaner mobile look */}
               <div className='scale-200  rounded-full '>
                 <div className='rounded-full  '>
                    <UserButton afterSignOutUrl="/"/>
                 </div>
               </div>
               
               <div className='text-center'>
                  <p className='text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                    {user?.fullName || 'Account Active'}
                  </p>
                  <Link 
                    to="/buy" 
                    onClick={() => setIsOpen(false)}
                    className='text-xs font-bold text-violet-600 dark:text-fuchsia-400 mt-1 block hover:underline'
                  >
                    View Plans
                  </Link>
               </div>
            </div> 
          ) : (
            <button 
              onClick={() => { openSignIn({}); setIsOpen(false); }} 
              className='w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-4 text-sm font-bold rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-zinc-500/10'
            >
                Get Started
                <img className='w-3 dark:invert' src={assets.arrow_icon} alt="Arrow" />
            </button>
          )}
           
            <div className='flex flex-col items-center gap-2 mt-2'>
              <div className="w-8 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full opacity-50"></div>
              <p className='text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500'>
                  aniBgRemover • v1.0
              </p>
            </div>
        </div>
      </div>
    </nav>
  );
};