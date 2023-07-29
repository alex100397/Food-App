import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { appRouter } from './App'
import { RouterProvider } from 'react-router-dom'
// import About from './Components/About'
// import Body from './Components/Body'
// import Contact from './Components/Contact'
// import Error from './Components/Error'
// import RestaurantMenu from './Components/RestaurantMenu'
// import Shimmer from './Components/Shimmer'
// import Grocery from "./Components/Grocery";



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />;
  </React.StrictMode>
)
