import { Formik, useFormik } from 'formik'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import * as y from 'yup';
import { UpdateUserQuery } from '../../queries/auth/update-role';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, Select, SelectItem, SelectSection } from '@nextui-org/react';
import AssetImage from '../../assets/dashboard.jpg';

const RoleSchema = y.object({
    role : y.string(),
});

const ChooseRole = () => {
    const {mutateAsync : UpdateUser, isSuccess : isUpdatedUserRole, isPending : isUpdatingUserRole} = UpdateUserQuery();
    const navigate = useNavigate();
    const formik = useFormik({
        validationSchema: RoleSchema,
        initialValues : {
            role : '',
        },
        onSubmit : async (role) => {
            try {
                const userId = "";
                const payload = {
                    role : role
                }
                const data = {
                    userId,
                    payload
                }
                const response = UpdateUser(data);
                console.log(response);
            } catch (error) {
                if (error instanceof Error) {
                    toast.error(error.message);
                }
                else {
                    toast.error("Unknown Error");
                }
            }
        }
    });

    useEffect(() => {
        if (isUpdatedUserRole) {
            toast.success(
                "User Role has been updated"
            );
        }
    }, [isUpdatedUserRole]);
  return (
    <main className='relative z-0'>
        <div className='min-h-[90vh] z-30 relative flex items-center justify-center py-10 md:py-12 w-full h-full max-w-7xl px-4 md:px-0 mx-auto'>
        <Card className='max-w-md mx-auto p-4'>
            <CardHeader className='flex flex-col gap-y-3'>
                <h1 className='text-3xl font-semibold text-slate-800'>Choose your Role</h1>
                <p className='text-sm md:text-lg font-normal text-slate-600'>Choose your to get started with creation of your app dashboard, functionalities</p>
            </CardHeader>

            <CardBody>
                <form onSubmit={() => {}}>
                <Select label="Choose your role">
                    <SelectSection title={"roles"} >
                    <SelectItem>
                        Restaurant
                    </SelectItem>
                    <SelectItem>
                        Vendor
                    </SelectItem>
                    </SelectSection>
                </Select>

                <div className='w-full flex justify-end items-center'>
                <Button className='mt-4 justify-end flex' type='submit' variant='solid' color='success'>
                    Submit
                </Button>
                </div>
                </form>
            </CardBody>

            <CardFooter className='flex justify-end items-center w-full'>
                <p className='test-sm font-normal text-slate-700'>Select the role carefully as you cannot the role after you have created an account with it</p>
            </CardFooter>
        </Card>
    </div>
    <div className='min-h-[90vh] z-10 absolute inset-0 w-full h-full bg-gradient-to-tr from-green-400 via-emerald-400 to-green-500'>
        <img src={AssetImage} className='min-h-[90vh] inset-0 w-full h-full' alt='bg-image' />
        <div  className='min-h-[90vh] absolute inset-0 w-full h-full bg-slate-800 bg-opacity-50 z-20'>
        </div>
    </div>
    </main>
  )
}

export default ChooseRole