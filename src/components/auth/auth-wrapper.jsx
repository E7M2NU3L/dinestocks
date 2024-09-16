import React from 'react'
import LoginOptions from './auth-socials'
import OptimizedImage from '../image-store/image-store';


const AuthWrapper = ({children, imagePath}) => {
  
  return (
    <section className="">
      <div className="lg:grid lg:min-h-[90vh] lg:grid-cols-12">
        <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
        <OptimizedImage path={imagePath} className="absolute inset-0 h-full w-full object-cover" />
        </aside>

        <main className="flex items-start justify-start px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div className="max-w-xl lg:max-w-3xl">
          {children}
          <LoginOptions />
          </div>
        </main>
      </div>
    </section>
  )
}

export default AuthWrapper;