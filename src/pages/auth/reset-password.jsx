import { Button, Card, CardBody, CardHeader, Image, Input } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import { Bounce, toast } from 'react-toastify';
import { ResetPasswordQuery } from '../../queries/users';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  // Password reset mutation query
  const { mutateAsync: resetPassword, isSuccess: resettedPassword, isError: isFailedToResetPassword, isPending: isResettingPassword } = ResetPasswordQuery();

  // Handle password input changes
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const onSubmit = async () => {
    if (!password) {
      toast.error("Please enter a new password", {
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
      await resetPassword({ password });
      toast.success("Password has been reset successfully.", {
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

  // Redirect after successful reset
  useEffect(() => {
    if (resettedPassword) {
      setTimeout(() => {
        navigate('/sign-in');
      }, 1500);
    }
  }, [resettedPassword, navigate]);

  // Display error toast if reset fails
  useEffect(() => {
    if (isFailedToResetPassword) {
      toast.error("Password reset failed. Please try again.", {
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
  }, [isFailedToResetPassword]);

  return (
    <div className="min-h-[90vh] flex justify-center items-center bg-gray-100">
      <Card className="py-4 px-6 max-w-md w-full shadow-md">
        <CardHeader className="pb-0 pt-2 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Reset Password</p>
          <small className="text-gray-500">Enter your new password to reset your Dinestocks account</small>
        </CardHeader>
        <CardBody className="overflow-visible py-4">
          <Input
            onChange={handlePassword}
            value={password}
            type='password'
            label="New Password"
            fullWidth
            clearable
            placeholder="Enter new password"
            disabled={isResettingPassword}
            required
          />
          <Button 
            type="button" 
            onClick={onSubmit} 
            className="mt-6 w-full bg-slate-800 text-white hover:text-slate-100" 
            disabled={isResettingPassword}
          >
            {isResettingPassword ? "Resetting..." : "Reset Password"}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ResetPassword;
