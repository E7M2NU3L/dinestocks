import React from 'react';
import { motion } from 'framer-motion';
import { Button, Image } from '@nextui-org/react';
import Logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/dropdown";

const NavDrawer = ({ isOpen, onClose }) => {
  return (
    <motion.div
      className='fixed inset-0 bg-white z-50 flex px-5 w-full justify-around h-screen flex-col gap-y-6 items-center'
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? '0%' : '100%' }}
      transition={{ type: 'spring', stiffness: 80 }}
    >
      <button onClick={onClose} className="absolute top-5 right-5 text-dark-5">X</button>
      <section>
        <Link to={"/"} className='flex items-center gap-x-2'>
          <Image src={Logo} alt='app logo' about='DineStocks Logo' className='h-12 w-12' />
          <h1 className='text-lg font-medium text-dark-2'>DineStocks</h1>
        </Link>
      </section>

      <section className='flex items-center gap-y-4 flex-col'>
        <NavLink className={({isActive}) => isActive ? 'text-sm font-normal active:translate-y-1 active:scale-95 hover:border hover:border-slate-900 rounded-lg px-3 py-1 bg-dark-5 text-dark-3' : 'text-sm font-normal text-dark-5 hover:border hover:border-slate-900 rounded-lg px-3 py-1'} to={"/features"}>
          Features
        </NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-sm font-normal active:translate-y-1 active:scale-95 hover:border hover:border-slate-900 bg-dark-5 text-dark-3 rounded-lg px-3 py-1' : 'text-sm font-normal text-dark-5 hover:border hover:border-slate-900 rounded-lg px-3 py-1'} to={"/pricing"}>
          Pricing
        </NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-sm font-normal active:translate-y-1 active:scale-95 hover:border hover:border-slate-900 bg-dark-5 text-dark-3 rounded-lg px-3 py-1' : 'text-sm font-normal text-dark-5 hover:border hover:border-slate-900 rounded-lg px-3 py-1'} to={"/blogs"}>
          Blogs
        </NavLink>
        <Dropdown>
          <DropdownTrigger>
            <button className='text-sm font-normal text-dark-5 hover:border hover:border-slate-900 rounded-lg px-3 py-1'>
              About Us {">"}
            </button>
          </DropdownTrigger>

          <DropdownMenu>
            <DropdownItem key="new">
              <NavLink className={({isActive}) => isActive ? 'text-sm font-normal active:translate-y-1 active:scale-95 bg-dark-5 text-dark-3 rounded-lg px-3 py-2 h-7' : 'text-sm font-normal text-dark-5 rounded-lg px-3 py-2 h-7'} to={"/terms-of-service"}>
                Terms of Service
              </NavLink>
            </DropdownItem>
            <DropdownItem key="copy">
              <NavLink className={({isActive}) => isActive ? 'text-sm font-normal active:translate-y-1 active:scale-95 bg-dark-5 text-dark-3 rounded-lg px-3 py-2 h-7' : 'text-sm font-normal text-dark-5 rounded-lg px-3 py-2 h-7'} to={"/privacy-policy"}>
                Privacy Policy
              </NavLink>
            </DropdownItem>
            <DropdownItem key="edit">
              <NavLink className={({isActive}) => isActive ? 'text-sm font-normal active:translate-y-1 active:scale-95 bg-dark-5 text-dark-3 rounded-lg px-3 py-2 h-7' : 'text-sm font-normal text-dark-5 rounded-lg px-3 py-2 h-7'} to={"/contact-us"}>
                Contact Us
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>

      <section className='flex items-center gap-y-4 flex-col'>
        <Link to={"/sign-up"}>
          <Button variant='solid' color='success'>Get Started</Button>
        </Link>

        <Link to={"/sign-in"}>
          <Button variant='bordered' className='border border-dark-5 hover:bg-dark-5 hover:text-dark-3 transition-all duration-250 ease-in-out'>Log in</Button>
        </Link>
      </section>
    </motion.div>
  );
}

export default NavDrawer;
