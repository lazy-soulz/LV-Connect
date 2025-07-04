import React, { lazy, Suspense } from "react";
import DashboardRoutes from "./DashboardRoutes";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

export const nav = [
        {
            path: "/dashboard/*",
            name: "DashboardSection",
            element: <DashboardRoutes />,
            isPrivate: true,
        },
        {
            path: "/login",
            name: "LoginSection",
            element: <Login />,
            isPrivate: false,
        },
        {
            path: "/register",
            name: "RegisterSection",
            element: <Register />,
            isPrivate: false,
        },
        
        
        {
            path: "/forgot-password",
            name: "ForgotPasswordSection",
            element: <ForgotPassword />,
            isPrivate: false,
        },
        {
            path: "/reset-password",
            name: "ResetPasswordSection",
            element: <ResetPassword />,
            isPrivate: false,
        }
]