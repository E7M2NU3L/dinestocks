import { Button, Card, CardBody, CardHeader, Image, Input } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import { ForgotPasswordQuery } from '../../queries/users';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  // Forgot Password mutation query
  const { mutateAsync: ForgotPassword, isPending: isSendingEmail, isSuccess: isSentEmail, isError: isFailedtoSendEmail } = ForgotPasswordQuery();

  // Handle email input changes
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const onSubmit = async () => {
    if (!email) {
      toast.error("Please enter your email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    try {
      await ForgotPassword({ email });
      toast.success("Password reset link has been sent to your email.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown Error";
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  // Redirect on successful email submission
  useEffect(() => {
    if (isSentEmail) {
      navigate("/sign-in");
    }
  }, [isSentEmail, navigate]);

  return (
    <div className="min-h-[90vh] flex justify-center items-center bg-gray-100">
      <Card className="py-4 px-6 max-w-md w-full shadow-md">
        <CardHeader className="pb-0 pt-2 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Forgot Password</p>
          <small className="text-gray-500">Enter your email to reset your password</small>
        </CardHeader>
        <CardBody className="overflow-visible py-4">
          <Input 
            onChange={handleEmail} 
            value={email} 
            type='email' 
            label="Email" 
            fullWidth
            clearable
            placeholder="Enter your email" 
            disabled={isSendingEmail}
            required
          />
          <Button 
            type="button" 
            onClick={onSubmit} 
            className="mt-6 w-full" 
            disabled={isSendingEmail}
            color="success"
          >
            {isSendingEmail ? "Sending..." : "Send Reset Link"}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ForgotPassword;
