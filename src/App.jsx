import React, { useState } from 'react'
import { NavContextProvider } from './context/NavContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Center from './components/Center'

const App = () => {
  return (
    <>
      <NavContextProvider>
        <Header />
        <Center />
        <Footer />
      </NavContextProvider>
    </>
  )
}

export default App
