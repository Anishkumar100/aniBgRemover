import React from 'react'
import { Link } from "react-router-dom"
import mainLogo from "/mainLogo.png"

export const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-zinc-950 transition-colors duration-500 border-t border-slate-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-16 lg:px-32">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
          
          {/* Brand & Description Section */}
          <div className="max-w-md">
            <Link to="/" aria-label="aniBgRemove Home">
              <img className='w-32 sm:w-40 h-auto dark:invert transition-all' src={mainLogo} alt="aniBgRemove Logo" />
            </Link>
            <p className="mt-6 text-sm/7 text-slate-500 dark:text-zinc-400">
              <strong className="text-slate-900 dark:text-zinc-100 font-semibold">aniBgRemove</strong> is a professional-grade AI tool designed for creators. 
              Our advanced algorithms instantly detect subjects and remove backgrounds with surgical precision, 
              saving you hours of manual editing for portraits, products, and social media assets.
            </p>
          </div>

          {/* Quick Links / Portfolio Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-zinc-100">
              Developer
            </h2>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://anishkumar-v2.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-slate-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-violet-400 transition-colors"
              >
                View Portfolio
                <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
              <p className="text-xs text-slate-400 dark:text-zinc-500 italic max-w-[200px]">
                Built with React, Tailwind v4, and AI Integration.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 dark:text-zinc-500 text-center sm:text-left">
            Copyright 2025 © <span className="font-semibold text-slate-600 dark:text-zinc-300">aniBgRemove</span>. Built by Anish Kumar.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-green-500 uppercase tracking-tighter">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}