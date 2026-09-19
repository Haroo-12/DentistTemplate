import React from 'react'
import Navbor from './Navbor'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import { BeatLoader } from 'react-spinners'
const MainLayout = () => {
    const navigation = useNavigation()
  const isLoading = navigation.state === "loading"
  return (
    <div>
      <ScrollToTop />
      <Navbor/>

      {isLoading ? (
        <div className="min-h-screen bg-white flex items-center justify-center">
          <p className="text-black font-body text-sm tracking-[0.3em] uppercase">
               <BeatLoader  size={10} color='#6B4226' />

          </p>
        </div>
      ) : (
        <>
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  )
}

export default MainLayout