import React from 'react'

function NotFound() {
  return (
    <div>
      <div className="2xl:container mx-auto 2xl:max-w-7xl mt-10">
        <div className='flex justify-center items-center h-96'>
          <i className="fa-solid fa-triangle-exclamation text-yellow-400 text-5xl pr-3"></i>  
          <p className='text-xl'>Page Not Found!</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound