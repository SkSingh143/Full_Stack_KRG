import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route ,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout/Layout'
import Register from './pages/Register.jsx'
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='register' element={<Register/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
