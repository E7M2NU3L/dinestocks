import { Button, Image, Input } from '@nextui-org/react'
import React from 'react'
import AppLogo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='min-h-[30vh] flex justify-between pb-6 items-center flex-col gap-y-8 max-w-7xl mx-auto px-6 md:px-0'>
      <section className='max-w-7xl mx-auto flex justify-between items-start md:items-center p w-full md:flex-row flex-col gap-y-4 md:gap-y-0'>
        <section className='flex flex-col gap-y-3'>
        <main className='flex items-center gap-x-3'>
        <Image src={AppLogo} alt='app-logo' className='h-12 w-12 rounded-full' />
        <h1 className='text-3xl font-semibold text-slate-800'>DineStocks</h1>
        </main>
        <p className='text-sm font-normal text-slate-500 max-w-md'>The #1 software tailored to connect restaurants and vendors to attain a smooth invoice and to attain trustable businesses</p>

        <main className='flex items-center gap-x-3'>
        <Input placeholder='Enter your email' className='placeholder:text-slate-500' />
        <Button variant='solid' color='success'>Subscribe</Button>
        </main>
        </section>

        <section className='flex flex-col md:flex-row md:space-x-12 flex-wrap justify-around items-start'>
          <main className='flex flex-col gap-y-4'>
            <h1 className='text-lg font-medium text-slate-700'>Quick Links</h1>
            <main className='flex flex-col items-start gap-x-8 mb-4'>
            <Link to={"/about-us"}>About Us</Link>
            <Link to={"/contact-us"}>Contact Us</Link>
            <Link to={"/faq"}>FAQs</Link>
            <Link to={"/support"}>Support</Link>
            <Link to={"/blog"}>Blog</Link>
          </main>
          </main>

          <main className='flex flex-col gap-y-4'>
            <h1 className='text-lg font-medium text-slate-700'>Other Products</h1>
            <main className='flex flex-col items-start gap-x-8 mb-4'>
            <Link to={"/about-us"}>Password Manager</Link>
            <Link to={"/contact-us"}>Property manager</Link>
            <Link to={"/faq"}>Team Collaborator</Link>
            <Link to={"/support"}>PM Checlist app</Link>
            <Link to={"/blog"}>Habits tracker</Link>
          </main>
          </main>

          <main className='flex flex-col gap-y-4'>
            <h1 className='text-lg font-medium text-slate-700'>Services we provide</h1>
            <main className='flex flex-col items-start gap-x-8 mb-4'>
            <Link to={"/about-us"}>Saas Tools</Link>
            <Link to={"/contact-us"}>Web development</Link>
            <Link to={"/faq"}>Project development</Link>
            <Link to={"/support"}>AI Services</Link>
            <Link to={"/blog"}>Visit our website</Link>
          </main>
          </main>
        </section>
      </section>

      <hr className='bg-slate-800 h-1 w-full' />

      <main className='flex justify-between items-center gap-y-2 w-full flex-wrap'>
        <p className='text-sm font-light text-slate-800'>© 2024 Dinestocks. All rights reserved.</p>

        <main className='flex flex-row items-center gap-x-3'>
        <Link className='hover:underline transition-all duration-100 ease-in-out text-slate-700' to={"/privacy-policy"}>Privacy Policy</Link>
        <Link className='hover:underline transition-all duration-100 ease-in-out text-slate-700' to={"/terms-and-conditions"}>Terms and Conditions</Link>
        <Link className='hover:underline transition-all duration-100 ease-in-out text-slate-700' to={"/cookie-policy"}>Cookie Policy</Link>
      </main>
      </main>
    </div>
  )
}

export default Footer