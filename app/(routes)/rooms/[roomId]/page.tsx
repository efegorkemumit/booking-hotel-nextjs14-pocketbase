import { getRoomDetail } from '@/actions/getRooms';
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { apiImagesUrl } from '@/constans';
import Image from 'next/image';


interface RoomPageDetailProps {
  params: {
    roomId: string;
  }
}

const RoomPageDetail = async ({ params }: RoomPageDetailProps) => {

  const room = await getRoomDetail(params.roomId)
  console.log(room)
  return (
    <div className='pt-44 max-w-6xl mx-auto p-4'>
      <div className='bgone shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <Carousel>
            <CarouselContent>

              {room.images.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={`${apiImagesUrl}/${room.collectionId}/${room.id}/${room.images[index]}`}
                    alt=''
                    width={1920}
                    height={1080}
                    className='h-60 w-full md:h-full object-cover'

                  />
                </CarouselItem>
              ))}


            </CarouselContent>
            <CarouselPrevious className='left-0' />
            <CarouselNext className='right-0' />
          </Carousel>

        </div>
        <div className='md:w-1/2 p-4'>
        <h2 className='text-2xl font-bold mb-2'>{room.room_name}</h2>
        <p>{room.type}</p>
        <div className='text-lg font-semibold '>${room.price} per night</div>

        </div>

      </div>
    </div>
  )
}

export default RoomPageDetail