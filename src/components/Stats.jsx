import React from 'react'
import parse from 'html-react-parser'
import { stats } from '../data'

const Stats = () => {
  return (
    <>
      {stats.map(({id, no, title})=> (
        <div key={id} >
            <h3 className='text-h1 text-first-color leading-[1.2]'>{no}</h3>
            <p className='relative text-small leading-[1.6] pl-[45px] '>{parse(title)}
            <span className='absolute left-0  top-[25%] w-[30px] h-[2px] bg-text-color'></span>
            </p>
           
        </div>
      ))}
    </>
  )
}

export default Stats
