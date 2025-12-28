import React from 'react'
import { assets } from '../../assets/assets'

export const Steps = () => {
  return (
    <div className=' dark:bg-zinc-950  lg:px-44 py-20 transition-colors duration-500'>
        {/* Heading with adaptive gradient */}
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-500 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent'>
          Steps to remove background <br/> image in seconds
        </h1>

        <div className='flex items-start flex-wrap gap-6 mt-16 xl:mt-24 justify-center'>

            {/* Step 1 */}
            <div className='flex items-start gap-4 bg-white dark:bg-zinc-900/50 border border-transparent dark:border-zinc-800 shadow-md dark:shadow-2xl dark:shadow-black/20 p-7 pb-10 rounded-xl hover:scale-105 transition-all duration-500 group'>
                <div className='p-3 bg-violet-50 dark:bg-violet-900/20 rounded-lg group-hover:bg-violet-100 dark:group-hover:bg-violet-900/40 transition-colors'>
                  <img className='max-w-9 dark:invert' src={assets.upload_icon} alt="Upload"/>
                </div>
                <div>
                    <p className='text-xl font-medium text-zinc-800 dark:text-zinc-100'>Upload Image</p>
                    <p className='text-sm text-neutral-500 dark:text-zinc-400 mt-1'>Upload any format of images, to remove its background</p>
                </div>
            </div>

            {/* Step 2 */}
            <div className='flex items-start gap-4 bg-white dark:bg-zinc-900/50 border border-transparent dark:border-zinc-800 shadow-md dark:shadow-2xl dark:shadow-black/20 p-7 pb-10 rounded-xl hover:scale-105 transition-all duration-500 group'>
                <div className='p-3 bg-violet-50 dark:bg-violet-900/20 rounded-lg group-hover:bg-violet-100 dark:group-hover:bg-violet-900/40 transition-colors'>
                  <img className='max-w-9 dark:invert' src={assets.remove_bg_icon} alt="Remove"/>
                </div>
                <div>
                    <p className='text-xl font-medium text-zinc-800 dark:text-zinc-100'>Remove Background</p>
                    <p className='text-sm text-neutral-500 dark:text-zinc-400 mt-1'>With a single click remove the background of any image</p>
                </div>
            </div>

            {/* Step 3 */}
            <div className='flex items-start gap-4 bg-white dark:bg-zinc-900/50 border border-transparent dark:border-zinc-800 shadow-md dark:shadow-2xl dark:shadow-black/20 p-7 pb-10 rounded-xl hover:scale-105 transition-all duration-500 group'>
                <div className='p-3 bg-violet-50 dark:bg-violet-900/20 rounded-lg group-hover:bg-violet-100 dark:group-hover:bg-violet-900/40 transition-colors'>
                  <img className='max-w-9 dark:invert' src={assets.download_icon} alt="Download"/>
                </div>
                <div>
                    <p className='text-xl font-medium text-zinc-800 dark:text-zinc-100'>Download Image</p>
                    <p className='text-sm text-neutral-500 dark:text-zinc-400 mt-1'>Download the processed, background removed images</p>
                </div>
            </div>

        </div>
    </div>
  )
}