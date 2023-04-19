import React from 'react'
import { Link } from 'react-router-dom'

const Listing = ({listing}) => {
  return (
    <>
        <tr>
            <td>{listing.id}</td>
            <td>{listing.title}</td>
            <td>{listing.subTitle}</td>
            <td>{listing.price}</td>
            <td>{listing.onPlan ? "Yes" : "No"}</td>
            <td><Link className='btn btn-primary btn-sm text-white' to={`/admin/listing/${listing.id}`}>Edit</Link><button type='button' data-bs-toggle="modal" data-bs-target="#deleteMemberModal" className='btn btn-danger btn-sm ms-sm-1' to={`/`}>Delete</button></td>
        </tr>
    </>
  )
}

export default Listing