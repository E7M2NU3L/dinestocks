import { Button } from '@nextui-org/react';
import React from 'react';
import Vendors from '../../assets/vendors.jpg';
import Workflow from '../../assets/Workflow.jpg';

const Points = () => {
  return (
    <div className="min-h-screen py-8 md:py-12 flex flex-col gap-y-16 mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <section className="flex flex-col gap-y-4 max-w-xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800">
          Why Choose Our Product
        </h1>
        <p className="text-base md:text-lg font-normal text-slate-600">
          Explore the reasons to choose our software and get started with smoother, safer invoice automation and much more.
        </p>
      </section>

      <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
        {/* Left Image */}
        <div className="relative w-full md:w-[543px] h-auto">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={Vendors}
            alt="Vendors"
          />
          <div className="relative flex flex-col justify-center items-start p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">
              Enhanced Efficiency & Collaboration
            </h2>
            <p className="text-sm md:text-base font-light text-black mb-4">
              Dinestocks connects vendors and restaurants for faster communication and streamlined supply chain management.
            </p>
            <Button variant='solid' color='success' className="mt-2">
              Start Collaborating Today
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-[543px] h-auto">
          <div className="relative flex flex-col justify-center items-start p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">
              Simplified Ordering & Payments
            </h2>
            <p className="text-sm md:text-base font-light text-black mb-4">
              Easily browse vendor catalogs, compare offers, and manage secure payments with Dinestocks.
            </p>
            <Button variant='solid' color='success' className="mt-2">
              Experience Seamless Ordering
            </Button>
          </div>
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={Workflow}
            alt="Workflow"
          />
        </div>
      </div>
    </div>
  );
};

export default Points;
