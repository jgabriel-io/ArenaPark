import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

const ItemMenu = ({
  text, Icon, isSelected, colorIcon, itemMenuSelected
}) => {
  return (
    <button onClick={itemMenuSelected} className={isSelected ? 'w-full text-base color-white flex flex-row justify-between items-center py-3 px-5 bg-slate-700/50': 'w-full text-base color-white flex flex-row justify-between items-center py-3 px-5'}>
      <div className="flex flex-row gap-3 items-center">
        <Icon color={colorIcon}/>
        <span className='text-base text-white font-bold'>{text}</span>
      </div>
      <ChevronRight color={colorIcon} />
    </button>
  )
}

export default ItemMenu