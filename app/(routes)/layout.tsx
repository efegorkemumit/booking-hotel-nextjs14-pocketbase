import React from 'react'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'

interface RouterLayoutProps{
  children:React.ReactNode
}

const RouterLayout = ({children}:RouterLayoutProps) => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
      {children}
    </div>
    <Footer/>
    </>
  )
}

export default RouterLayout