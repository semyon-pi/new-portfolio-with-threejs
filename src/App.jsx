import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Center from './components/Center'

const App = () => {
  return (
    <div class='flex flex-col h-screen '>
      <Header />
      <Center />
      <Footer />
    </div>
  )
}

export default App
