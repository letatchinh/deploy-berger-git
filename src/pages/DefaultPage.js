import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function DefaultPage() {
  return (
    <>
          <ToastContainer />
        <Header/>
        <Outlet />
        <Footer/>
    </>
  )
}
