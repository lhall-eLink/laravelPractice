import {Navigate, createBrowserRouter} from "react-router-dom";
import NotFound from "./views/NotFound.jsx"
import Signup from "./views/Signup.jsx"
import Login from "./views/Login.jsx"
import Users from "./views/Users.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx"
import GuestLayout from  "./components/GuestLayout.jsx"
import Dashboard from "./views/Dashboard.jsx";

const router = createBrowserRouter([

    {
        path: "*",
        element: <NotFound />
    },
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/users" />
            },
            {
                path: "/users",
                element: <Users />
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            }
        ]
    },
    {
        path: "/",
        element: <GuestLayout/>,
        children: [
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/login",
                element: <Login />
            },
        ]
    }
])

export default router;
