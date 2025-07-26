import React from 'react'

const VideoTitle = (props) => {
    const {title,overview}=props;
  return (
    <div className='w-full aspect-video pt-[40%] sm:pt-[30%] md:pt-[25%] px-4 sm:px-8 md:px-16 absolute text-white bg-gradient-to-r from-black z-0'>
        <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold'>{title}</h1>
        <p className='hidden md:block py-4 text-sm sm:text-base md:text-lg w-full md:w-1/2'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black hover:bg-gray-400 rounded py-2 sm:py-3 px-3 sm:px-4 mx-1 sm:mx-2 text-sm sm:text-lg md:text-xl '>▶ Play</button>
            <button className='bg-gray-300 text-black hover:bg-gray-500 rounded py-2 sm:py-3 px-3 sm:px-4 mx-1 sm:mx-2 text-sm sm:text-lg md:text-xl '>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle;