import { Card, CardBody, CardHeader, CardFooter, Textarea, Button } from '@nextui-org/react';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { VendorSetupSchema } from '../../schemas/auth';
import { CreateVendorQuery } from '../../queries/databases/vendors';

const CreateVendor = () => {
  const {isPending, isSuccess : isCreatedVendor, mutateAsync : CreateVendors, data : VendorOutput} = CreateVendorQuery();
  const formik = useFormik({
    initialValues : {
      companyName : '',
      companyDescription : '',
      contactPerson : '',
      email : '',
      phone_number : '',
      street : '',
      city : '',
      state : '',
      pinCode : '',
      country : '',
      facebookLink : '',
      instagramLink : '',
      twitterLink : ''
    },
    validationSchema : VendorSetupSchema,
    onSubmit : async (data) => {
      try {
        await CreateVendors(data);
      } catch (error) {
        toast.error(error?.message);
      }
    }
  });

  useEffect(() => {
    if (isCreatedVendor) {
      toast.success("Vendor Profile Created Successfully");
    };
  }, [isCreatedVendor])

  return (
    <div className='min-h-[90vh] flex items-center justify-center py-10 md:py-12 w-full h-full max-w-7xl mx-auto'>
      <Card className='max-w-sm md:max-w-2xl'>
        <CardHeader className='flex flex-col space-y-1'>
          <h1 className='text-2xl font-semibold tracking-tighter text-slate-800'>Vendor Profile</h1>
          <p className='text-sm font-light text-slate-800 tracking-tight'>Create your vendor profile to get started with invoicing, products and inventory management, delivery management, feedbacks and much more..</p>
        </CardHeader>

        <CardBody>
          <form className='' onSubmit={formik.handleSubmit}>
            <section>
              <h1 className='text-xl font-semibold text-slate-800 tracking-tight hover:underline'>
                Company Information
              </h1>
            <div className='my-4 flex flex-col space-y-2'>
            <InputTags isPending={isPending} formik={formik} label={"Company Name"} name={"companyName"} placeholder={"Eg: Mitchelle Foods.."} inputValue={formik.values.companyName}  />
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">Company Description</label>
              <Textarea
                  type="text"
                  id={"company-desc"}
                  name={"companyDescription"}
                  placeholder='some description about the company'
                  rows={5}
                  disabled={isPending}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.companyDescription}
                  className="w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm border active:outline-green-500"
              />
            </div>
            </div>
            </section>
            <section>
            <h1 className='text-xl font-semibold text-slate-800 tracking-tight hover:underline'>
                Owner Details
              </h1>
              <div className='my-4 flex flex-col space-y-2'>
              <InputTags isPending={isPending} formik={formik} label={"Contact Person"} inputValue={formik.values.contactPerson} name={"contactPerson"} placeholder={"Jane Doe"} />
              <main className='grid grid-cols-1 md:grid-cols-2 w-full grid-rows-2 md:grid-rows-1 gap-2'>
              <InputTags isPending={isPending} formik={formik} label={"Business Email"} name={"email"} inputValue={formik.values.email} placeholder={"janedoe@example.com"} />
              <InputTags isPending={isPending} formik={formik} inputValue={formik.values.phone_number} name={"phone_number"} label={"Phone Number"} placeholder={""} />
              </main>
              </div>
            </section>
            <section>
            <h1 className='text-xl font-semibold text-slate-800 tracking-tight hover:underline'>
                Address Information
              </h1>
              <section className='my-4 flex flex-col space-y-2'>
                <InputTags isPending={isPending} formik={formik} inputValue={formik.values.street} name={"street"} label={"Street Info."} placeholder={"Door No, Street Name, Street Number, references..."} />
                <main className='grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-row-2 gap-2'>
                <InputTags isPending={isPending} formik={formik} placeholder={"Chennai"} label={"City"} name={"city"} inputValue={formik.values.city} />
                <InputTags isPending={isPending} formik={formik} inputValue={formik.values.state} label={"State"} placeholder={"Tamilnadu"} name={"state"} />
                <InputTags isPending={isPending} formik={formik} inputValue={formik.values.pinCode} name={"pincode"} label={"Pincode"} placeholder={"6000110"} />
                <InputTags isPending={isPending} formik={formik} inputValue={formik.values.country} label={"Country"} name={"country"} placeholder={"India"} />
                </main>
              </section>
            </section>
            
            <section>
            <h1 className='text-xl font-semibold text-slate-800 tracking-tight hover:underline'>
                Socials
              </h1>
              <section className='my-4 flex flex-col space-y-2'>
                <InputTags isPending={isPending} formik={formik} inputValue={formik.values.instagramLink} name={"IG"} label={"Instagram"} />
                <main className='grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-row-1 gap-2'>
                <InputTags isPending={isPending} formik={formik} label={"Facebook"} name={"facebook"} inputValue={formik.values.facebookLink} />
                <InputTags isPending={isPending} formik={formik} inputValue={formik.values.twitterLink} label={"Twitter"} name={"twitter"} />
                </main>
              </section>
            </section>
            <Button variant='solid' color='success'>
              Create Profile
            </Button>
          </form>
        </CardBody>

        <CardFooter>
          <p className='text-sm font-extralight text-slate-800 tracking-tight'>make sure to add proper details as it can be refelected as public information to your surrounding restaurants</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CreateVendor;

const InputTags = ({isPending, formik, label, name, inputValue, placeholder}) => {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">{label}</label>
      <input
          type="text"
          id={name}
          name={name}
          disabled={isPending}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={inputValue}
          placeholder={placeholder}
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 border active:outline-green-500"
      />
    </div>
  )
}