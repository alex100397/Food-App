import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Body from './Components/Body';
import About from './Components/About';
import Contact from './Components/Contact';
import RestaurantMenu from './Components/RestaurantMenu';
import Shimmer from './Components/Shimmer';
import { Suspense, lazy } from 'react';
// import Grocery from './Components/Grocery';
import Error from './Components/Error';

const Grocery = lazy(() => import("./Components/Grocery"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={Shimmer}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

function App () {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
