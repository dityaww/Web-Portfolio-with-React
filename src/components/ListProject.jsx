import React from 'react'
import { useState } from 'react'
import Card from './Card'

function ListProject() {
  const [Projects, setProjects] = useState([
    { 
      name: "Online shop about hiking mountain", 
      subtitle: "Web Project", 
      desc: "Project Web E-commerce about Booking Mountain for All Mountain in Indonesia."
    },
    {
      name: "Web Company Profile Sunrise Pay", 
      subtitle: "Web Project", 
      desc: "Make a Web Company Profile that show all about information and list product in this company." },
    {
      name: "Build My Portfolio Website", 
      subtitle: "Web Project", 
      desc: "Build My Protfolio Web, to show my skill and experience in programming"},
    {
      name: "Student Assessment App", 
      subtitle: "Desktop Project", 
      desc: "Build Desktop Application with java programming about Student Assesment" },
    {
      name: "Online Shop with API Rajaongkir", 
      subtitle: "Android Project", 
      desc: "Build an Android Application about E-commerce with API RajaOngkir" },
  ])
  
  return (
    <>
        {Projects.map((items, idx) => (
            <Card projectname={items.name} subname={items.subtitle} description={items.desc} key={idx}/> 
        ))}
    </>
  )
}

export default ListProject