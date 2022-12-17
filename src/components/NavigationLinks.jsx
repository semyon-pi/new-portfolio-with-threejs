import React, { useContext } from 'react'
import { NavContext } from '../context/NavContext'
import { Transition } from 'react-transition-group'

const NavigationLinks = () => {
  const { visible, setDisplayedComponent } = useContext(NavContext)

  return (
    <Transition in={visible} timeout={300} classNames='ease-out duration-300'>
      <div className='text-white m-10'>
        <ul>
          <li
            onClick={() => setDisplayedComponent('base')}
            className='bg-[#020738] w-60 p-2 my-3 border border-[#EFEFF2] rounded-tr-lg rounded-bl-lg cursor-pointer hover:translate-x-6 transform transition active:bg-[#111B52]'
          >
            Base
          </li>
          <li
            onClick={() => setDisplayedComponent('projects')}
            className='bg-[#020738] w-60 p-2 my-3 border border-[#EFEFF2] rounded-tr-lg rounded-bl-lg cursor-pointer hover:translate-x-6 transform transition active:bg-[#111B52]'
          >
            Projects
          </li>
          <li
            onClick={() => setDisplayedComponent('skills')}
            className='bg-[#020738] w-60 p-2 my-3 border border-[#EFEFF2] rounded-tr-lg rounded-bl-lg cursor-pointer hover:translate-x-6 transform transition active:bg-[#111B52]'
          >
            Skills
          </li>
          <li
            onClick={() => setDisplayedComponent('about')}
            className='bg-[#020738] w-60 p-2 my-3 border border-[#EFEFF2] rounded-tr-lg rounded-bl-lg cursor-pointer hover:translate-x-6 transform transition active:bg-[#111B52]'
          >
            About
          </li>
        </ul>
      </div>
    </Transition>
  )
}

export default NavigationLinks
