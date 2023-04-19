import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Phone from '../../assets/phone.png'

const Header = ({data}) => {
console.log(data)
  return (
    <nav className='navbar navbar-expand-lg bg-white navbar-cont'>
        <div className="container">
            <div className="navbar-brand col-8 col-sm-4">
                    <img src={Logo} className="img-fluid"/>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse col-4 col-sm-8 justify-content-between bg-white' id="navbarNav">
                <ul className='navbar-nav'>
                    <li className='nav-item'><a href={data.headerTitle1Link} className='nav-link px-2 px-xl-4 fs-6 text-dark link-primary text-uppercase'>{data.headerTitle1}</a></li>
                    <li className='nav-item'><a href={data.headerTitle2Link} className='nav-link px-2 px-xl-4 fs-6 text-dark link-primary text-uppercase'>{data.headerTitle2}</a></li>
                    <li className='nav-item'><a href={data.headerTitle3Link} className='nav-link px-2 px-xl-4 fs-6 text-dark link-primary text-uppercase'>{data.headerTitle3}</a></li>
                    <li className='nav-item'><a href={data.headerTitle4Link} className='nav-link px-2 px-xl-4 fs-6 text-dark link-primary text-uppercase'>{data.headerTitle4}</a></li>
                </ul>
                <button className='btn btn-primary btn-lg py-lg-3 m-3 m-lg-0'>
                    <span className='text-white phone'><img className='me-2' src={Phone} alt="" />{data.headerTitleBold}</span>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Header