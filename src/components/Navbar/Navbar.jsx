import React, { useContext, useEffect, useState } from 'react'
import Style from './Navbar.module.css'

import { MdShoppingCart } from "react-icons/md";
import { MdWbSunny, MdDarkMode } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { userContext } from '../../Context/UserContext';


export default function Navbar() {

  const { token, setToken } = useContext(userContext);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-full top-0 fixed z-20">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">


          <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
            <MdShoppingCart className='text-green-400 text-4xl' />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fresh Cart</span>
          </Link>

          <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div className=" w-full md:block md:w-auto" id="navbar-multi-level">

            <div className='flex items-center'>

              <ul className="flex font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                {token && <>
                
                  <div className='flex justify-between items-center gap-4 me-56'>
                    <li>
                      <NavLink to="" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent active"></NavLink>
                    </li>

                    <li>
                      <NavLink to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</NavLink>
                    </li>

                    <li>
                      <NavLink to="/cart" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart</NavLink>
                    </li>

                    <li>
                      <NavLink to="/Wishlist" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Wishlist</NavLink>
                    </li>

                    <li>
                      <NavLink to="/Products" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Products</NavLink>
                    </li>

                    <li>
                      <NavLink to="/Categories" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Categories</NavLink>
                    </li>

                    <li>
                      <NavLink to="/Brands" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Brands</NavLink>
                    </li>
                  </div>

                  <div className=' flex justify-center items-center gap-3'>

                    <li>
                      <NavLink to="/cart" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent no-active">

                        <button type="button" class="relative inline-flex items-center p-1 text-sm font-medium text-center text-white focus:outline-none">
                          <MdShoppingCart className='text-green-500 text-4xl' />
                          <span class="sr-only">Notifications</span>
                          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">0</div>
                        </button>

                      </NavLink>
                    </li>

                    <li>
                      <NavLink onClick={() => setToken(null)} to="/login"
                        className="block py-2 px-3 me-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Log out</NavLink>
                    </li>

                  </div>
                </>}

              </ul>

              <ul className="flex font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                {!token &&
                  <div className=' flex justify-center items-center gap-4'>
                    <li>
                      <NavLink to="/register" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</NavLink>
                    </li>

                    <li>
                      <NavLink to="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log in</NavLink>
                    </li>

                    <li>
                      <NavLink className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"></NavLink>
                    </li>
                  </div>
                }

                <li className={`${Style.modeIcon} mt-2`}>
                  <ToggleMode></ToggleMode>
                </li>

              </ul>


            </div>

          </div>

        </div>
      </nav>

    </>
  )

}

function ToggleMode() {

  const [isDark, setIsDark] = useState(
    localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  useEffect(() => {
    const html = document.querySelector('html');

    if (isDark) {
      html.classList.add('dark')
      localStorage.setItem('color-theme', 'dark');
    }

    else {
      html.classList.remove('dark')
      localStorage.setItem('color-theme', 'light');
    }


  }, [isDark])

  return <>

    <button onClick={() => setIsDark(!isDark)}>
      {isDark ? <MdWbSunny className='text-white'></MdWbSunny> : <MdDarkMode className='text-black'></MdDarkMode>}
    </button>

  </>

}
