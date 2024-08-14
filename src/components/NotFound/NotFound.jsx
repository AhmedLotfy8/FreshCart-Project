import React, { useEffect, useState } from 'react'
import Style from './NotFound.module.css'

export default function NotFound() {

  const [count, setCount] = useState(0)

  useEffect(() => {

    return () => {

    }
  }, [])


  return (
    <>
      <h1>NotFound</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}

