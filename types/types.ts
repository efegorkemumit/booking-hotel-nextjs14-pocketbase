export interface Slider {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    image: string;
    alt: string;
}

export interface Hotel {
    collectionId: string;
    collectionName: string;
    contact_email: string;
    contact_phone: string;
    created: string;
    description: string;
    id: string;
    images: string[];
    location: string;
    name: string;
    summary: string;
    updated: string;
}  

export interface User {
    id: string;
    collectionId: string;
    collectionName: string;
    username: string;
    verified: boolean;
    emailVisibility: boolean;
    email: string;
    created: string;
    updated: string;
    name: string;
    avatar: string;
  }

export interface Reservation {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    room: string;
    user: string;
    guest_fullname: string;
    guest_email: string;
    arrival_date: string;
    departure_date: string;
    adults: number;
    children: number;
}

export interface Room {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    room_name: string;
    type: string;
    price: number;
    images: string[];
  }