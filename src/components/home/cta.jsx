import { Button } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div className='min-h-[50vh] max-w-xl px-4 md:px-0 mx-auto flex justify-center items-center text-center flex-col gap-y-7'>
        <h1 className='text-3xl md:text-5xl font-semibold text-slate-800'>
            Start Your Trial Streamline Your Operations
        </h1>
        <p className='text-lg font-normal text-slate-800'>
        Discover how Dinestocks can help you manage your restaurant supply chain efficiently.
        </p>

        <div className='flex items-center gap-x-4'>
            <Button variant='bordered' color='default'>
                <Link to={"/sign-up"}>Sign Up</Link>
            </Button>

            <Button variant='solid' color='success'>
                <Link to={"/features"}>Learn More</Link>
            </Button>
        </div>
    </div>
  )
}

export default Cta