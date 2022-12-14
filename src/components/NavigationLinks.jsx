import React from 'react'

const NavigationLinks = () => {
  return (
    <div className='text-white m-10'>
      <ul className=''>
        <li className='bg-[#020738] w-60 p-2 my-3 border border-[#EFEFF2] rounded-tr-lg rounded-bl-lg cursor-pointer hover:translate-x-6 transform transition active:bg-[#111B52]'>
          Base
        </li>
        <li className='bg-[#020738] w-60 p-2 my-3 border border-[#EFEFF2] rounded-tr-lg rounded-bl-lg cursor-pointer hover:translate-x-6 transform transition active:bg-[#111B52]'>
          Projects
        </li>
        <li className='bg-[#020738] w-60 p-2 my-3 border border-[#EFEFF2] rounded-tr-lg rounded-bl-lg cursor-pointer hover:translate-x-6 transform transition active:bg-[#111B52]'>
          Skills
        </li>
        <li className='bg-[#020738] w-60 p-2 my-3 border border-[#EFEFF2] rounded-tr-lg rounded-bl-lg cursor-pointer hover:translate-x-6 transform transition active:bg-[#111B52]'>
          About
        </li>
      </ul>
    </div>
  )
}

export default NavigationLinks
