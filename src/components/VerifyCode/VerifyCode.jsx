import React, { useEffect, useState } from 'react'
import Style from './VerifyCode.module.css'
import { useNavigate } from 'react-router-dom'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'


export default function VerifyCode() {

  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoadingButton, setIsLoadingButton] = useState(false)
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    code: Yup.string().required("Code is required").min(6).max(6),
  })

  const formik = useFormik({

    initialValues: {
      code: "",
    },

    onSubmit: handleSubmit,
    validationSchema: schema

  })

  async function handleSubmit(values) {

    setErrorMessage("");
    setSuccessMessage("");

    setIsLoadingButton(true);

    try {
      console.log("hey");
      
      const response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', values )
      
      console.log(response);


      if (response.status == "Success") {
        navigate('/register')
      }

    }

    catch (error) {
      setErrorMessage(error.response);
    }

    finally {
      setIsLoadingButton(false);
    }

  }

  return (
    <>
      <div className='container max-w-6xl mx-auto py-32'>
        <h1 className='font-normal dark:text-white mb-5'>Please enter your verification code</h1>

        {errorMessage ?
          <div className="p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400" role="alert"> <span className="font-medium">{errorMessage}</span>  </div>
          : <></>}

        {successMessage ?
          <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert"> <span class="font-medium">{successMessage}</span> </div>
          : <></>}

        <div className='py-3'>
          <form onSubmit={formik.handleSubmit} class="mx-auto">

            <div class="mb-5">
              <label htmlFor="code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your code</label>
              <input type="tel" id="code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                {...formik.getFieldProps('code')} />

              {formik.errors.code && formik.touched.code
                ? <div className="p-4 mb-4 text-sm text-red-500 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400" role="alert">
                  <span className="font-medium"></span> {formik.errors.code} </div>
                : <></>}

            </div>

            <div className='flex'>

              <button
                disabled={isLoadingButton} type="submit" class="text-white disabled:bg-green-200 disabled:text-gray-500 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                {isLoadingButton ?
                  <FaSpinner className='animate-spin'></FaSpinner>
                  : "Verify"}

              </button>
            </div>

          </form>

        </div>

      </div>
    </>
  )
}

