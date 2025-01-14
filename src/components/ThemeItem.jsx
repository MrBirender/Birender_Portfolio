import React from 'react'

const ThemeItem = ({img, color, changeColor}) => {
  return (
    <div>
      <img className='w-[30px] cursor-pointer' src={img} alt="color_img" onClick={() => changeColor(color)} />
    </div>
  )
}

export default ThemeItem
