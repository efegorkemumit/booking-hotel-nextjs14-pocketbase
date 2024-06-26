'use client'
import React, { useEffect, useState } from 'react'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'
import { Hotel } from '@/types/types'
import { getHotel } from '@/actions/getHotel'

interface RouterLayoutProps{
  children:React.ReactNode
}

const RouterLayout = ({children}:RouterLayoutProps) => {

  const [hotelInfo, setHotelInfo] = useState<Hotel>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function fetchHotel() {
      try {
        const datahotel: Hotel = await getHotel();
        setHotelInfo(datahotel)
      } catch (error) {
        console.error('Error getting slider images:', error);
      }
      finally{
        setLoading(false);
      }
    }

    fetchHotel();

  },[])

  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
      {children}
    </div>
    <Footer data={hotelInfo} loading={loading}/>
    </>
  )
}

export default RouterLayout