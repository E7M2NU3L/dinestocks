import { useMutation } from "@tanstack/react-query"
import { RegisterUser } from "../api/auth/register"
import { LoginUser, LoginwithGithub, LoginwithGoogle, LoginwithLinkedin } from "../api/auth/login";
import { Logout } from "../api/auth/logout";
import { ForgotPassword } from "../api/auth/forgot-password";
import { ResetPassword } from "../api/auth/reset-password";

export const RegisterQuery = (data) => {
    return useMutation({
        mutationKey : ["user", data],
        mutationFn : () => RegisterUser(data)
    })
};

export const LoginQuery = (data) => {
    return useMutation({
        mutationKey : ["login-user", data],
        mutationFn : () => LoginUser(data)
    })
};

export const LoginwithGithubQuery = () => {
    return useMutation({
        mutationKey : ['github-login'],
        mutationFn : LoginwithGithub
    })
}

export const LoginwithGoogleQuery = () => {
    return useMutation({
        mutationKey : ['github-login'],
        mutationFn : LoginwithGoogle
    })
}

export const LoginwithLinkedInQuery = () => {
    return useMutation({
        mutationKey : ['github-login'],
        mutationFn : LoginwithLinkedin
    })
}

export const LogoutQuery = () => {
    return useMutation({
        mutationFn : Logout
    })
};

export const ForgotPasswordQuery = (data) => {
    return useMutation({
        mutationKey : ['forgot-password', data],
        mutationFn : () => ForgotPassword(data)
    })
};

export const ResetPasswordQuery = (data) => {
    return useMutation({
        mutationKey : ['reset-password', data],
        mutationFn : () => ResetPassword(data) 
    })
};