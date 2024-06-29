import React from 'react'

interface RoomPageDetailProps{
    params:{
        roomId:string;
    }
}

const RoomPageDetail = ({params}:RoomPageDetailProps) => {
  return (
    <div className='pt-44'>RoomPageDetail
    {params.roomId}
    
    </div>
  )
}

export default RoomPageDetail