import React from 'react'
import { personalInfo } from '../data'

const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description}, index) => (
        <li key={index} className='px-4 md:px-0   '>
            <span className='text-[20px] md:text-small'>{title}</span>
            <span className='text-[20px] md:text-small text-title-color font-600'>{description}</span>

        </li>
      ))}
    </>
  )
}

export default Info
