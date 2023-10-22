import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {  RouterProvider } from 'react-router-dom'
// import MainLayout from './Layouts/MainLayout'
// import Home from './Pages/Home/Home'
// import Products from './Pages/Products/Products'
import myCreateRoute from './Route/Route'




// const myCreateRoute =  createBrowserRouter([
//   {
//    path: '/',
//    element: <div>this is home components</div>
//   },
//   {
//     path: '/product',
//     element: <div>if you buy new products so you contact with us vary fast
//     </div>
//   },
//   {
//     path: '/about',
//     element: <div>do you want to know about our mission and vission so coul'd you try contact with us
//     </div>
//   }
// ])
// const myCreateRoute = createBrowserRouter([
//   {
//     path: '/',
//     element: <section>
//       <div>This is a fixed item</div>
//       <Outlet></Outlet>
//     </section>,
//     children : [
//       {
//         path: '/',
//         element : <div>This is a home rout</div>
//       },
//       {
//         path: '/about',
//         element: <div>This is a About section</div>
//       }
//     ]
//   }
// ])

// const myCreateRoute = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout></MainLayout>,
//     children : [
//       {
//         path: '/',
//         element : <Home></Home>
//       },
//       {
//         path: '/products',
//         element: <Products></Products>
//       }
//     ]
//   }
// ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRoute}></RouterProvider>
  </React.StrictMode>,
)
