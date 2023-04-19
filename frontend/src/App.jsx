import './App.css'
import './scss/main.css'
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Admin from './pages/Admin'
import AdminDashboard from './components/admin/AdminDashboard'
import HeaderEdit from './components/admin/HeaderEdit'
import HomePageEdit from './components/admin/HomePageEdit'
import Listings from './components/admin/Listings'
import ListingEdit from './components/admin/ListingEdit'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/admin",
      element: <Admin/>,
      children: [
      {
        path: "/admin",
        element: <AdminDashboard/>
      },
      {
        path: "/admin/header",
        element: <HeaderEdit/>
      },
      {
        path: "/admin/page/home",
        element: <HomePageEdit/>
      },
      {
        path: "/admin/listings",
        element: <Listings/>
      },
      {
        path: "/admin/listing/:id",
        element: <ListingEdit/>
      }
    ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
