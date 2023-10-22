

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Products from "../Pages/Products/Products";
import Home from "../Pages/Home/Home";
// import Dashboard from "../Pages/Dashboard/Dashboard";
import ProductsDetails from "../Pages/Products/ProductsDetails";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
import EditProfile from "../Pages/EditProfile/EditProfile";

            

 
const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
              path: '/',
              element : <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: ()=> fetch(`https://dummyjson.com/products`)
                
            },
            
            {
                path: '/products/:product',
                element: <ProductsDetails></ProductsDetails>,
                loader: ({params})=> fetch(`https://dummyjson.com/products/${params.product}`)
            },
            {
                path: '/dashboard',
                element: <DashboardLayout></DashboardLayout>,
                children : [
                    {
                        path: '/dashboard',
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path: '/dashboard/editProfile',
                        element: <EditProfile></EditProfile>
                    }
                ]
            }
        ]
    }
])
export default myCreateRoute;