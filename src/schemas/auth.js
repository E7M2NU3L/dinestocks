import * as y from 'yup';

export const LoginSchema = y.object({
    email: y.string()
                .email('Invalid email address')
                .required('Email is required'),
    password: y.string()
                .required('Password is required'),
});