import { useMutation } from "@tanstack/react-query"
import { RegisterUser } from "../../api/auth/register"
import { LoginUser, LoginwithGithub, LoginwithGoogle, LoginwithLinkedin } from "../../api/auth/login";
import { Logout } from "../../api/auth/logout";
import { ForgotPassword } from "../../api/auth/forgot-password";
import { ResetPassword } from "../../api/auth/reset-password";

export const RegisterQuery = () => {
    return useMutation({
        mutationKey : ["user"],
        mutationFn : (data) => RegisterUser(data)
    })
};

export const LoginQuery = () => {
    return useMutation({
        mutationKey : ["login-user"],
        mutationFn : (data) => LoginUser(data)
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

export const ForgotPasswordQuery = () => {
    return useMutation({
        mutationKey : ['forgot-password'],
        mutationFn : (data) => ForgotPassword(data)
    })
};

export const ResetPasswordQuery = () => {
    return useMutation({
        mutationKey : ['reset-password'],
        mutationFn : (data) => ResetPassword(data) 
    })
};