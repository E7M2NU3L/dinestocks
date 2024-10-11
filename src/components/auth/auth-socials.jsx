import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LoginwithGithubQuery, LoginwithGoogleQuery, LoginwithLinkedInQuery } from '../../queries/auth/users';
import { ToastContainer, toast } from 'react-toastify';

const LoginOptions = () => {
    
    const {isPending : isLoggingwithGithub, isError : IsFailedToLoginwithGithub, mutateAsync : LoginwithGithub} = LoginwithGithubQuery();
    const {isPending : isLoggingwithGoogle, isError : IsFailedToLoginwithGoogle, mutateAsync : LoginwithGoogle} = LoginwithGoogleQuery();
    const {isPending : isLoggingwithLinkedIn, isError : IsFailedToLoginwithLinkedIn, mutateAsync : LoginwithLinkedIn} = LoginwithLinkedInQuery();

    useEffect(() => {
        if (IsFailedToLoginwithGithub) {
        toast.error('Login Failed');
        }
    }, [IsFailedToLoginwithGithub]);
    useEffect(() => {
        if (IsFailedToLoginwithGoogle) {
        toast.error('Login Failed');
        }
    }, [IsFailedToLoginwithGoogle]);
    useEffect(() => {
        if (IsFailedToLoginwithLinkedIn) {
        toast.error('Login Failed');
        }
    }, [IsFailedToLoginwithLinkedIn]);

    const handleloginwithGoogle = async () => {
        const response = await LoginwithGoogle();
        console.log(response);
    }
    const handleloginwithGithub = async () => {
        const response = await LoginwithGithub();
        console.log(response);

    }
    const handleloginwithLinkedin = async () => {
        const response = await LoginwithLinkedIn();
        console.log(response);
    }

  return (
    <div className="w-full max-w-md mx-auto p-8">
        <ToastContainer />
        <h2 className="text-center mb-6 text-gray-800"> or Login with</h2>
        
        <div className="flex gap-4 w-full flex-col md:flex-row">
            {/* Google Login */}
            <button
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition"
            disabled={isLoggingwithGoogle}
            onClick={handleloginwithGoogle}
            >
            <FcGoogle className="mr-2 text-lg" />
            Google
            </button>

            {/* GitHub Login */}
            <button
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition"
            disabled={isLoggingwithGithub}
            onClick={handleloginwithGithub}
            >
            <FaGithub className="mr-2 text-lg" />
            GitHub
            </button>

            {/* LinkedIn Login */}
            <button
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
            disabled={isLoggingwithLinkedIn}
            onClick={handleloginwithLinkedin}
            >
            <FaLinkedin className="mr-2 text-lg" />
            LinkedIn
            </button>
        </div>
    </div>
  );
};

export default LoginOptions;
