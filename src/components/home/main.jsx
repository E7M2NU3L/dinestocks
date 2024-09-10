import React from 'react'
import { MdProductionQuantityLimits } from 'react-icons/md';
import { FaFileInvoiceDollar } from 'react-icons/fa6';
import { IoChatbubbleEllipses } from 'react-icons/io5';
import { Button, ButtonGroup } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const features = [
  {
    Icon: MdProductionQuantityLimits,
    title: "Product Listings & Special Offers",
    subtitle: "Easy Product Management for Vendors",
    description: "Vendors can effortlessly create and manage product listings, adding promotions and offers to attract restaurant clients. Restaurants can browse through these curated listings, compare deals, and make informed purchasing decisions that suit their needs."
  },
  {
    Icon: FaFileInvoiceDollar,
    title: "Integrated Payment & Invoicing",
    subtitle: "Simplified Financial Transactions",
    description: "Our platform streamlines the payment and invoicing process. Vendors can track payments and manage financial records, while restaurants securely process payments and organize invoices, ensuring a hassle-free transaction experience."
  },
  {
    Icon: IoChatbubbleEllipses,
    title: "Real-Time Communication & Delivery Tracking",
    subtitle: "Transparent Communication and Order Management",
    description: "With an integrated chat feature, vendors and restaurants can communicate directly for smooth collaboration. The real-time delivery tracking system ensures restaurants have full visibility into their orders from dispatch to delivery."
  }
];

const Main = () => {
  return (
    <main className='bg-gradient-to-tr from-slate-800 via-gray-700 to-black'>
      <div className="flex flex-col items-center px-4 md:px-0 max-w-7xl mx-auto w-full min-h-[90vh] py-12 md:py-16 ">
      <div className='text-center mb-10'>
        <h1 className='text-4xl md:text-5xl font-bold text-dark-3'>
          Empowering Restaurants and Vendors with Seamless B2B Management
        </h1>
        <h2 className='text-lg md:text-xl font-normal text-slate-200 mt-4'>
          Explore the unique features that make our platform the ultimate solution for efficient, transparent, and scalable restaurant-vendor collaborations.
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-around items-center my-6'>
        {features.map((content, index) => (
          <section
          className='bg-white shadow-lg border border-gray-300 rounded-lg p-6 flex flex-col gap-y-4 hover:shadow-xl transition-shadow min-h-[350px] max-h-[400px]'
          key={index}
        >
          <div className='text-slate-800 text-5xl'>
            <content.Icon />
          </div>
          <h1 className='text-2xl md:text-3xl font-semibold text-slate-800'>
            {content.title}
          </h1>
          <p className='text-md font-normal text-slate-600'>
            {content.description}
          </p>
        </section>
        
        ))}
      </div>

      <div className='mt-12 flex justify-center items-center gap-x-6'>
        <ButtonGroup>
          <Button className='bg-white text-slate-800 hover:text-slate-800' variant='solid' color='default'>
            <Link to={"/signup"} className="text-slate-800">Sign up</Link>
          </Button>
          <Button variant='bordered' className='border-slate-200 text-slate-100' color='default'>
            <Link to={"/pricing"} className="text-slate-100">View plans</Link>
          </Button>
        </ButtonGroup>
      </div>
    </div>
    </main>
  )
}

export default Main;
