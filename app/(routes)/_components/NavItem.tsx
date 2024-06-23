import Link from 'next/link';
import React from 'react'

interface NavItemProps{
    title:string;
    url:string;
}
const NavItem = ({title,url}:NavItemProps) => {
  return (
    <Link href={url}>
        <div className='text-white cursor-pointer'>
        {title}
        </div>

    </Link>
  )
}

export default NavItem