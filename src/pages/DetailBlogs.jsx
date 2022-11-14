import React from 'react'
import { useParams } from 'react-router-dom'

// const { idblogs } = useParams();

const detail = [
    {
        id: 1,
        name: 'Belajar Framework Javascript React JS',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iste eius esse quo labore veritatis similique, obcaecati, fugiat rerum quod nisi aliquid. Dolorum aut tempore animi minus id debitis quas!"
    },
    {
        id: 2,
        name: 'Belajar Dasar Pemrograman dengan Javascript',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iste eius esse quo labore veritatis similique, obcaecati, fugiat rerum quod nisi aliquid. Dolorum aut tempore animi minus id debitis quas!"
    }
]

function DetailBlogs() {
  return (
    <div>
        Use Params
        {/* {detail
        .filter((elem) => elem.id === +id)
        .map((elem) => (
            <div key={elem.id}>
              <h2>Name: {elem.name}</h2>
              <p>Desc: {elem.desc}</p>\
            </div>
        ))
        } */}
    </div>
  )
}

export default DetailBlogs