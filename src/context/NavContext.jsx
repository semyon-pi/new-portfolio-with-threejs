import React, { useState, createContext } from 'react'

// Create Context Object
export const NavContext = createContext({
  visible: false,
  setVisible: () => {},
  displayedComponent: 'base',
  setDisplayedComponent: () => {},
})

// Create a provider for components to consume and subscribe to changes
export const NavContextProvider = (props) => {
  const [visible, setVisible] = useState(false)
  const [displayedComponent, setDisplayedComponent] = useState('base')

  const value = {
    visible,
    setVisible,
    displayedComponent,
    setDisplayedComponent,
  }

  return (
    <NavContext.Provider value={value}>{props.children}</NavContext.Provider>
  )
}
