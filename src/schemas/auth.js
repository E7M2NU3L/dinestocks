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

export const VendorSetupSchema = y.object({
    companyName : y.string(),
    companyDescription : y.string().min(50, 'very short description').max(5000, 'execeeded the limit'),
    contactPerson : y.string(),
    email : y.string().email(),
    phone_number : y.string(),
    street : y.string(),
    city : y.string(),
    state : y.string(),
    pinCode : y.string(),
    country : y.string(),
    facebookLink : y.string().url().optional(),
    instagramLink : y.string().url().optional(),
    twitterLink : y.string().url().optional(),
});

export const RestaurantSetupSchema = y.object({
    restaurantName : y.string(),
    restaurantDescription : y.string().min(50, 'Too short Description').max(5000, 'exceeded the limits'),
    email : y.string().email(),
    phone_number : y.string(),
    street : y.string(),
    city : y.string(),
    state : y.string(),
    pinCode : y.string(),
    country : y.string(),
    facebookLink : y.string().url().optional(),
    instagramLink : y.string().url().optional(),
    twitterLink : y.string().url().optional(),
    managerfirstName : y.string(),
    managerLastname : y.string(),
    managerEmail : y.string(),
    managerBio :  y.string().min(50, 'Too short Description').max(5000, 'exceeded the limits').optional(),
})