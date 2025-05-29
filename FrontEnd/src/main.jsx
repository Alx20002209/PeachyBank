import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginForm from './Login.jsx'
import TransactionDetailedView from './TransactionDetailedView.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/login", element:<LoginForm/>},
  {path: "/:id", element: <TransactionDetailedView/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
