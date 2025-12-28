import React from 'react'
import { assets, plans } from "../../src/assets/assets"

export const BuyCredit = () => {
  return (
    // Changed to <main> to indicate the primary content of the page
    <main className='min-h-[80vh] text-center pt-20 pb-10 bg-white dark:invert'>
      
      <section aria-labelledby="plans-heading">
        <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>
          Our Plans
        </button>
        
        <h1 id="plans-heading" className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-500 dark:from-zinc-400 dark:to-zinc-700 bg-clip-text text-transparent pb-5'>
          Choose the plan that's right for you
        </h1>

        {/* Pricing Cards Container */}
        <div className='flex flex-wrap justify-center gap-6 text-left'>
          {plans && plans.map((item, index) => (
            // Changed to <article> because each pricing card is a self-contained unit
            <article 
              className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-700' 
              key={index}
            >
              <img 
                className='relative right-2' 
                width={50} 
                src={assets.logo_icon} 
                // Descriptive Alt Text for SEO
                alt="aniBgRemover official icon" 
              />
              
              {/* Plan Title changed to h2 for better SEO hierarchy */}
              <h2 className='mt-3 font-semibold text-lg'>{item.id}</h2>
              
              <p className='text-sm text-gray-500 mb-4'>{item.desc}</p>
              
              <p className='mt-6'>
                <span className='text-2xl font-bold text-gray-900'>
                  ${item.price}
                </span>
                <span className='text-gray-500 font-medium'>
                  /{item.credits} credits
                </span>
              </p>

              <button 
                type="button"
                aria-label={`Purchase ${item.id} plan`}
                className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52 hover:bg-gray-700 transition-colors'
              >
                Get Started
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}