import { useState } from 'react'

import UserContextProvider from './Context/UserContext'
import './App.css'
import Home from './components/Home/Home.jsx'
import Cart from './components/Cart/Cart.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Categories from './components/Categories/Categories.jsx'
import Brands from './components/Brands/Brands.jsx'
import Login from './components/Login/Login.jsx'
import Products from './components/Products/Products.jsx'
import Register from './components/Register/Register.jsx'
import Wishlist from './components/Wishlist/Wishlist.jsx'
import Layout from './components/Layout/Layout.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import ForgetPassword from './components/Forget-password/Forget-password.jsx'
import ProtectedRoute from './components/Protected-Route/Protected-Route.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
import CartContextProvider from './Context/CartContext.jsx'

function App() {

  const routing = createBrowserRouter([
    {
      path: '', element: <Layout></Layout>, children: [
        { index: true, element: <ProtectedRoute> <Home></Home> </ProtectedRoute> },
        { path: '/cart', element: <ProtectedRoute> <Cart></Cart> </ProtectedRoute> },
        { path: '/brands', element: <ProtectedRoute> <Brands></Brands> </ProtectedRoute> },
        { path: '/categories', element: <ProtectedRoute> <Categories></Categories> </ProtectedRoute> },
        { path: '/Forget-password', element: <ForgetPassword></ForgetPassword> },
        { path: '/login', element: <Login></Login> },
        { path: '/products', element: <ProtectedRoute> <Products></Products> </ProtectedRoute> },
        { path: '/productdetails/:id', element: <ProtectedRoute> <ProductDetails></ProductDetails> </ProtectedRoute> },
        { path: '/register', element: <Register></Register> },
        { path: '/wishlist', element: <ProtectedRoute> <Wishlist></Wishlist> </ProtectedRoute> },
        { path: '*', element: <NotFound></NotFound> },
      ]
    }
  ])

  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <RouterProvider router={routing}></RouterProvider>
        </CartContextProvider>
      </UserContextProvider>

    </>
  )
}

export default App
