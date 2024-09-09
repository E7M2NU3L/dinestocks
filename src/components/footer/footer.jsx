import { Image } from '@nextui-org/react'
import React from 'react'
import AppLogo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='min-h-[30vh] flex justify-center items-center text-center flex-col gap-y-8 max-w-7xl mx-auto'>
      <Image src={AppLogo} alt='app-logo' className='h-12 w-12 rounded-full' />

      <main className='flex flex-row items-center gap-x-8 mb-4'>
        <Link to={"/about-us"}>About Us</Link>
        <Link to={"/contact-us"}>Contact Us</Link>
        <Link to={"/faq"}>FAQs</Link>
        <Link to={"/support"}>Support</Link>
        <Link to={"/blog"}>Blog</Link>
      </main>

      <hr className='bg-slate-800 h-1 w-full' />

      <main className='flex justify-between items-center w-full'>
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