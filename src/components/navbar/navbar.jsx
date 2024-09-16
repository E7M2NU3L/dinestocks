import React, { useState } from 'react';
import { Button, Image } from '@nextui-org/react';
import Logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/dropdown";
import NavDrawer from './nav-drawer';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };

  return (
    <div className='flex px-5 w-full justify-between md:justify-around h-[10vh] items-center'>
      <section>
        <Link to={"/"} className='flex items-center gap-x-2'>
          <Image src={Logo} alt='app logo' about='DineStocks Logo' className='h-12 w-12' />
          <h1 className='text-lg font-medium text-dark-2 sm:block hidden'>DineStocks</h1>
        </Link>
      </section>

      <section className='hidden md:flex items-center gap-x-4'>
        <NavLink className={({isActive}) => isActive ? 'text-sm font-normal active:translate-y-1 active:scale-95 hover:border hover:border-slate-900 rounded-lg px-3 py-1 bg-dark-5 text-dark-3' : 'text-sm font-normal text-dark-5 hover:border hover:border-slate-900 rounded-lg px-3 py-1'} to={"/features"}>
          Features
        </NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-sm font-normal active:translate-y-1 active:scale-95 hover:border hover:border-slate-900 bg-dark-5 text-dark-3 rounded-lg px-3 py-1' : 'text-sm font-normal text-dark-5 hover:border hover:border-slate-900 rounded-lg px-3 py-1'} to={"/pricing"}>
          Pricing
        </NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-sm font-normal active:translate-y-1 active:scale-95 hover:border hover:border-slate-900 bg-dark-5 text-dark-3 rounded-lg px-3 py-1' : 'text-sm font-normal text-dark-5 hover:border hover:border-slate-900 rounded-lg px-3 py-1'} to={"/blogs"}>
          Blogs
        </NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-sm font-normal active:translate-y-1 active:scale-95 hover:border hover:border-slate-900 bg-dark-5 text-dark-3 rounded-lg px-3 py-1' : 'text-sm font-normal text-dark-5 hover:border hover:border-slate-900 rounded-lg px-3 py-1'} to={"/docs"}>
          Docs
        </NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-sm font-normal active:translate-y-1 active:scale-95 hover:border hover:border-slate-900 bg-dark-5 text-dark-3 rounded-lg px-3 py-1' : 'text-sm font-normal text-dark-5 hover:border hover:border-slate-900 rounded-lg px-3 py-1'} to={"/about-us"}>
          About us
        </NavLink>
        <Dropdown>
          <DropdownTrigger>
            <button className='text-sm font-normal text-dark-5 hover:border hover:border-slate-900 rounded-lg px-3 py-1'>
              More {">"}
            </button>
          </DropdownTrigger>

          <DropdownMenu>
            <DropdownItem key="new">
              <NavLink className={({isActive}) => isActive ? 'text-sm font-normal active:translate-y-1 active:scale-95 px-3 py-2 h-7' : 'text-sm font-normal text-dark-5 rounded-lg px-3 py-2 h-7'} to={"/terms-of-service"}>
                Terms of Service
              </NavLink>
            </DropdownItem>
            <DropdownItem key="copy">
              <NavLink className={({isActive}) => isActive ? 'text-sm font-normal active:translate-y-1 active:scale-95 px-3 py-2 h-7' : 'text-sm font-normal text-dark-5 rounded-lg px-3 py-2 h-7'} to={"/privacy-policy"}>
                Privacy Policy
              </NavLink>
            </DropdownItem>
            <DropdownItem key="edit">
              <NavLink className={({isActive}) => isActive ? 'text-sm font-normal active:translate-y-1 active:scale-95 px-3 py-2 h-7' : 'text-sm font-normal text-dark-5 rounded-lg px-3 py-2 h-7'} to={"/contact-us"}>
                Contact Us
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>

      <section className='hidden md:flex items-center gap-x-4'>
        <Link to={"/sign-up"}>
          <Button variant='solid' color='success'>Get Started</Button>
        </Link>

        <Link to={"/sign-in"}>
          <Button variant='bordered' className='border border-dark-5 hover:bg-dark-5 hover:text-dark-3 transition-all duration-250 ease-in-out'>Log in</Button>
        </Link>
      </section>

      <section className='md:hidden'>
        <button onClick={toggleDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 7a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 7a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </section>

      <NavDrawer isOpen={drawerOpen} onClose={toggleDrawer} />
    </div>
  );
};

export default Navbar;
