import React from 'react'
import { useState } from 'react'
import prof from '../assets/aditya.jpg'
import Card from '../components/Card'
import Label from '../components/Label'
import projects1  from '../assets/projects/projek-1.png'
import projects2  from '../assets/projects/projek-2.png'
import projects3  from '../assets/projects/projek-3.png'
import projects4  from '../assets/projects/projek-4.png'
import projects5  from '../assets/projects/projek-5.png'

import react from '../assets/logo/react-logo.png'
import redux from '../assets/logo/redux.png'
import node from '../assets/logo/node.png'
import ci from '../assets/logo/ci.png'
import php from '../assets/logo/php.png'
import js from '../assets/logo/js.png'
import py from '../assets/logo/py.png'
import html from '../assets/logo/html.png'
import css from '../assets/logo/css.png'
import figma from '../assets/logo/figma.png'

import basicFE from '../assets/sertif/Ruangguru/basic-FE.jpg'
import basicReact from '../assets/sertif/Ruangguru/basic-react.jpg'
import feNext from '../assets/sertif/Ruangguru/FE-next.jpg'
import reactNext from '../assets/sertif/Ruangguru/react-next.jpg'
import pybd from '../assets/sertif/py-bigdata.png'
import webdev from '../assets/sertif/webdev.png'
import rgcamp from '../assets/sertif/rg-camp.png'
import pypcap from '../assets/sertif/py-pcap.png'
import skilvul from '../assets/sertif/skilvul-sertif.png'
import bwa from '../assets/sertif/bwa.png'
import kmmi from '../assets/sertif/kmmi.png'
import dicoding from '../assets/sertif/dicoding.png'
import ayo from '../assets/sertif/ayo-bantu.png'

