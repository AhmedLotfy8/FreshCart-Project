import React, { useContext, useEffect, useState } from 'react'
import Style from './Cart.module.css'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import CartProduct from '../CartProduct/CartProduct'
import { CartContext } from '../../Context/CartContext'

export default function Cart() {

  const { getUserCart, updateItemCount, deleteItem, clearUserCart } = useContext(CartContext)
  const [cartData, setCartData] = useState(null)
  const [cartDataProducts, setCartDataProducts] = useState(null)
  const { cartItemsNumber, setCartItemsNumber } = useContext(CartContext);
  const [isLoadingScreen, setIsLoadingScreen] = useState(false)

  async function getLoggedUserCart() {

    try {
      setIsLoadingScreen(true)
      const response = await getUserCart();
      const DATA = response.data.data;

      setCartData(DATA)
      setCartDataProducts(DATA.products)
      setCartItemsNumber(response.data.numOfCartItems)

    }

    catch (err) {
      console.log(err);
    }

    finally {
      setIsLoadingScreen(false);
    }

  }

  async function updateQuantity(id, count) {
    try {
      setIsLoadingScreen(true);
      const response = await updateItemCount(id, count);

      const DATA = response.data.data;
      setCartData(DATA)
      setCartDataProducts(DATA.products)
      toast.success('Updated', {
        position: 'top-right'
      }
      )
    }

    catch (err) {
      console.log(err);
    }

    finally {
      setIsLoadingScreen(false);
    }

  }

  async function deleteItemFunction(id) {
    try {
      setIsLoadingScreen(true);
      const response = await deleteItem(id);

      const DATA = response.data.data;
      setCartData(DATA)
      setCartDataProducts(DATA.products)
      toast.success('Removed', {
        position: 'top-right'
      })
    }

    catch (err) {
      console.log(err);
    }

    finally {
      setIsLoadingScreen(false);
    }

  }

  async function clearCart() {
    try {
      setIsLoadingScreen(true);
      await clearUserCart();

      setCartItemsNumber(0)

      toast.success('Cart Cleared', {
        position: 'top-right'
      })
    }

    catch (err) {
      console.log(err);
    }

    finally {
      setIsLoadingScreen(false);
    }

  }

  useEffect(() => {
    getLoggedUserCart();
  }, [])

  return (
    <>
      <div className='py-32'>

        <div class="my-10 mx-auto max-w-6xl bg-gray-100 dark:bg-slate-800 p-10">

          {cartItemsNumber == 0 ?
            <div>
              <h2 className='font-semibold dark:text-white pb-6'>Cart Shop</h2>
              <h2 className='font-semibold dark:text-white'>Your cart is empty</h2>
            </div>
            : (
              cartData && cartDataProducts && (
                <>

                  {isLoadingScreen ?

                    <>
                      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <Loading></Loading>
                      </div>
                    </>

                    : <></>}

                  <div>
                    <div className='flex justify-between items-center'>
                      <h2 className='font-semibold dark:text-white pb-6'>Cart Shop</h2>
                      <Link to={'/checkout/' + cartData._id}>
                        <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Checkout</button>
                      </Link>
                    </div>

                    <div className='flex justify-between items-center font-semibold text-lg py-1'>
                      <p className='dark:text-white'>Total price: <span className='text-green-500'>{cartData.totalCartPrice}</span></p>
                      <p className='dark:text-white'>Total number of items: <span className='text-green-500'>{cartItemsNumber}</span></p>
                    </div>
                  </div>

                  {cartDataProducts.map((cartP) => (
                    <CartProduct deleteItemFunction={deleteItemFunction} updateQuantity={updateQuantity} count={cartP.count} key={cartP._id} CProducts={cartP}></CartProduct>
                  ))}

                  <div onClick={() => clearCart()} className='text-center mt-5'>
                    <button type="button" className="text-red-600 hover:text-white border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Clear Your Cart</button>
                  </div>
                </>
              )
            )}

        </div >

      </div >
    </>
  )
}

