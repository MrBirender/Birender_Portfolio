import React from 'react'
import { personalInfo } from '../data'

const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description}, index) => (
        <li key={index}>
            <span className='text-small'>{title}</span>
            <span className='text-small text-title-color font-600'>{description}</span>

        </li>
      ))}
    </>
  )
}

export default Info
