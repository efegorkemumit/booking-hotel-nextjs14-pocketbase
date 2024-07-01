"use client"

import { pb } from '@/lib/pocketbase';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import RoomItem from '../_components/RoomItem';

const SearchPageRooms = () => {

    const searchParams = useSearchParams();
    const [rooms, setRooms] = useState([]);

    const arrivalDate = searchParams.get('arrivalDate');
    const departureDate = searchParams.get('departureDate');
    const adults = searchParams.get('adults');
    const children = searchParams.get('children');

    useEffect(()=>{
        const fetchAvaibleRooms = async()=>{

            try {
                const reservations = await pb.collection('reservations').getFullList({
                    filter:`arrival_date <= "${departureDate}" && departure_date >= "${arrivalDate}"`,
                    sort:"-created"
                });
                console.log('Reservations:', reservations);
                
                const reserveRoomdIds = reservations.map(reservation => reservation.room);
                console.log("reserveRoomdIds", reserveRoomdIds)
    
                let filters ='';
                if(reservations.length>0){
                    filters = reserveRoomdIds.map(id=> `id != ${JSON.stringify(id)}`).join(' && ')
    
                }else
                {
                    filters='';
                }
    
                const resultList = await pb.collection('rooms').getList(1, 50, {
                    filter: `created >= "2022-01-01 00:00:00" ${filters ? ` && (${filters})` : ''}`,
                });
    
                console.log("resultList", resultList)
    
                setRooms(resultList.items)
                
            } catch (error) {
                console.log("error", error)
                
            }
          

        }

        fetchAvaibleRooms();
    },[arrivalDate, departureDate, adults, children])

    if(rooms.length===0){
        return <div className='pt-44 container'>Loading</div>
    }

  return (
    <div className='pt-44 container mb-44'>
        <h1 className='text-3xl font-bold mb-4'>Avaible Rooms</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {rooms.map(room=>(
                <RoomItem room={room} key={room.id}/>
            ))}


        </div>


    </div>
  )
}

export default SearchPageRooms