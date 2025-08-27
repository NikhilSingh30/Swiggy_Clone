
import './App.css'
import Header from '../components/Header'
import {Toaster} from "react-hot-toast"
import { Outlet } from 'react-router-dom'

import {Provider} from "react-redux"
import appStore from '../utils/appStore'


function App() {
  

  return (
   <div >
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Toaster position="top-center" reverseOrder={false} />
      </Provider>
   </div>
  )
}

export default App
