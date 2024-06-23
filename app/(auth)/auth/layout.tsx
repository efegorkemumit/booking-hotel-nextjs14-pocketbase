import React from 'react'

interface AuthLayoutProps{
    children:React.ReactNode
}
const AuthLayout = ({children}:AuthLayoutProps) => {
  return (
    <div>
        Logo
        {children}
        logo bitiş
    </div>
  )
}

export default AuthLayout