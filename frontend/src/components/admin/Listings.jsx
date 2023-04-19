import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Listing from './Listing'
import axios from 'axios'
import baseURL from '../../http'

const Listings = () => {
    const [listings, setListings] = useState([])
    useEffect(() => {
        const fetchListings = async() => {
            try {
                const res = await axios.get(baseURL + '/listing')
                setListings(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchListings()
    }, [])
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

                <div className="d-flex mt- align-items-center">
                    <h2 className='fw-normal'>Listings</h2>
                    <Link to={'/newListing'} className="btn btn-outline-primary btn-sm ms-3 h-75">Add a New Listing</Link>
                </div>

                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Sub Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">On plan ?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listings?.map((listing) => (
                            <Listing listing={listing}/>
                        ))}
                    </tbody>
                    
                    </table>

                </div>
                </main>
            </div>
        </div>
    </>
  )
}

export default Listings