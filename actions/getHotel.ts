import { pb } from "@/lib/pocketbase";


export  async function getHotel() {
    try {

        const record = await pb.collection('hotel').getOne('x2gwvfk7ra6zpom', {
            expand: 'relField1,relField2.subRelField',
        });

        return record;
        
    } catch (error) {
        console.error('Error getting slider images:', error);
        return [];
        
    }
    
}