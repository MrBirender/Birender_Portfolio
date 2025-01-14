import React from 'react'
import { skills } from '../data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skill = () => {
  return (
    <>
      {skills.map(({id, title, percentage})=> (
        <div id='box' className='text-center my-2' key={id}>
            <div className='w-[120px] h-[120px] mx-auto'>
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
            <h3 className=' font-body font-600 text-xl mt-4'>{title}</h3>
        </div>
      ))}
    </>
  )
}

export default Skill
