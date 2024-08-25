import React, { useEffect, useState, useContext } from 'react'
import Style from './Checkout.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FaSpinner } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export default function Checkout() {

  const { cartId } = useParams()

  const [errorMessage, setErrorMessage] = useState("")
  const [isLoadingButton, setIsLoadingButton] = useState(false)
  const { checkoutSession } = useContext(CartContext)
  

  const schema = Yup.object().shape({

    details: Yup.string().required("Details is required").min(3).max(15),
    phone: Yup.string().required("Phone is required").matches(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/, "Phone must be valid Egyptian number"),
    city: Yup.string().required("City is required").min(3).max(15),

  })


  const formik = useFormik({

    initialValues: {
      details: "",
      phone: "",
      city: "",
    },

    onSubmit: handleSubmit,

    validationSchema: schema

  })

  async function handleSubmit(values) {

    setIsLoadingButton(true);

    const response = await checkoutSession(cartId, values)

    window.location.href = response.data.session.url;

  }


  return (
    <>
      <div className='container max-w-6xl mx-auto py-32'>

        <div className='flex flex-col'>
          <h1 className='font-normal dark:text-white mb-5'>Checkout: </h1>

          {errorMessage ?
            <div className="p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400" role="alert">
              <span className="font-medium">{errorMessage}</span>  </div>
            : <></>}

          <div className='py-3'>

            <form onSubmit={formik.handleSubmit} className="mx-auto">

              <div className="mb-5">
                <label for="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your details</label>
                <input type="text" id="details" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  {...formik.getFieldProps('details')} />

                {formik.errors.details && formik.touched.details
                  ? <div className="p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium"></span> {formik.errors.details} </div>
                  : <></>}

              </div>

              <div className="mb-5">
                <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
                <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  {...formik.getFieldProps('phone')} />

                {formik.errors.phone && formik.touched.phone
                  ? <div className="p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium"></span> {formik.errors.phone} </div>
                  : <></>}

              </div>

              <div className="mb-5">
                <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your city</label>
                <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  {...formik.getFieldProps('city')} />

                {formik.errors.city && formik.touched.city
                  ? <div className="p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium"></span> {formik.errors.city} </div>
                  : <></>}

              </div>

              <div className='flex justify-center'>

                <button
                  disabled={isLoadingButton} type="submit"
                  className="px-72 text-white disabled:bg-green-200 disabled:text-gray-500 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm sm:w-auto py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  {isLoadingButton ?
                    <FaSpinner className='animate-spin'></FaSpinner>
                    : "Pay now"}

                </button>
              </div>

            </form>

          </div>
        </div>

      </div>
    </>
  )
}













