import { Button } from '@/components/ui/button'
import { apiImagesUrl } from '@/constans'
import { Room } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface RoomItemProps{
    room: Room
}

const RoomItem = ({room}:RoomItemProps) => {
  return (
    <div className='flex flex-col bgone shadow-xl rounded-md overflow-hidden'>
        <Image
        src={`${apiImagesUrl}/${room.collectionId}/${room.id}/${room.images[0]}`}
        alt=''
        width={1920}
        height={1080}
        className='h-60 w-full object-cover'
        
        />
        <div className='p-4'>
            <h2 className='font-semibold overflow-visible mb-4'>
              {room.room_name}
            </h2>
            <p className='mb-4'>
{room.type}          
  </p>
            <div className='flex justify-between items-center'>
                <span className='text-sm text-red-700 dark:text-red-400 font-semibold'> ${room.price} / Turkey</span>
               
               <Link href={`/rooms/${room.id}`}>
                <Button variant="mybutton">Reservation</Button>
                </Link>


            </div>


        </div>


    </div>
  )
}

export default RoomItem