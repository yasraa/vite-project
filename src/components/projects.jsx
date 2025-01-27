import React from 'react'


const projects = () => {

const project=[
  {
  id:1,
  title:'HTML',
  style:'shadow-orange-500',
  },
  {
    id:2,
    title:'css',
    style:'shadow-orange-500',
    },
    {
      id:3,
      title:'HTML',
      style:'shadow-orange-500',
      },
      {
        id:4,
        title:'HTML',
        style:'shadow-orange-500',
        },
        {
          id:5,
          title:'HTML',
          style:'shadow-orange-500',
          },
          {
            id:6,
            title:'HTML',
            style:'shadow-orange-500',
            },

]

  return (
    <div name="projects" className='project' id="section3">
      <div >
      <h1 className="text-4xl">projects</h1>
      <div className="h-28 w-[880 px] border-2 bg-green-500 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center">
        {
          project.map(({id,title,style}) =>(
           <div
           key={id}
            className={' w-11 h-11 border-black'}>
            <p>{title}</p>
           </div>
         ))
        }
      </div>
      </div>
    </div>
  )
}

export default projects
