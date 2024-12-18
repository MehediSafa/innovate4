import React from 'react'
import { createBrowserRouter,createRoutesFromElements,RouterProvider, Route } from 'react-router-dom'
import './App.css'; 
import Home from './pages/Home'; 
import Layout from './components/Layout'





function App() {
let router = createBrowserRouter(createRoutesFromElements(
  
  <Route element={<Layout/>}>
      <Route index element={<Home/>}>

      </Route>
  </Route>
))

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
