import React from 'react'
import BlogThumbnail from '../../assets/chat.jpg'
import { Button, Pagination, PaginationCursor, PaginationItem } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const BlogList = () => {
    const array = [0,1,2,3,4,5]
  return (
    <div className='max-w-7xl min-h-screen w-full mx-auto py-8 md:py-12 px-6 md:px-0'>
        <h1 className='text-3xl md:text-5xl font-semibold text-slate-800 pb-7'>
            Latest Blogs
        </h1>

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-7'>
            {array.map((content, index) => (
                <React.Fragment>
                    <section className='max-w-sm md:max-w-lg min-h-[55vh] bg-slate-100' key={index}>
                <img src={BlogThumbnail} className='h-[30vh] w-full' alt='blog-thumbnail' />

                <section className='p-4 flex flex-col gap-y-4'>
                    <div className='flex items-center gap-x-3'>
                        <p className='text-sm font-normal border border-slate-800 px-3 rounded-sm text-slate-800'>
                            efficiency
                        </p>
                        <p className='text-sm font-normal border border-slate-800 px-3 rounded-sm text-slate-800'>
                            transition
                        </p>
                    </div>

                    <h1 className='text-xl md:text-3xl font-semibold text-slate-800'>
                    Automating Invoices in the Restaurant Industry
                    </h1>
                    <p className='text-sm tracking-tight font-light text-slate-600 line-clamp-2'>
                    How Efficient Delivery Tracking Can Improve Your Business with the usage of automated solutions like AI, IOT and Software as a service applications
                    </p>

                    <div className='flex mt-3 justify-between items-center gap-x-3'>
                        <section className='flex items-center gap-x-2'>
                        <img src={BlogThumbnail} alt="" className='h-8 w-8 rounded-full object-contain' />
                        <main className='flex flex-col'>
                            <p className='text-sm font-medium text-slate-700'>Emmanuel A</p>
                            <p className='text-sm font-light tracking-tight text-slate-500'>4 mins read</p>
                        </main>
                        </section>

                        <Link to={"/blogs/12345"}>
                        <Button variant='solid' size='sm' color='success'>Read More</Button>
                        </Link>
                    </div>
                </section>
            </section>
                </React.Fragment>
            ))}
        </section>

        <section className='pt-6 flex justify-center items-start w-full'>
            <Pagination variant='bordered' color='success'>
            </Pagination>
        </section>
    </div>
  )
}

export default BlogList