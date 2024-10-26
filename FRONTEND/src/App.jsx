import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import {Toaster} from "react-hot-toast"
import './App.css'

function App() {

  return (
    <>
    <Outlet>
    </Outlet>
    <Toaster></Toaster>

    </>
  )
}

export default App
