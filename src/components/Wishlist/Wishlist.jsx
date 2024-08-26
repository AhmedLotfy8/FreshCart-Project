import React, { useContext, useEffect, useState } from 'react'
import Style from './Wishlist.module.css'
import WishlistProduct from '../WishlistProduct/WishlistProduct';
import { WishlistContext } from '../../Context/WishlistContext';
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';
import { CartContext } from '../../Context/CartContext';

export default function Wishlist() {

  const { getUserWishlist, removeItem } = useContext(WishlistContext)
  const [wishlistData, setWishlistData] = useState(null)
  const [isLoadingScreen, setIsLoadingScreen] = useState(false)
  const [wishlistSize, setWishlistSize] = useState(null)


  async function getLoggedUserWishlist() {

    try {
      setIsLoadingScreen(true);
      const response = await getUserWishlist();
      const DATA = response.data.data;

      setWishlistData(DATA)
      setWishlistSize(DATA.length)

      console.log(DATA);


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
      await removeItem(id);

      getLoggedUserWishlist()

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

  useEffect(() => {
    getLoggedUserWishlist()
  }, [])



  return (
    <>
      <div className='py-32'>

        <div class="my-10 mx-auto max-w-6xl bg-gray-100 dark:bg-slate-800 p-10">

          {wishlistSize == 0 ?
            <h2 className='font-semibold dark:text-white'>My wish List</h2>

            : (
              wishlistData &&
              <>
                {isLoadingScreen ?
                  <>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                      <Loading></Loading>
                    </div>
                  </>
                  : <>
                    <h2 className='font-semibold dark:text-white'>My wish List</h2>

                    {wishlistData.map((wishP) => <WishlistProduct key={wishP.id} WProducts={wishP} deleteItemFunction={deleteItemFunction}></WishlistProduct>)}

                  </>}

              </>
            )
          }

        </div >

      </div >
    </>
  )
}

