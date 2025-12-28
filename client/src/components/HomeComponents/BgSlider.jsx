import React, { useState } from 'react'
import { assets } from '../../assets/assets'

export const BgSlider = () => {
  const [sliderPos, setSliderPos] = useState(50)

  const handleSliderChange = (e) => {
    setSliderPos(e.target.value)
  }

  return (
    <div className=' dark:bg-zinc-950 pb-10 md:py-20  duration-500'>
      {/* Title Section with Adaptive Gradient */}
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent'>
        Remove Background With High <br className='hidden md:block' /> Quality and Accuracy
      </h1>

      <div className='mt-10 relative w-full max-w-3xl overflow-hidden m-auto rounded-xl shadow-2xl dark:shadow-black/50 ring-1 ring-black/5 dark:ring-white/10'>
        
        {/* Background Image (Original) */}
        <img 
          src={assets.image_w_bg} 
          style={{ clipPath: `inset(0 ${100.2 - sliderPos}% 0 0)` }} 
          alt="Original"
          className='w-full select-none'
        />

        {/* Image without background (Processed) */}
        <img 
          className='absolute top-0 left-0 w-full h-full' 
          src={assets.image_wo_bg} 
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }} 
          alt="Processed"
        />

        {/* Custom Styled Slider */}
        <input 
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider appearance-none bg-transparent cursor-pointer' 
          type="range" 
          min={0} 
          max={100} 
          value={sliderPos} 
          onChange={handleSliderChange}
        />
      </div>
    </div>
  )
}