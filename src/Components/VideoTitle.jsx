import React from 'react'

const VideoTitle = (props) => {
    const {title,overview}=props;
  return (
    <div className='w-full aspect-video pt-[25%] px-15 absolute text-white bg-gradient-to-r from-black z-0'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black hover:bg-gray-400 rounded py-3 px-4 mx-2 text-xl '>▶ Play</button>
            <button className='bg-gray-300 text-black hover:bg-gray-500 rounded py-3 px-4 mx-2 text-xl '>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle;