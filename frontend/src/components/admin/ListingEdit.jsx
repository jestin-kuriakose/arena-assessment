import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import baseURL from '../../http'

const ListingEdit = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[3]
    const [listing, setListing] = useState({})
    const [editedListing, setEditedListing] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [alert, setAlert] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const fetchListings = async() => {
            try {
                const res = await axios.get(baseURL + '/listing')
                console.log(res.data)
                const data = res.data.filter(listing => listing.id == id)
                setListing(...data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchListings()
    }, [])

    const handleSave = async(e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(false)
        setAlert("")
        try {
            const res = await axios.patch(baseURL + `/listing/${id}`, editedListing)
            console.log(res.data)
            setIsLoading(false)
            setAlert("Saved successfully !!")
            navigate('/admin/listings')
        } catch(err) {
            setIsLoading(false)
            setError(true)
            setAlert(err.message + " . Please try again")
            console.log(err)
        }
    }

  return (
    <>
        <div className="container-fluid">

        {/* Alert */}
        {alert !== "" &&
        <div className={error ? "alert alert-dismissible fade show alert-danger" : "alert alert-dismissible fade show alert-primary"} role="alert">
            <strong>{alert}</strong> 
            {!error && <p>checkout the website for the new changes <Link to={'/'}>View</Link></p>}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}

            <div className="row">
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <h3>Edit Listing</h3>
                    <form action="" className="form-control">
                        <div className="col-12">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" defaultValue={listing.title} onChange={(e) => setEditedListing((prev)=> ({...prev, title: e.target.value}))}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="" className="form-label">Sub-title</label>
                            <input type="text" className="form-control" defaultValue={listing.subTitle} onChange={(e) => setEditedListing((prev)=> ({...prev, subTitle: e.target.value}))}/>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <label htmlFor="" className="form-label">Price</label>
                                <input type="text" className="form-control" defaultValue={listing.price} onChange={(e) => setEditedListing((prev)=> ({...prev, price: e.target.value}))}/>
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="" className="form-label">On Plan ?</label>
                                <select className='form-select'>
                                    <option value="yes" className='form-control'>Yes</option>
                                    <option value="no" className='form-control'>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <label htmlFor="" className="form-label">Image 1</label>
                                <input type="file" className="form-control" />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="" className="form-label">Image 1</label>
                                <input type="file" className="form-control" />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="" className="form-label">Image 1</label>
                                <input type="file" className="form-control" />
                            </div>
                            <div className="col-sm-3">
                                <label htmlFor="" className="form-label">Image 1</label>
                                <input type="file" className="form-control" />
                            </div>
                        </div>

                        {isLoading ? 
                        <button class="btn btn-primary text-white mt-3" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Saving...
                        </button>:
                        <button onClick={handleSave} type='submit' className="btn btn-primary text-white mt-3">Save Changes</button>}

                        <Link to={'/admin/listings'}>
                            <button className="btn btn-danger text-white mt-3 ms-3">Cancel</button>
                        </Link>

                    </form>
                </main>
            </div>
        </div>
    </>
  )
}

export default ListingEdit