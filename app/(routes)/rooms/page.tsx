import React from 'react'
import RoomItem from '../_components/RoomItem'
import { getRooms } from '@/actions/getRooms';

const RoomsPage = async() => {

  const rooms = await getRooms();

  return (
    <div className='pt-44 container'>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-60 container">
       {rooms.map((room)=>(
          <RoomItem key={room.id} room={room}/>
       ))}
       
    
      </div>


    </div>
  )
}

export default RoomsPage