import React from 'react'
import FeatureImage from '../../assets/dash.png'
import { Button, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <div className='flex justify-between items-center px-4 md:px-0 max-w-7xl mx-auto w-full h-[90vh]'>
    <div className='max-w-xl flex flex-col gap-y-4'>
      <h1 className='text-5xl font-bold text-dark-2'>
      Streamlining Operations for Efficient Restaurant Supply Chain Management
      </h1>
      <h1 className='text-lg font-normal'>
      Dinestocks is a B2B management platform that optimizes operations between restaurants and vendors, driving efficiency in the restaurant supply chain. With features such as product listing, special offers, payment management, inventory oversight, and direct communication tools, Dinestocks simplifies the process of sourcing and delivering products to restaurants.
      </h1>
      <div className='flex gap-x-3 items-center pt-7'>
       <div className='flex flex-col gap-y-4'>
            <h1 className='text-lg md:text-xl font-semibold text-slate-800'>
            Improved Collaboration
            </h1>
            <p className='text-sm font-light text-slate-800'>
            Dinestocks facilitates direct communication between vendors and restaurants, fostering collaboration and enhancing efficiency.
            </p>
       </div>

       <div className='flex flex-col gap-y-4'>
            <h1 className='text-lg md:text-xl font-semibold text-slate-800'>
            Seamless Purchasing
            </h1>
            <p className='text-sm font-light text-slate-800'>
            Restaurants can easily browse vendor catalogs, compare offerings, and make purchases hassle-free.
            </p>
       </div>
      </div>
    </div>
    <div className='max-w-2xl'>
      <Image src={FeatureImage} alt='hero-image' className='h-[80vh] w-full object-contain' />
    </div>
  </div>
  )
}

export default Features