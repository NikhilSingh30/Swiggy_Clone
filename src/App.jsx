
import './App.css'
import Header from '../components/Header'
import Body from '../components/Body'
import { Outlet } from 'react-router-dom'

import {Provider} from "react-redux"
import appStore from '../utils/appStore'


function App() {
  

  return (
   <div >
    <Provider store={appStore}>
      <Header />
      <Outlet />
      </Provider>
   </div>
  )
}

export default App
