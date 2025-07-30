import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import About from "../components/About"
import Contact from "../components/Contact.jsx"
import Error from "../components/Error.jsx"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Body from '../components/Body'
import ResMenu from '../components/ResMenu.jsx'
import { lazy, Suspense } from 'react' 
import Simer from '../components/Simer.jsx'
import Cart from '../components/Cart.jsx'

const About = lazy(()=>import("../components/About"))
const appLayout = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
      path : "/",
      element : <Body />
      },
      {
      path : "/about",
      element :<Suspense fallback={<Simer/>}>
        <About />
      </Suspense>
      },
      {
      path : "/contact",
      element : <Contact/>
      },
      {
        path : "/restaurants/:resid",
        element : <ResMenu />
      },
      {
        path : "/cart",
        element : <Cart />
      }
    ],
    errorElement : <Error />
  }
])


createRoot(document.getElementById('root')).render(

    <RouterProvider router={appLayout}/>
 
)







