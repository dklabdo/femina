import React from 'react'

function Video() {
  return (
    <div className='w-full py-28 px-2' >
        <video  className='rounded-2xl  mx-auto' autoPlay controls >
            <source src='/video.mp4' type='video/mp4' />
        </video>

    </div>
  )
}

export default Video