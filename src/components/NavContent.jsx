import React, { useContext } from 'react'
import { NavContext } from '../context/NavContext'
import Base from './pages/Base'
import Projects from './pages/Projects'
import About from './pages/About'
import Skills from './pages/Skills'

const NavContent = () => {
  const { displayedComponent } = useContext(NavContext)

  const components = () => {
    switch (displayedComponent) {
      case 'base':
        return <Base />
      case 'projects':
        return <Projects />
      case 'about':
        return <About />
      case 'skills':
        return <Skills />
      default:
        return <Base />
    }
  }
  return (
    <div className='text-white m-5 p-2 opacity-60 bg-[#020738] col-span-2 rounded-lg'>
      {components()}
    </div>
  )
}

export default NavContent
