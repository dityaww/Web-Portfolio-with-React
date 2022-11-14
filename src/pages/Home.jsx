import React from 'react'
import { useState } from 'react'
import prof from '../assets/aditya.jpg'
import Label from '../components/Label'

function Home() {
  const [skills, setskills] = useState([
  ])

  console.log(skills)

  return (
    <>
        <div className="2xl:container mx-auto 2xl:max-w-7xl mt-10">
          <div className='flex justify-between items-center'>
            <div>
                <p className='text-7xl font-extrabold text-sky-600'>Aditya</p>
                <p className='text-7xl font-extrabold text-sky-300'>Widyatmoko.</p>
            </div>
            <div>
                <img className='rounded-md' width={300} src={prof} alt="none"/>
            </div>
          </div>
          <div className='flex justify-between mt-14'>
            <div className='basis-3/4'>
              <p className='text-3xl font-bold text-sky-400'>FrontEnd Engineer</p>
              <p className='text-lg py-4'>
                Lets introduce myself, My name is Aditya Widyatmoko. I have passion in Web Development especially on FrontEnd Development. 
                I have quite good skill on Web Development
              </p> 
              <div className='w-fit flex gap-3'>
                <Label name={"html"} style={"bg-orange-200 px-2 py-1"}/>
                <Label name={"css"} style={"bg-orange-300 px-2 py-1"}/>
                <Label name={"javascript"} style={"bg-lime-200 px-2 py-1"}/>
                <Label name={"java"} style={"bg-lime-300 px-2 py-1"}/>
                <Label name={"php"} style={"bg-teal-200 px-2 py-1"}/>
                <Label name={"react"} style={"bg-teal-300 px-2 py-1"}/>
                <Label name={"tailwind"} style={"bg-sky-200 px-2 py-1"}/>
                <Label name={"codeIgniter"} style={"bg-sky-300 px-2 py-1"}/>
              </div>
            </div>
            <div className='bg-slate-200 rounded-lg'>
              <div className='flex flex-col gap-2 p-3'>
                <a href="">
                  <i className="fa-brands fa-instagram text-2xl"></i>
                </a>
                  
                <i className="fa-brands fa-linkedin-in text-2xl"></i>
                <i className="fa-brands fa-github text-2xl"></i>
                <i className="fa-solid fa-envelope text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home