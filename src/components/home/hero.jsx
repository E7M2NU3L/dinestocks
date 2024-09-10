import { Button, Image } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../../assets/hero-section.jpg';

const Hero = () => {
  return (
    <main className='relative'>
      <div className='flex relative z-30 md:justify-between justify-around flex-col md:flex-row md:gap-y-0 items-center px-4 md:px-0 max-w-7xl mx-auto w-full min-h-[80vh] py-12 md:py-16'>
    <div className='max-w-lg flex flex-col gap-y-4'>
      <h1 className='text-5xl font-bold text-dark-3'>
      Revolutionize restaurant-vendor connections with our cutting-edge platform
      </h1>
      <h1 className='text-lg font-medium text-slate-300'>
      Our B2B web app offers comprehensive Inventory Management, advanced Order Management, seamless Billing and Invoicing, real-time Communication tools, Logistics and Delivery Tracking, and effective CRM tools. Experience the future of restaurant operations today.
      </h1>
      <div className='flex gap-x-3 items-center'>
        <Button variant='solid' color='success'>
          <Link to={"/sign-up"}>Get Started</Link>
        </Button>

        <Button
          variant='bordered'
          className='border-dark-3 text-dark-3'
        ><Link to={"/features"}>Learn More</Link></Button>
      </div>
    </div>
  </div>

    <div className='absolute min-h-[80vh] g-full w-full inset-0'>
            <img src={HeroImage} alt='bg-image' className='h-[80vh] w-full inset-0' />
            <div className='min-h-[80vh] w-full inset-0 z-10 bg-slate-800 bg-opacity-70 absolute'></div>
    </div>
    </main>
  )
}

export default Hero