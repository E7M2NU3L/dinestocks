import * as y from 'yup';

export const LoginSchema = y.object({
    email: y.string()
                .email('Invalid email address')
                .required('Email is required'),
    password: y.string()
                .required('Password is required'),
});

export const RegisterSchema = y.object({
    email: y.string()
    .email('Invalid email address')
    .required('Email is required'),
    password: y.string().min(4, 'Password is Too short').max(25, 'exceeded the password content limit')
    .required('Password is required'),
    confirmPassword : y.string().min(4, 'Password is Too short').max(25, 'exceeded the password content limit')
    .required('Password is required'),
    firstname : y.string(),
    lastname : y.string()
});