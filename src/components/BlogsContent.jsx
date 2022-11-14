import React from 'react'

function BlogsContent({title, subtitle}) {
  return (
    <>
        <div className='py-3'>
            <p className='text-2xl font-bold'>{title}</p>
            <p className='text-lg text-slate-700'>{subtitle}</p>
            <button className='text-sky-600'>see details..</button>
        </div>
    </>
  )
}

export default BlogsContent