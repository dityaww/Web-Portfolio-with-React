import React from 'react'
import Card from '../components/Card'
import ListProject from '../components/ListProject'

function Project() {
  return (
    <>
        <div className="2xl:container mx-auto 2xl:max-w-7xl mt-10">
          <p className='text-2xl text-sky-600 font-bold pb-1'>My Project</p>
          <div className="flex flex-wrap gap-5">
            <ListProject />
            {/* <Card projectname='Online shop about hiking mountain' subname="Web Project" description='woi ini deskripsinya ya'/> 
            <Card projectname='Halodek' description='woi ini deskripsinya ya'/> 
            <Card projectname='Halodek' description='woi ini deskripsinya ya'/> 
            <Card projectname='Halodek' description='woi ini deskripsinya ya'/> 
            <Card projectname='Halodek' description='woi ini deskripsinya ya'/> 
            <Card projectname='Halodek' description='woi ini deskripsinya ya'/> 
            <Card projectname='Halodek' description='woi ini deskripsinya ya'/>  */}
          </div>
        </div>
    </>
  )
}

export default Project