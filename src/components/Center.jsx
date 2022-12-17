import React from 'react'
import { useContext } from 'react'
import NavigationLinks from './NavigationLinks'
import NavContent from './NavContent'
import { NavContext } from '../context/NavContext'

const Center = () => {
  const { visible } = useContext(NavContext)

  let componentSize = (visible) => {
    visible ? 'grid grid-cols-3' : ''
  }
  return (
    <div className={visible ? 'sm:grid sm:grid-cols-3' : ''}>
      {visible && <NavigationLinks />}
      <NavContent />
    </div>
  )
}

export default Center
