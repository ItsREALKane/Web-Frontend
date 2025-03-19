import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Users from "./views/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/users"/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/users",
                element: <Users />,
            }
    ]
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login1",
                element: <Login/>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    },
])
export default router;