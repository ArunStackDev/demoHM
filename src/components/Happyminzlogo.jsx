import React from 'react'
import Logo from '../assets/Footerimg/Logo.svg'; 
//HappyMindz Logo On Navigation Bar
function Happyminzlogo() {
  return (
    <div className="h-12 md:h-16 flex items-center">
      <img src={Logo} alt="Happyminz Logo" className="h-10 md:h-14 w-auto object-contain" loading="eager" fetchPriority='high'/>
    </div>
  )
}

export default Happyminzlogo
