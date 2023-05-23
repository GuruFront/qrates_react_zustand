import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Main from './Main'
import About from '../modules/About/About'
import Catalog from '../modules/Catalog/Catalog'
import NotFound from './NotFound/NotFound'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './Main/style.scss'
import useMenuStore from '../store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/catalog',
    element: <Catalog/>
  },
  {
    path: '*',
    element: <NotFound/>
  },
]);

const Pages = () => {
  const menuStatus =  useMenuStore(state => state.menuStatus)
  const setMenuStatus =  useMenuStore(state => state.setMenuStatus)

  return (
    <>
      <Header onMenuOpen={setMenuStatus} menuStatus={menuStatus}/>
      <RouterProvider router={router} />
    </>
  )
}

export default Pages
