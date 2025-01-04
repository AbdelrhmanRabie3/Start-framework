import React from 'react'
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

export default function App() {
 let router= createBrowserRouter([{path:'/Start-framework/',element:<Layout/>,children:[{
  path:'',element:<Home/>},
  {path:'About',element:<About/>},
  {path:'Portfolio',element:<Portfolio/>},
  {path:'Contact',element:<Contact/>}]

  }])
  return <>
 <RouterProvider router={router}/>
 

  </>
}
