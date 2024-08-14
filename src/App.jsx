import { useState } from 'react'

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

function App() {

  const routing = createBrowserRouter([
    {
      path: '', element: <Layout></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path: '/cart', element: <Cart></Cart> },
        { path: '/brands', element: <Brands></Brands> },
        { path: '/categories', element: <Categories></Categories> },
        { path: '/login', element: <Login></Login> },
        { path: '/products', element: <Products></Products> },
        { path: '/register', element: <Register></Register> },
        { path: '/wishlist', element: <Wishlist></Wishlist> },
        { path: '*', element: <NotFound></NotFound> },
      ]
    }
  ])

  return (
    <>

      <RouterProvider router={routing}></RouterProvider>

    </>
  )
}

export default App