function Home() {
  const [skills, setskills] = useState([
  ])

  console.log(skills)

  const myproject = [
    {
      name: 'Movie Website',
      desc: 'Website ini masih sangat sederhana dan belum dilakukan pengembangan lebih lanjut, pada website ini hanya dapat menampilkan daftar film dan mencari film saja. Teknologi yang digunakan untuk mengembangkan web ini dengan ReactJS dan TailwindCSS.',
      tags: [
        'ReactJS', 
        'react-redux',
        'TailwindCSS'
      ],
      img: projects1
    },
    {
      name: 'BMI Calculator Website',
      desc: 'Website ini bisa digunakan untuk mengecek indeks massa tubuh, Website ini dibuat dengan menggunakan HTML, CSS dan Javascript.',
      tags: [
        'HTML', 
        'CSS',
        'Javascript'
      ],
      img: projects2
    },
    {
      name: 'AYO BANTU Website',
      desc: 'Website ini belum terkelola dengan baik dan masih pada tahap pengembangan karena masih terdapat beberapa error. Website ini dibuat untuk membantu para kaum disabilitas.',
      tags: [
        'ReactJS', 
        'react-redux',
        'TailwindCSS'
      ],
      img: projects3
    },
    {
      name: 'Go Hike Website',
      desc: 'Website ini digunakan untuk reservasi / pembelian tiket pendakian gunung secara online. Website ini dikembangan dengan menggunakan HTML, TailwindCSS dan PHP',
      tags: [
        'HTML', 
        'PHP',
        'TailwindCSS'
      ],
      img: projects4
    },
    {
      name: 'Sunrise Pay',
      desc: 'Website ini merupakan website company profile yang hanya menampilkan beberapa informasi yang dibutuhkan. Untuk sisi front-end nya menggunakan HTML dan CSS, untuk bagian back-end menggunakan Code-Igniter',
      tags: [
        'HTML', 
        'Code-Igniter',
        'BootstrapsCSS'
      ],
      img: projects5
    },
  ]

  return (
    <>
      {/* TOP */}
      <div className="pattern">
        <div className="2xl:container mx-auto pattern">
          <div className="wrapper 2xl:max-w-7xl">
    
          {/* HEADER */}
            <div className='flex flex-col-reverse gap-10 2xl:gap-0 2xl:justify-between 2xl:flex-row items-center py-28'>
                  <div className='flex flex-col'>
                    <h1 className='text-2xl font-regular text-neutral-400'>Hello I'm</h1>
                    <div className="flex flex-col">
                      <h1 className='text-5xl 2xl:text-7xl font-extrabold bg-gradient-to-r from-sky-700 from-10% via-fuchsia-500 via-30% to-indigo-500 to-90% py-4 bg-clip-text text-transparent'>Aditya</h1>
                      <h1 className='text-5xl 2xl:text-7xl font-extrabold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-700 to-90% py-4 text-transparent bg-clip-text'>Widyatmoko<span className='text-indigo-500'>.</span></h1>
                    </div>
                    <div className="flex mt-8 gap-5">
                      <h1 className='text-sm 2xl:text-md font-semibold bg-violet-700 py-2 px-6 text-white rounded-full'>Web Developer</h1>
                      <h1 className='text-sm 2xl:text-md font-semibold bg-indigo-700 py-2 px-6 text-white rounded-full'>Front-End Developer</h1>
                    </div>
                  </div>
                  <div>
                      <img className='rounded-full' width={300} src={prof} alt="none"/>
                  </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* ABOUT */}
      <div className="2xl:container mx-auto">
        {/* ABOUT ME */}
        <div className='flex justify-between my-14'>
                <div className='basis-3/4 mx-auto 2xl:mx-0'>
                  <h1 className='text-2xl font-bold text-neutral-600'>About Me</h1>
                  <div className="flex flex-col gap-2 mt-4">
                    <p className='text-md'>
                      Hello, I'm <span className='italic text-blue-500 font-semibold'>Aditya Widyatmoko</span>, a passionate web developer with a keen interest in frontend development. I pursue this career with a dedication 
                      to create amazing and captivating user experiences through responsive and innovative design. In terms of experience and skills, I have a solid 
                      background in developing reliable and efficient web applications. My primary expertise lies in frontend development, mastering languages such 
                      as HTML, CSS, and JavaScript. I thrive on the challenges of crafting intuitive and appealing user interfaces.
                    </p> 
                    <p className='text-md'>     
                      My focus extends to responsive design and a mobile-first approach. Recognizing the significance of a good user experience
                      across various devices, I consistently strive to ensure websites look and function seamlessly, whether on desktop or mobile devices. 
                      As a developer, I believe problem-solving is key to success. I enjoy tackling technical challenges and seek innovative solutions 
                      for every problem I encounter. My creativity permeates into every project I undertake, creating unique visual aesthetics and experiences.
                    </p>
                    <p className='text-md'>     
                      I am committed to attention to detail and a dedication to quality. I always aim to produce clean, well-documented code that 
                      adheres to industry best practices. Project success is my priority, and I am ready to work hard to achieve the best results.

                      If you're interested in collaboration or have a project requiring frontend skills, I'm excited to discuss further. 
                      Thank you for visiting my profile!
                    </p>
                  </div>

                  {/* <div className='w-fit flex gap-3'>
                    <Label name={"html"} style={"bg-orange-200 px-2 py-1"}/>
                    <Label name={"css"} style={"bg-orange-300 px-2 py-1"}/>
                    <Label name={"javascript"} style={"bg-lime-200 px-2 py-1"}/>
                    <Label name={"java"} style={"bg-lime-300 px-2 py-1"}/>
                    <Label name={"php"} style={"bg-teal-200 px-2 py-1"}/>
                    <Label name={"react"} style={"bg-teal-300 px-2 py-1"}/>
                    <Label name={"tailwind"} style={"bg-sky-200 px-2 py-1"}/>
                    <Label name={"codeIgniter"} style={"bg-sky-300 px-2 py-1"}/>
                  </div> */}

                  <button className='
                    uppercase 
                    border-blue-400 
                    border-2 
                    text-blue-500
                    mt-5 
                    rounded-full 
                    hover:cursor-not-allowed
                    px-10 
                    py-1 
                    font-semibold 
                    hover:bg-blue-500
                    hover:text-white' onClick={() => alert("This is my CV!")} disabled>
                      get cv
                    </button>
                </div>
                {/* <div className='bg-slate-200 rounded-lg'>
                  <div className='flex flex-col gap-2 p-3'>
                    <a href="https://www.instagram.com/adittww/">
                      <i className="fa-brands fa-instagram text-2xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-widyatmoko-49315b252/">
                      <i className="fa-brands fa-linkedin-in text-2xl"></i>  
                    </a>
                    <a href="https://github.com/dityaww">
                      <i className="fa-brands fa-github text-2xl"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-envelope text-2xl"></i>
                    </a>
                      
                  </div>
                </div> */}
        </div>
      </div>

      {/* SKILLS */}
      <div className="2xl:container mx-auto">
        {/* SKILLS ME */}
        <div className='flex justify-between my-14'>
          <div className='basis-3/4 mx-auto 2xl:mx-0'>
            <h1 className='text-2xl font-bold text-neutral-600'>Skills</h1>
            <div className="flex gap-5 mt-10 flex-wrap">
              <img src={react} alt="" width={150} height={150} />
              <img src={redux} alt="" width={150} height={150} />
              <img src={node} alt="" width={150} height={150} />
              <img src={php} alt="" width={150} height={150} />
              <img src={ci} alt="" width={150} height={150} />
              <img src={js} alt="" width={150} height={150} />
              <img src={py} alt="" width={150} height={150} />
              <img src={html} alt="" width={150} height={150} />
              <img src={css} alt="" width={150} height={150} />
              <img src={figma} alt="" width={150} height={150} />
            </div>
          </div>
        </div>
      </div>
      
      {/* EXPERIENCE */}
      <div className="2xl:container mx-12 2xl:mx-auto mb-14">
        <h1 className='text-2xl font-bold text-neutral-600 mb-5'>Work & Study Experience</h1>

        <ol className="relative border-l border-gray-200">                  
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">Jul 2021 - Sep 2021</time>
                <h3 className="text-lg font-semibold text-gray-900">PT. Sadasa Akademi Indonesia (Sadasa Academy)</h3>
                <div className="flex py-1">
                  <p className='text-sm font-semibold border-amber-400 text-amber-500 border-2 px-5 py-1 rounded-full'>Kota Yogyakarta, DIY</p>
                </div>
                <p className="text-base font-normal text-gray-500">Social Networking in R</p>
                <ul>
                  <li>- Mempelajari penggunaan R Programming</li>
                  <li>- Mempelajari konsep Centrality dan Modularity</li>
                  <li>- Mempelajari penggunaan Igraph dan Gephi</li>
                  <li>- Mempelajari preprocessing analisis media sosial</li>
                </ul>
                {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a> */}
            </li>
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">Jul 2022 - Aug 2022</time>
                <h3 className="text-lg font-semibold text-gray-900">Digital Talent Scholarship KOMINFO X Cisco Networking Academy</h3>
                <div className="flex py-1">
                  <p className='text-sm font-semibold border-amber-400 text-amber-500 border-2 px-5 py-1 rounded-full'>Jakarta Pusat, Jakarta</p>
                </div>
                <p className="text-base font-normal text-gray-500">Fresh Graduate Academy Big Data using Python.</p>
                <ul>
                  <li>
                    - Mempelajari penggunaan Bahasa Pemrograman Python seperti tipe data, condional, functions, tuples, dictionaries, data processing, dan OOP dengan Python.
                  </li>
                  <li>
                    - Mempelajari modules dan packages pada Python
                  </li>
                  <li>
                    - Mempelajari GUI Python yaitu Tkinter
                  </li>
                  <li>
                    - Mempelajari Machine Learnings, Internet of Things, dan Data Analysis dengan Python
                  </li>
                </ul>
            </li>
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">Aug 2022 - Dec 2022</time>
                <h3 className="text-lg font-semibold text-gray-900">PT. Impactbyte Teknologi Edukasi (Skilvul)</h3>
                <div className="flex py-1">
                  <p className='text-sm font-semibold border-amber-400 text-amber-500 border-2 px-5 py-1 rounded-full'>Kebayoran Lama, Jakarta</p>
                </div>
                <p className="text-base font-normal text-gray-500">Skillvul Tect4Impact: Front-End Development</p>
                <ul>
                  <li>
                    - Mempelajari Product Development dengan Metode Design Thinking 
                  </li>
                  <li>
                    - Mengoperasikan Figma untuk pembuatan wireframe, user flow, desain UI, dan prototyping
                  </li>
                  <li>
                    - Mempelajari penggunaan Bahasa Pemrograman Javascript untuk pengembangan Front-End aplikasi website
                  </li>
                  <li>
                    - Mempelajari library Javascript ReactJS seperti react hooks, react router, state management redux dan context, fetching data API dengan axios dan fetch
                  </li>
                  <li>
                    - Projek Individu: Aplikasi To Do list, BMI Calculator, Website Portfolio, Aplikasi Film dengan memanfaatkan The Movie Database (TMDB) API
                  </li>
                  <li>
                    - Final Project: Projek tim beranggotakan 6 developer yang terdiri dari 3 developer Front-End dan 3 developer Back-End untuk membuat aplikasi Ayo Bantu
                  </li>
                  <li>
                    - Aplikasi penggalangan dana untuk kaum disabilitas berbasis website yang bernama Ayo Bantu
                  </li>
                </ul>


            </li>
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">Dec 2022</time>
                <h3 className="text-lg font-semibold text-gray-900">Sunrise Pay</h3>
                <div className="flex py-1">
                  <p className='text-sm font-semibold border-amber-400 text-amber-500 border-2 px-5 py-1 rounded-full'>Banyumas, Jawa Tengah</p>
                </div>
                <p className="text-base font-normal text-gray-500">
                  Sunrise Pay merupakan perusahaan yang bergerak dalam bidang layanan keuangan dan produk digital. Perusahaan ini 
                  menyediakan produk unggulan berupa pulsa, paket data, e-wallet, voucher game dan lainnya.
                </p>
                <ul>
                  <li>
                    - Membuat front-end dashboard admin untuk mengelola data produk. Untuk teknologi yang digunakan yaitu Bootstraps
                  </li>
                  <li>
                    - Membuat sistem back-end dan database dengan menggunakan teknologi PHP
                  </li>
                </ul>
            </li>
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">Jan 2023 - Jun 2023</time>
                <h3 className="text-lg font-semibold text-gray-900">PT. Ruang Raya Indonesia (Ruangguru)</h3>
                <div className="flex py-1">
                  <p className='text-sm font-semibold border-amber-400 text-amber-500 border-2 px-5 py-1 rounded-full'>Sleman, DIY</p>
                </div>
                <p className="text-base font-normal text-gray-500">Front-End Engineering</p>
                <ul>
                  <li>
                    - Mempelajari Pengelolaan dan Manajemen Proyek Perangkat Lunak
                  </li>
                  <li>
                    - Mempelajari dasar pembuatan website (HTML, CSS)
                  </li>
                  <li>
                    - Mempelajari library CSS (Tailwind CSS)
                  </li>
                  <li>
                    - Mempelajari dasar pemrograman Javascript seperti function, conditional, asynchronous Javascript, fetching data API (fetch, dan axios), menampilkan data dengan metode manipulasi DOM, REST API,
                  </li>
                  <li>
                    - Mempelajari state management dengan menggunakan redux (redux-toolkit)
                  </li>
                  <li>
                    - Mempelajari library Javascript ReactJS seperti react hooks, react router, state management redux dan context, fetching data API dengan axios dan fetch
                  </li>
                  <li>
                    - Proyek: Aplikasi Ruang Perpus untuk mengelola data buku dengan sistem CRUD, Website Portfolio, Aplikasi Student Portal
                  </li>
                </ul>


            </li>
        </ol>
      </div>
      
      {/* PROJECTS */}
      <div className="2xl:container mx-12 2xl:mx-auto mb-14">
        <div className='my-14'>
            <h1 className='text-2xl font-bold text-neutral-600'>Projects</h1>

            <div className="">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                {myproject.map((items, idx) => (
                  <div>
                    <Card subname={'--aditya--'} projectname={items.name} description={items.desc} tag={items.tags} image={items.img}/>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>   

      <div className="2xl:container mx-12 2xl:mx-auto mb-14">
        <h1 className='text-2xl font-bold text-neutral-600 mb-5'>Certificate</h1>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg border border-neutral-200" src={basicFE} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg border border-neutral-200" src={feNext} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg border border-neutral-200" src={basicReact} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg border border-neutral-200" src={reactNext} alt="" />
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg border border-neutral-200" src={pybd} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg border border-neutral-200" src={webdev} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg border border-neutral-200" src={rgcamp} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg border border-neutral-200" src={pypcap} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg border border-neutral-200" src={ayo} alt="" />
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg border border-neutral-200" src={skilvul} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg border border-neutral-200" src={bwa} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg border border-neutral-200" src={kmmi} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg border border-neutral-200" src={dicoding} alt="" />
                </div>
            </div>
            {/* <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                </div>
            </div> */}
        </div>
      </div>     
    </>
  )
}

export default Home