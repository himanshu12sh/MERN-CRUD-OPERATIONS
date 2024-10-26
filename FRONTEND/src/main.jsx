import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import UpdateUser from './components/Update/UpdateUser.jsx'
import User from './components/Getuser/User.jsx'
import AddUser from './components/Adduser/AddUSer.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<User/>
      },
      {
        path:'/addUser',
        element:<AddUser/>
      },
      {
        path:'/updateUser/:id',
        element:<UpdateUser/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
