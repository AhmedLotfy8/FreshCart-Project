import React, { useEffect, useState } from 'react'
import Style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout({pros}) {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}
