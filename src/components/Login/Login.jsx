import React, { useEffect, useState } from 'react'
import Style from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { FaSpinner } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


export default function Login() {

  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string().required("Email is required").email(),
    password: Yup.string().required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
       "Password must contain atleast 8 character, an uppercase and a lowercase element, and atleast one digit"),
  })

  const formik = useFormik({

    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: handleSubmit,

    validationSchema: schema

  })

  async function handleSubmit(values) {

    setIsLoading(true);

    try {
      const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)

      if (data.message == "success") {   
        console.log(data.token);
        navigate('/');
      }

    }

    catch (error) {
      setErrorMessage(error.response.data.message);
    }

    finally {
      setIsLoading(false);
    }


  }

  return (
    <>
      <div className='container max-w-6xl mx-auto py-10'>

        <div className='flex flex-col'>
          <h1 className='font-normal dark:text-white mb-5'>Login now: </h1>

          {errorMessage ?
            <div className="p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400" role="alert">
              <span className="font-medium">{errorMessage}</span>  </div>
            : <></>}

          <div className='py-3'>

            <form onSubmit={formik.handleSubmit} class="mx-auto">

              <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  {...formik.getFieldProps('email')} />

                {formik.errors.email && formik.touched.email
                  ? <div className="p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium"></span> {formik.errors.email} </div>
                  : <></>}

              </div>

              <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  {...formik.getFieldProps('password')} />

                {formik.errors.password && formik.touched.password
                  ? <div className="p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium"></span> {formik.errors.password} </div>
                  : <></>}

              </div>

              <div className='flex justify-end'>
                <button
                  disabled={isLoading} type="submit" class="text-white disabled:bg-green-200 disabled:text-gray-500 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  {isLoading ?
                    <FaSpinner className='animate-spin'></FaSpinner>
                    : "Login now"}

                </button>
              </div>

            </form>

          </div>
        </div>

      </div>
    </>
  )
}


