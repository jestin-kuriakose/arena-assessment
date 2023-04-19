import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow admin-navbar">
            <Link to={'/admin'} className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 navbar-logo" href="#">Lorem Ipsum</Link>
            <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                <a className="nav-link px-3" type='button' data-bs-toggle="modal" data-bs-target="#signOutModal">Sign out</a>
                </div>
            </div>
        </header>

        {/* Modal Component */}
        <div className="modal fade" id="signOutModal" tabIndex="-1" role="dialog" aria-labelledby="saveModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="saveModalLongTitle">Sign Out</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    Are you sure you want to sign out ?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    <button type="button" className="btn btn-danger">Sign Out</button>
                </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default AdminHeader