import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const RoomItem = () => {
  return (
    <div className='flex flex-col bgone shadow-xl rounded-md overflow-hidden'>
        <Image
        src={"https://check-facing.pockethost.io/api/files/qwtemek4arympt4/x2gwvfk7ra6zpom/1gUzbvHSlUI_6DaxRGHCzM.jpg?token="}
        alt=''
        width={1920}
        height={1080}
        className='h-60 w-full object-cover'
        
        />
        <div className='p-4'>
            <h2 className='font-semibold overflow-visible mb-4'>
                Comfortable Single Room Designed for Ultimate Guest Comfort and Convenience
            </h2>
            <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim natus dolore, veniam, perferendis expedita accusamus obcaecati rerum nulla voluptatibus sequi omnis laborum aut minus numquam. Eum voluptatem a deserunt quis.
            </p>
            <div className='flex justify-between items-center'>
                <span className='text-sm text-red-700 dark:text-red-400 font-semibold'> $50 / Turkey</span>
                <Button variant="mybutton">Reservation</Button>
            </div>


        </div>


    </div>
  )
}

export default RoomItem