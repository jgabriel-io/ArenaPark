import React, { useState } from 'react'
import ItemMenu from '../ItemMenu';
import { LayoutGrid, School } from 'lucide-react';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (id) => {
    setSelectedItem(id)
  }

  return (
    <div className="w-auto bg-slate-900 border-slate-700 rounded-md	py-4 border border-slate-700">
      <ItemMenu 
        text={'Rotina e atividades atuais'}
        Icon={LayoutGrid}
        isSelected={selectedItem === 1}
        colorIcon={selectedItem === 1 ? '#84cc16' : '#ffffff'}
        itemMenuSelected={() => handleItemClick(1)}
        /> 
      <ItemMenu
        text={'Vida Acadêmica Ocupações'}
        Icon={School}
        isSelected={selectedItem === 2}
        colorIcon={selectedItem === 2 ? '#84cc16' : '#ffffff'}
        itemMenuSelected={() => handleItemClick(2)}
        /> 
    </div>
  );
}

export default Sidebar