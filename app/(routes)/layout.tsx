import React from 'react'

interface RouterLayoutProps{
  children:React.ReactNode
}

const RouterLayout = ({children}:RouterLayoutProps) => {
  return (
    <>
    Navbar
    <div className='min-h-screen'>
      {children}
    </div>
    Footer
    </>
  )
}

export default RouterLayout