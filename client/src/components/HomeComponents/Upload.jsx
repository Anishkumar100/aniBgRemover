import React from 'react'
import { assets } from '../../assets/assets'

export const Upload = () => {
    return (
        <section className='dark:bg-zinc-950 pt-10 pb-16  flex flex-col items-center justify-center gap-10 transition-colors duration-500'>
            
            {/* Title with adaptive dark mode gradient */}
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-bold bg-gradient-to-r from-gray-900 to-gray-500 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent px-4'>
                Experience The Magic. <br className='sm:hidden' /> With Just A Click
            </h1>

            <div className='text-center mb-24'>
                <input type="file" id="upload2" hidden />
                
                <label
                    className='inline-flex items-center gap-3 px-12 py-4 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/30 dark:hover:shadow-violet-500/20 transition-all duration-300 active:scale-95 group'
                    htmlFor='upload2'
                >
                    {/* Icon stays white via brightness/invert in dark mode */}
                    <img 
                        className='w-5 brightness-0 invert' 
                        src={assets.upload_btn_icon} 
                        alt="upload" 
                    />
                    <p className='text-white font-semibold text-lg'>Upload Your Image</p>
                </label>
                
                {/* Subtle sub-text for conversion */}
                <p className='mt-4 text-sm text-gray-500 dark:text-zinc-500 font-medium'>
                    Choose Files From Your Device
                </p>
            </div>

        </section>
    )
}