'use client'
import { ModeToggle } from '@/components/ModeToggle'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import UserToogle from './UserToogle'
import MobileMenu from './MobileMenu'
import { NavMenu } from '@/constans'
import NavItem from './NavItem'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const pathname = usePathname();

    const [isScroolled, setIsScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY >50){
                setIsScrolled(true);
            }else
            {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

  return (
    <div className={`w-full z-30 items-center ${pathname != '/'? 'bg-mydark2' : (isScroolled ? 'bg-mydark2':'bg-transparent')} fixed`}>
        <div className='container'>
            <div className='px-4 py-6 flex flex-row items-center justify-center'>
                <div className='w-24 py-4 px-3 rounded-xl bg-white'>
                    <Image
                    src="/logo.png"
                    alt='logo'
                    width={500}
                    height={500}
                    className='w-full'
                    />

                </div>
                <div className='flex-row lg:flex hidden items-center gap-9 ml-auto'>
                {NavMenu.map((item, index)=>(
                    <NavItem key={index} title={item.title} url={item.url} />
                   ))}


                </div>
                <div className='flex lg:flex items-center ml-auto gap-2'>
                    <UserToogle/>
                    <ModeToggle/>
                    <div className='lg:hidden flex flex-row items-center ml-auto gap-2'>
                        <MobileMenu/>
                    </div>


                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Navbar