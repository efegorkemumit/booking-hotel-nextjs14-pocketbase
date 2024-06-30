'use client'

import { UserIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const UserToogle = () => {

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const authData = localStorage.getItem("pocketbase_auth");
      if (authData) {
        const { token, model } = JSON.parse(authData);
        setUser(model)
      }
    }
    fetchUser();
  }, [])


  return (
    <div>
      {user ? (
        <DropdownMenu>
        <DropdownMenuTrigger className='flex text-white text-xs justify-center items-center'> 
          <UserIcon className='text-white dark:text-white' /> {user.username}
          </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem  onClick={()=>{localStorage.removeItem('pocketbase_auth'); setUser(null); router.refresh(); router.push("/")}}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      )
        :
        (
          <Link href="/auth/login">
            <UserIcon className='text-white dark:text-white' />
          </Link>
        )

      }
    </div>
  )
}

export default UserToogle