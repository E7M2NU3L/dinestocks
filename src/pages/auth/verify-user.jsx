import { Button, Card, CardBody, CardFooter, CardHeader, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const VerifyUser = () => {
    const [otp, setOtp] = useState('');
    const [isPending, startProcess] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            startProcess(true);
            console.log(otp);
            startProcess(false);

            setTimeout(() => {
                navigate('/choose-role');
            }, 1000);
        } catch (error) {
            toast.error(error.message);
        }
    }
  return (
    <div className='min-h-[90vh] flex justify-center items-center w-full'>
        <ToastContainer />
        <Card className='max-w-sm md:max-w-md'>
            <CardHeader className='space-y-2 flex flex-col justify-start'>
                <h1 className='text-2xl font-semibold text-slate-800 tracking-tight'>
                Verify OTP
                </h1>
                <p className='text-sm font-light text-slate-800 tracking-tight'>
                    The Otp has been sent to you via your email, type in your OTP to get verified with your email address.
                </p>
            </CardHeader>
            <CardBody>
                <form className='my-8 space-y-3' onSubmit={onSubmit}>
                    <Input value={otp} onChange={(e) => setOtp(e.target.value)} type='text' label='Enter your OTP' placeholder='OTP' disabled={isPending} />
                    <Button className='' type='submit' variant='solid' disabled={isPending} color='success' fullWidth>
                        Verify User
                    </Button>
                </form>
            </CardBody>
            <CardFooter>
                <p className='text-sm font-extralight text-slate-500 tracking-tight'>Powered by dinestocks</p>
            </CardFooter>
        </Card>
    </div>
  )
}

export default VerifyUser;