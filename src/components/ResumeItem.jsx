import React from 'react'
import parser from 'html-react-parser'

const ResumeItem = ({icon, year, title, desc}) => {
  return (
    <div className='mb-[50px]  relative  mx-8 md:mx-0'>
      <span className='absolute top-0  bottom-0 -left-10 border-l border-border-color h-full '></span>
      <div className='absolute top-0  -left-[60px] items-center justify-center flex text-white w-10 h-10 rounded-full bg-first-color' id='icon'>{icon}</div>
      <span className='border bg-border-color border-container-color px-2 py-1 rounded-xl text-tiny font-600' id='year'>{year}</span>
      <h3 className='text-large font-semibold text-title-color mt-[20px] mb-[10px]' id='title'>{parser(title)}</h3>
      <p className='text-small leading-[1.6]' id='desc'>{desc}</p>
    </div>
  )
}

export default ResumeItem
