import ImageVawes from "@/components/ImageVawes";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "../_components/Hero";
import RoomItem from "../_components/RoomItem";
import { getHomeRooms } from "@/actions/getRooms";

export default async function Home() {

  const rooms = await getHomeRooms();
  return (
    <>
      <Hero/>
      <div className="text-center text-3xl font-semibold container mt-60">
        <span className="underline font-mono">Best Rooms</span>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 mb-60 container">
       {rooms.map((room)=>(
          <RoomItem key={room.id} room={room}/>
       ))}
       
    
      </div>
    </>
  );
}


