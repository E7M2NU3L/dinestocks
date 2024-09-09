import { Button, Image } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../../assets/hero.png';

const Hero = () => {
  return (
    <div className='flex justify-between items-center px-4 md:px-0 max-w-7xl mx-auto w-full h-[90vh]'>
    <div className='max-w-lg flex flex-col gap-y-4'>
      <h1 className='text-5xl font-bold text-dark-2'>
      Revolutionize restaurant-vendor connections with our cutting-edge platform
      </h1>
      <h1 className='text-lg font-normal'>
      Our B2B web app offers comprehensive Inventory Management, advanced Order Management, seamless Billing and Invoicing, real-time Communication tools, Logistics and Delivery Tracking, and effective CRM tools. Experience the future of restaurant operations today.
      </h1>
      <div className='flex gap-x-3 items-center'>
        <Button variant='solid' color='success'>
          <Link to={"/sign-up"}>Get Started</Link>
        </Button>

        <Button
          variant='bordered'
          className='border-dark-2'
        ><Link to={"/features"}>Learn More</Link></Button>
      </div>
    </div>
    <div className='max-w-2xl'>
      <Image src={HeroImage} alt='hero-image' className='h-[80vh] w-full object-contain' />
    </div>
  </div>
  )
}

export default Hero