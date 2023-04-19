import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <>
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to={'/admin'} className="nav-link fw-bold fs-5" aria-current="page" href="#">
                        <span data-feather="home" className="align-middle"></span>
                        Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/admin/header'} className="nav-link fw-normal ms-2" href="#">
                        <span data-feather="file" className="align-text-bottom"></span>
                        Header
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/admin'} className="nav-link fw-normal ms-2" href="#">
                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                        Footer
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/admin/listings'} className="nav-link fw-bold fs-5 my-5" href="#">
                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                        Listings
                        </Link>
                    </li>


                </ul>
                <ul className="nav flex-column">
                    <li className="nav-item"><Link to={'/admin'} className="nav-link fw-bold fs-5" href="#">
                        <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                        Pages
                        </Link>
                    </li>
                    <li className="nav-item"><Link to={'/admin/page/home'} className="nav-link fw-normal ms-2" href="#">
                        <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                        Home
                        </Link>
                    </li>
                    <li className="nav-item"><Link to={'/admin'} className="nav-link fw-normal ms-2" href="#">
                        <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                        Services
                        </Link>
                    </li>
                    <li className="nav-item"><Link to={'/admin'} className="nav-link fw-normal ms-2" href="#">
                        <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                        Contact
                        </Link>
                    </li>
                </ul>
            </div>

            </nav>
    </>
  )
}


export default AdminSidebar