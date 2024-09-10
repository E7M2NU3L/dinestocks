import React from 'react'
import Placeholder from '../../assets/products.jpg'
import { Button, Textarea } from '@nextui-org/react';

const content = {
  id: 1,
  title : 'Enhancing B2B Connectivity Between Restaurants and Vendors',
  subtitle : 'Streamlining the Supply Chain for Optimal Efficiency',
  content : "<h2>Introduction</h2><p>In today's competitive market, restaurants rely heavily on a seamless B2B connectivity with vendors to ensure the timely supply of fresh ingredients and other essentials. This connectivity is crucial for maintaining quality and consistency in the food industry.</p><h3>Importance of B2B Connectivity</h3><p>Effective B2B connectivity allows restaurants to communicate with vendors, manage orders, and track deliveries efficiently. It minimizes delays, reduces errors, and enhances the overall supply chain process.</p><ul><li><strong>Real-time Communication:</strong> Allows instant updates and order adjustments.</li><li><strong>Automated Processes:</strong> Reduces manual errors and saves time.</li></ul><h3>Conclusion</h3><p>To stay competitive, restaurants must invest in advanced B2B connectivity tools that streamline operations and ensure a reliable supply chain.</p>",
  image : Placeholder,
  duration : 5,
  createdat: '2 days ago',
  author : {
    firstname : "Emmanuel",
    lastName : 'Lothbrok'
  }
};

const SingleBlog = () => {
  return (
    <div className='min-h-screen w-full max-w-7xl mx-auto px-6 md:px-0 py-2'> 
      <section className='min-h-[60vh] w-full object-contain'>
        <img src={content.image} alt='' className='w-full h-[60vh] rounded-md' />

        <section className=' py-6'>
          <h1 className='text-3xl md:text-5xl font-semibold text-slate-800'>
            {content.title}
          </h1>
          <p className='text-lg font-light text-slate-500'>{content.subtitle}</p>
          <p className='text-sm font-light text-slate-500'>{content.duration} mins read</p>
        </section>

        <section className='flex gap-x-3 items-center my-2'>
          <img src={content.image} alt='author' className='h-12 w-12 rounded-full border border-green-500' /> {"."} 
          <h1 className='text-lg font-semibold text-slate-900'>{content.author.firstname} {content.author.lastName}</h1> {"."}
          <p className='text-sm font-light text-slate-600'>{content.createdat}</p>
        </section>

        <section className='my-8' dangerouslySetInnerHTML={{
          __html : content.content
        }}></section>
      </section>

      <section className='py-6'>
        <h1 className='text-lg md:text-xl font-semibold text-slate-800'>
          Comments
        </h1>

        <main className='grid grid-cols-1 md:grid-cols-2 my-7 space-x-4 space-y-6 md:space-y-0'>
        <section className='flex flex-col gap-y-4'>
          <Textarea placeholder='Comment to this blog..' className='' />
          <Button color='success' variant='solid'>Submit</Button>
        </section>
        <section className=' flex flex-col gap-y-4'>
          {
            [0,1,2,3,4].map((_, index) => (
              <div className='bg-slate-200 max-w-3xl text-slate-800 flex flex-col gap-y-4 px-4 py-2 rounded-lg shadow-md' key={index}>
              <main className='flex justify-between items-start'>
                <div className='flex gap-x-2 items-center'>
                  <img src={content.image} className='h-10 w-10 rounded-full' />
                  <p className='text-sm font-medium text-slate-800'>Emmanuel Lothbrok</p>
                </div>
  
                <p className='text-slate-500 font-light text-sm'>3 days ago</p>
              </main>
  
              <h1 className='text-lg font-medium text-slate-800'>"{
                content.subtitle
              } {" "} {content.title}"</h1>
            </div>
            )) 
          }
        </section>
        </main>
      </section>
    </div>
  )
}

export default SingleBlog