import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'




const Routers = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          lazy: () => import('../Pages/Home').then(m => ({ Component: m.default }))
        },
        {
          path: "/about",
          lazy: () => import('../Pages/About').then(m => ({ Component: m.default }))
        },
        {
          path: "/testomonials",
          lazy: () => import('../Pages/Testomonials').then(m => ({ Component: m.default }))
        },
        {
          path: "/contact",
          lazy: () => import('../Pages/Contact').then(m => ({ Component: m.default }))
        },
        {
          path: "/services",
          lazy: () => import('../Pages/Services').then(m => ({ Component: m.default }))
        },
              {
          path: "/pricing",
          lazy: () => import('../Pages/Pricing').then(m => ({ Component: m.default }))
        },
        {
          path : "/ourteam",
          lazy: () => import('../Pages/OurTeam').then(m => ({ Component: m.default }))

        },
        {
          path : "/ourteam/:id",
          lazy: () => import('../OurTeamComponents/Drdetail').then(m => ({ Component: m.default }))

        },
        {
          path: "/cases",
          lazy: () => import('../Pages/Cases').then(m => ({ Component: m.default }))
        },
        {
          path: "/cases/:id",
          lazy: () => import('../GalleryComponents/GalleryCardDetail').then(m => ({ Component: m.default }))
        },
      ],
    },
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default Routers