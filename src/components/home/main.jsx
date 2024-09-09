import React from 'react'
import HeroImage from '../../assets/restaurant.jpg';
import { Image } from '@nextui-org/react';

const Main = () => {
  return (
    <div className="min-h-screen w-full flex justify-between items-center h-full max-w-7xl mx-auto">
        <div className='max-w-2xl'>
            <Image src={HeroImage} alt='hero-image' className='h-[80vh] w-full object-contain' />
        </div>
    
        <div className='max-w-lg flex flex-col gap-y-4'>
            <h1 className='text-5xl font-bold text-dark-2'>
            Streamline Operations, Manage Payments, Handle Invoices, and Oversee Inventory
            </h1>
            <h1 className='text-lg font-normal'>
            Dinestocks is a B2B management platform that helps restaurants and vendors streamline operations. With features like payment management, invoice handling, and inventory oversight, it simplifies the supply chain process.
            </h1>
        </div>
    </div>
  )
}

export default Main