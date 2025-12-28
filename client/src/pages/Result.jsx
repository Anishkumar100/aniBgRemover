import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

export const Result = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState({ name: 'Transparent', class: 'bg-transparent' });
  
  // States for Extra Magic Logic
  const [uploadedBG, setUploadedBG] = useState(null); 
  const [activeType, setActiveType] = useState('none'); // 'color', 'image', or 'none'

  const colors = [
    { name: 'Transparent', class: 'bg-transparent' },
    { name: 'White', class: 'bg-white' },
    { name: 'Black', class: 'bg-zinc-950' },
    { name: 'Red', class: 'bg-red-500' },
    { name: 'Orange', class: 'bg-orange-500' },
    { name: 'Yellow', class: 'bg-yellow-400' },
    { name: 'Green', class: 'bg-emerald-500' },
    { name: 'Blue', class: 'bg-sky-500' },
    { name: 'Indigo', class: 'bg-indigo-500' },
    { name: 'Purple', class: 'bg-purple-600' }
  ];

  // Logic: Handle Color Selection
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsDropdownOpen(false);
    if (color.name !== 'Transparent') {
      setActiveType('color');
      setUploadedBG(null); 
    } else {
      setActiveType('none');
    }
  };

  // Logic: Handle Image Upload for background apply
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedBG(URL.createObjectURL(file));
      setActiveType('image');
      setSelectedColor({ name: 'Transparent', class: 'bg-transparent' }); 
    }
  };

  // Logic: Cancel Image Upload for cancelling background apply
  const handleCancelImage = (e) => {
    e.preventDefault(); // Prevents the label from triggering the file input
    setUploadedBG(null);
    setActiveType('none');
  };

  return (
    <section className='px-4 py-24 lg:px-44 min-h-[75vh] dark:bg-zinc-950 transition-colors duration-500'>
      
      <div className='max-w-5xl mx-auto bg-white dark:bg-zinc-900 rounded-xl px-6 sm:px-8 py-10 border border-slate-100 dark:border-zinc-800 shadow-sm'>

        {/* --- Image Comparison Grid --- */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          
          <article>
            <h2 className='font-semibold text-zinc-600 dark:text-zinc-400 mb-2'>Original Image</h2>
            <img className='rounded-md border border-slate-200 dark:border-zinc-800 w-full h-auto object-cover' src={assets.image_w_bg} alt="Original Image with background" />
          </article>

          <article className='flex flex-col'>
            <h2 className='font-semibold text-zinc-600 dark:text-zinc-400 mb-2'>Background Removed</h2>
            <div className={`relative rounded-md border border-zinc-300 dark:border-zinc-800 h-full min-h-[200px] overflow-hidden bg-layer `}>
              
              {/* Processed Image Tag */}
              <img src={assets.image_wo_bg} className='w-full h-full object-contain relative z-5 transition-opacity duration-500' alt="Background removed result" />

              {/*Loader */}
              {/* <div className='absolute inset-0 flex items-center justify-center z-5'>
                <div className="relative">
                  <div className="absolute inset-0 blur-xl bg-violet-500/30 dark:bg-fuchsia-500/40 animate-pulse rounded-full"></div>
                  <div className="w-12 h-12 border-4 border-zinc-200 dark:border-zinc-800 border-t-violet-600 dark:border-t-fuchsia-500 rounded-full animate-spin"></div>
                </div>
              </div> */}

            </div> {/* End Background Removed Container Div */}
          </article>
        </div> {/* End Image Grid Div */}

        {/* --- Action Buttons --- */}
        <div className='flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 mt-10 mb-10'>
          <button className='w-full sm:w-auto px-8 py-2.5 text-violet-600 dark:text-violet-400 text-sm font-semibold border border-violet-600 dark:border-violet-500 rounded-full hover:bg-violet-50 transition-all'>
            Try Another
          </button>
          <a href="#" className='w-full sm:w-auto px-8 py-2.5 text-white text-sm font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:opacity-90 transition-all text-center shadow-lg shadow-violet-500/20'>
            Download Image
          </a>
        </div> {/* End Action Buttons Div */}

        <p className='text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-fuchsia-500 mb-4 text-center sm:text-left'>
            ✨ Extra Magic
        </p>

        {/* --- Magic Features Grid --- */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100 dark:border-zinc-800'>
          
          {/* Color Dropdown Section - Disabled if Image is active */}
          <div className={`relative z-10 transition-opacity duration-300 ${activeType === 'image' ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className='w-full flex items-center justify-between gap-3 px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-sm'
            >
              <div className='flex items-center gap-3'>
                <div className={`${selectedColor.class} w-6 h-6 rounded-full border border-zinc-300 dark:border-zinc-600 shadow-sm`}></div>
                <span className='text-sm font-bold text-zinc-700 dark:text-zinc-300'>{selectedColor.name}</span>
              </div>
              <span className={`text-zinc-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>↑</span>
            </button>

            {isDropdownOpen && (
              <div className='absolute top-full mt-2 left-0 w-full max-h-56 no-scrollbar overflow-y-auto bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-2xl z-20'>
                {colors.map((color, index) => (
                  <button 
                    key={index}
                    onClick={() => handleColorSelect(color)}
                    className='w-full flex items-center gap-3 px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors border-b border-zinc-100 dark:border-zinc-700 last:border-0'
                  >
                    <div className={`${color.class} w-5 h-5 rounded-full border border-zinc-200 dark:border-zinc-600`}></div>
                    <span className='text-sm font-medium text-zinc-600 dark:text-zinc-300'>{color.name}</span>
                  </button>
                ))}
              </div> 
            )}
          </div> {/* End Dropdown Container Div */}

          {/* Upload Area - Disabled if Color is active */}
          <div className={`relative transition-opacity duration-300 ${activeType === 'color' ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
            <label className='flex items-center justify-between gap-3 w-full px-4 py-3 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800'>
              <div className='flex items-center gap-3'>
                <span className='text-xl'>{uploadedBG ? '✅' : '🖼️'}</span>
                <span className='text-sm font-bold text-zinc-500 dark:text-zinc-400'>
                    {uploadedBG ? 'Image Ready' : 'Upload Background'}
                </span>
              </div>

              {uploadedBG && (
                <button 
                  onClick={handleCancelImage}
                  className='p-1 hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 rounded-full transition-colors'
                  title="Remove Image"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              )}
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
            </label>
          </div> {/* End Upload Container Div */}

        </div> {/* End Magic Grid Div */}

        {/* Final Apply Button */}
        <div className='mt-8 flex justify-center'>
            <button 
                className={`px-12 py-3 rounded-full font-bold text-sm transition-all duration-500 
                ${activeType !== 'none' 
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 scale-100 opacity-100 shadow-xl' 
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 scale-95 opacity-50 cursor-not-allowed'}`}
                disabled={activeType === 'none'}
            >
                Apply Background Magic
            </button>
        </div> {/* End Submission Button Div */}

      </div> {/* End Main Card Div */}
    </section> 
  )
}