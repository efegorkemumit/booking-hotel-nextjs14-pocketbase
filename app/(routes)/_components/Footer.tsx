import ImageVawes from '@/components/ImageVawes'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='relative text-white'>
            <div className='z-10 absolute inset-0'>
                <ImageVawes myclassName='absolute -top-5 transform rotate-180' />
            </div>
            <div className='z-0 absolute inset-0'>
                <div className='w-full h-full bg-cover bg-center' style={{ backgroundImage: 'url(/slider/1.jpg)' }}></div>
                <div className='absolute inset-0 bg-black opacity-75'></div>
            </div>
            <div className='z-20 relative'>
                <div className='container mx-auto pt-24 pb-16 px-4'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl font-bold'>Subscribe newsletter</h2>
                        <p className='text-gray-400 mt-2'>
                            Newsletter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut laboreonsectetur adipiscinget dolore.
                        </p>
                        <div className='mt-4 flex justify-center ml-auto'>
                            <Input placeholder='Your Email Address' className='max-w-lg' />
                            <Button variant="mybutton">Subscribe</Button>

                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                        {/** Col Span 1 */}
                        <div>
                            <div className='w-24 py-4 px-3 rounded-xl bg-white'>
                                <Image
                                    src="/logo.png"
                                    alt='logo'
                                    width={500}
                                    height={500}
                                    className='w-full'
                                />

                            </div>
                            <p className='text-gray-400 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat vel sit nam deleniti sequi ab eligendi? Dolore sunt ducimus vel tenetur dolor quis ex esse placeat! Voluptas aspernatur odio modi quidem, ratione ullam doloribus deleniti nisi optio nesciunt beatae maxime iste fuga rerum vitae quisquam facere? Tenetur itaque placeat iste.</p>

                        </div>

                        {/** Col Span 2 */}
                        <div>
                            <h3 className='text-xl font-bold mb-4'>Rooms</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Hotel One Suite Turkey Ayvalik Lux Spa Welness</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Hotel One Suite Turkey Ayvalik Lux Spa Welness</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Hotel One Suite Turkey Ayvalik Lux Spa Welness</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Hotel One Suite Turkey Ayvalik Lux Spa Welness</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Hotel One Suite Turkey Ayvalik Lux Spa Welness</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Hotel One Suite Turkey Ayvalik Lux Spa Welness</a></li>
                            </ul>

                        </div>

                        {/** Col Span 3 */}
                        <div>
                            <h3 className='text-xl font-bold mb-4'>Contact</h3>
                            <p className='text-gray-400 space-y-2'>
                                <span className='block'> Global Street vs Turkey Istanbul</span>
                                <span className='block'>+90 555 333 22 22</span>
                                <span className='block'> efegorkem@youtube.com</span>

                            </p>


                        </div>



                    </div>
                    <div className='text-center mt-8'>
                        <p className="text-gray-400">© Youtube Efe Görkem Ümit</p>
                        <p className="text-gray-400">Designed By <span className="text-yellow-500">Efe Görkem Ümit</span></p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer