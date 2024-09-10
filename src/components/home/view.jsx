import React from 'react'
import FeatureImage from '../../assets/food-dash.png'
import { Button, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const View = () => {
  return (
    <div className='flex max-w-7xl mx-auto flex-col gap-y-7 w-full py-8 px-6 md:px-0 md:py-12 bg-gray-100'>
      <div className='w-full flex justify-between items-start gap-y-4 flex-col md:flex-row md:gap-y-0'>
        <h1 className='text-5xl font-bold text-dark-2'>
          Streamline Operations, Manage Payments, Handle Invoices, and Oversee Inventory
        </h1>
        <section className='flex flex-col gap-y-4'>
          <h1 className='text-lg font-normal'>
            Dinestocks is a B2B management platform that helps restaurants and vendors streamline operations. With features like payment management, invoice handling, and inventory oversight, it simplifies the supply chain process.
          </h1>

          <div className='flex gap-x-3 items-center'>
            <Button variant='solid' color='success'>
              <Link to={"/sign-up"}>Get Started</Link>
            </Button>

            <Button variant='bordered' className='border-dark-2 text-dark-2'>
              <Link to={"/features"}>Learn More</Link>
            </Button>
          </div>
        </section>
      </div>

      <div className='md:min-h-screen max-w-7xl mx-auto w-full h-full relative'>
        <Image src={FeatureImage} className='w-full h-full object-cover' alt='dashboard-image' />
      </div>
    </div>
  )
}

export default View
