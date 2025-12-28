import React, { useState, useEffect } from 'react'
import { assets } from '../../assets/assets'

export const Header = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'));
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        setIsDark(document.documentElement.classList.contains('dark'));

        return () => observer.disconnect();
    }, []);

    return (
        <section className='relative transition-colors duration-500 bg-white dark:bg-zinc-950'>
            <div className='relative flex items-center justify-between max-lg:flex-col-reverse lg:flex-row gap-12 px-6 sm:px-10 lg:px-32 max-w-7xl mx-auto pt-28 sm:pt-36 lg:pt-44 pb-20'>
                
                {/* Background Decorative Blobs - Optimized for Dark Mode contrast */}
                <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-purple-100 dark:bg-purple-600/10 rounded-full blur-[120px] opacity-60 dark:opacity-40 pointer-events-none" />
                <div className="absolute bottom-10 left-10 -z-10 w-72 h-72 bg-indigo-100 dark:bg-indigo-600/10 rounded-full blur-[120px] opacity-60 dark:opacity-40 pointer-events-none" />

                {/* Left Side: Content Area */}
                <div className='w-full lg:w-1/2 text-center lg:text-left'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-zinc-50 leading-[1.15] tracking-tight'>
                        Remove the <br className='max-lg:hidden' /> 
                        <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent'>
                            background
                        </span> 
                        <br className='max-lg:hidden' /> from images for free
                    </h1>

                    <p className='my-6 text-base md:text-lg text-gray-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium'>
                        Effortlessly remove backgrounds from your photos in seconds with our AI-powered tool. 
                        Perfect for products, social media, and portraits.
                    </p>

                    <div className='flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start'>
                        <input type="file" id="upload1" hidden />
                        <label 
                            className='inline-flex items-center gap-3 px-10 py-4 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:shadow-2xl hover:shadow-indigo-500/30 dark:hover:shadow-indigo-500/10 transition-all duration-300 active:scale-95 group' 
                            htmlFor='upload1'
                        >
                            <img className="w-5 brightness-0 invert" src={assets.upload_btn_icon} alt="upload" />
                            <p className='text-white font-semibold text-base'>Upload Your Image</p>
                        </label>
                    </div>
                </div>

                {/* Right Side: Visual Demo */}
                <div className='w-full lg:w-1/2 max-w-lg lg:max-w-none flex justify-center lg:justify-end'>
                    <div className='relative group'>
                        {/* Decorative Outer Glow - Softer in dark mode */}
                        <div className='absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-2xl blur opacity-25 group-hover:opacity-50 dark:opacity-10 dark:group-hover:opacity-20 transition duration-1000'></div>
                        
                        <img 
                            className='relative w-full max-w-[450px] drop-shadow-2xl rounded-2xl transition-all duration-500 ring-1 ring-black/5 dark:ring-white/10' 
                            src={isDark ? assets.dark_header_bg : assets.header_img} 
                            alt="Background removal demo"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}