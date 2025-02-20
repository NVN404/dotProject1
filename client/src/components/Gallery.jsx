import React from 'react';

const Gallery = () => {
  return (
    <div className='h-[70vh] p-[2em] w-full grid grid-cols-6 grid-rows-9 bg-center bg-cover gap-[0.5em] mt-[1em] mb-[1em]'>
        <div className='w-full h-full bg-[url("/gal1.jpg")] bg-center bg-cover row-span-2 col-span-2 '></div>
        <div className='w-full h-full bg-[url("/gal2.jpg")] bg-center bg-cover row-span-3'></div>
        <div className='w-full h-full bg-[url("/gal3.jpg")] bg-center bg-cover col-span-3 row-span-3'></div>
        <div className='w-full h-full bg-[url("/gal4.jpg")] bg-center bg-cover row-span-4'></div>
        <div className='w-full h-full bg-[url("/gal5.jpg")] bg-center bg-cover row-span-4 '></div>
        <div className='w-full h-full bg-[url("/gal6.jpg")] bg-bottom bg-cover col-span-4 row-span-4'></div>
        <div className='w-full h-full bg-[url("/gal6.jpg")] bg-bottom bg-cover col-span-2 row-span-3'></div>
        <div className='w-full h-full bg-[url("/gal6.jpg")] bg-bottom bg-cover col-span-2 row-span-3'></div>
        <div className='w-full h-full bg-[url("/gal6.jpg")] bg-bottom bg-cover col-span-2 row-span-3'></div>
    </div>
  )
}
export default Gallery;
