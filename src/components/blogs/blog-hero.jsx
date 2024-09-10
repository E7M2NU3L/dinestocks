import { Button } from '@nextui-org/react'
import React, { useRef } from 'react'
import LatestBlog from '../../assets/product.jpg';
import BgImage from '../../assets/product-dash.jpg';

const BlogHero = () => {
    const latestRef = useRef(null);

  return (
    <main className='relative'>
        <div className='min-h-[70vh] py-8 md:py-12 w-full h-full flex justify-between items-center max-w-7xl px-4 md:px-0 mx-auto relative z-50 flex-col md:flex-row gap-y-6'>
            <section className='max-w-xl flex flex-col gap-y-2'>
                <p className='text-sm font-light w-[9vh] text-slate-100 px-3 py-1 rounded-md border border-white'>Blogs</p>
                <h1 className='text-3xl md:text-5xl font-semibold text-slate-100'>
                    Find the Right Blogs Tailored towards connectivity
                </h1>
                <p className='text-sm font-light text-slate-200'>
                    Connect with us to delve more into the updates of our software, tips and tricks to survive in the world of technology and automation and much more func stuff
                </p>

                <Button color='default' variant='solid' className='bg-slate-800 hover:text-slate-100 w-[15vh] text-white' onClick={() => {
                    console.log(latestRef.current.className);
                    latestRef.current.className = "relative md:border md:border-green-500 border-0 rounded-lg scale-105"
                }}>
                    Explore
                </Button>
            </section>

            <section className='relative rounded-lg' ref={latestRef}>
                <img src={LatestBlog} alt='latest-blog' className='h-[55vh] max-w-xl object-contain relative w-full rounded-lg' />
                <section className='absolute left-0 h-[50%] w-full z-30 bg-slate-900 bg-opacity-50 bottom-0 p-4'>
                    <p className='text-sm font-light w-[7.5vh] text-slate-100 px-3 py-1 rounded-md border border-white'>Latest</p>
                    <h1 className='text-xl md:text-3xl font-semibold text-slate-100 line-clamp-2'>
                    Enhancing B2B Connectivity Between Restaurants and Vendors
                    </h1>

                    <div className='md:flex mt-3 justify-between items-center gap-x-3 hidden'>
                        <img src={LatestBlog} alt="" className='h-8 w-8 rounded-full object-contain' />

                        <Button variant='bordered' className='text-white'>Read More</Button>
                    </div>
                </section>
            </section>
        </div>

        <div className='absolute min-h-[70vh] g-full w-full inset-0'>
            <img src={BgImage} alt='bg-image' className='h-[70vh] w-full inset-0' />
            <div className='min-h-[70vh] w-full inset-0 z-10 bg-slate-800 bg-opacity-50 absolute'></div>
        </div>
    </main>
  )
}

export default BlogHero