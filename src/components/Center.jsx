import React from 'react'
import NavigationLinks from './NavigationLinks'
import NavContent from './NavContent'

const Center = () => {
  return (
    <div className='grid grid-cols-3'>
      <NavigationLinks />
      <NavContent />
    </div>
  )
}

export default Center
