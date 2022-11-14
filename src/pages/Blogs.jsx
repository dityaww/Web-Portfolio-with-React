import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlogsContent from '../components/BlogsContent'

function Blogs() {
  const navigation = useNavigate()
  
  let datablogs = [
    {
        id: 1,
        name: 'Belajar Framework Javascript React JS',
        subtitle: 'Belajar cara penggunaan dan konsep yang ada pada react',
    },
    {
        id: 2,
        name: 'Belajar Dasar Pemrograman dengan Javascript',
        subtitle: 'Belajar mulai dari konsep dasar dan fundamental dalam javascript',
    },
  ]

  const blogsDetail = (id) => {
    navigation(`/detail-blogs/${id}`);
    console.log(id);
  };

  return (
    <>
        <div className="2xl:container mx-auto 2xl:max-w-7xl mt-10">
          <p className='text-2xl text-sky-600 font-bold pb-2'>My Blogs</p>
          <div className="grid grid-cols-1 divide-y">
            {datablogs.map((elem) => (
                <div className='py-3' key={elem.id}>
                    <p className='text-2xl font-bold'>{elem.name}</p>
                    <p className='text-lg text-slate-700'>{elem.subtitle}</p>
                    <button className='text-sky-600' onClick={() => blogsDetail(elem.id)}>see details..</button>
                </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default Blogs