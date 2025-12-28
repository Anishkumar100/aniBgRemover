import React from 'react'
import { testimonialsData } from '../../assets/assets'

export const Testimonials = () => {
  return (
    <section className='dark:bg-zinc-950 py-20 transition-colors duration-500'>
        {/* Section Title */}
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-500 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent py-5'>
          Customer Testimonials
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8'>
            {testimonialsData.map((item, index) => (
                <div 
                  key={index} 
                  className='bg-white dark:bg-zinc-900/50 border border-transparent dark:border-zinc-800 rounded-2xl p-6 shadow-md dark:shadow-xl dark:shadow-black/20 max-w-lg m-auto hover:scale-105 transition-all duration-500 group'
                >
                    {/* Testimonial Quote */}
                    <p className='text-sm text-gray-600 dark:text-zinc-400 italic leading-relaxed'>
                        <span className='text-xl font-serif text-violet-500 dark:text-violet-400'>"</span>
                        {item.text}
                        <span className='text-xl font-serif text-violet-500 dark:text-violet-400'>"</span>
                    </p>

                    {/* Author Profile */}
                    <div className='flex items-center gap-3 mt-6'>
                        <img 
                          className='w-10 h-10 rounded-full object-cover ring-2 ring-violet-100 dark:ring-violet-900/30' 
                          src={item.image} 
                          alt={item.author} 
                        />
                        <div>
                            <p className='font-semibold text-zinc-800 dark:text-zinc-100'>
                              {item.author}
                            </p>
                            <p className='text-xs text-gray-500 dark:text-zinc-500 uppercase tracking-wider font-medium'>
                              {item.jobTitle}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}