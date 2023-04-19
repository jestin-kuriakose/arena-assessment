import React, { useEffect, useState } from 'react'
import baseURL from "../../http.js"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const HeaderEdit = () => {
    const [headerData, setHeaderData] = useState({})
    const [editedHeaderData, setEditedHeaderData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [alert, setAlert] = useState("")
    const [error, setError] = useState(false)
    const [uploadedFile, setUploadedFile] = useState(null)
    const [fileName, setFileName] = useState()
    const [fileUrl, setFileUrl] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchHeaderData = async() => {
            try {
                const res = await axios.get(baseURL + '/header')
                console.log(res.data)
                setHeaderData(...res.data)
            } catch(err) {
                console.log(err)
            }

        }
        fetchHeaderData()
    }, [])

    const handleUpload = (e) => {
        const file = e.target.files[0]
        const fname = e.target.files[0].name
        setUploadedFile(file)
        setFileName(fname)
      }

    const handleSave = async(e) => {
        e.preventDefault()

        // const formData = new FormData()
        // if(uploadedFile) {
        //   formData.append("file", uploadedFile)
        //   formData.append("fileName", fileName)
        // }
    // console.log(formData)
    // formData.append("headerTitle1", editedHeaderData.headerTitle1)
        // for (let key in editedHeaderData) {
        //     console.log(key)
        //     console.log(editedHeaderData[key])
        //     formData.append(key, editedHeaderData[key]);
        // }

        // console.log(formData)

        setIsLoading(true)
        setError(false)
        setAlert("")
        try {
            const res = await axios.patch(baseURL + '/header', editedHeaderData)
            console.log(res.data)
            setIsLoading(false)
            setAlert("Saved successfully !!")
        } catch(err) {
            console.log(err)
            setIsLoading(false)
            setError(true)
            setAlert(err.message + " . Please try again")
        }
    }

  return (
    <div className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
        <h1 className='text-center py-2'>Header</h1>

        {/* Alert */}
        {alert !== "" &&
        <div className={error ? "alert alert-dismissible fade show alert-danger" : "alert alert-dismissible fade show alert-primary"} role="alert">
            <strong>{alert}</strong> 
            {!error && <p>checkout the website for the new changes <Link to={'/'}>View</Link></p>}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}

        {/* Form to edit header info */}
        <form action="" className="form-control">
            <div>
                <label htmlFor="" className="form-label">Logo</label>
                <input type="file" onChange={handleUpload} className="form-control" />
            </div>
            <div className='row'>
                <div className="col-6">
                    <label htmlFor="" className="form-label">Header 1 Title</label>
                    <input type="text" className="form-control" defaultValue={headerData.headerTitle1} onChange={(e)=> setEditedHeaderData((prev) => ({...prev, headerTitle1: e.target.value}))}/>
                </div>
                <div className="col-6">
                    <label htmlFor="" className="form-label">Header 1 Link</label>
                    <input type="text" className="form-control" defaultValue={headerData.headerTitle1Link} onChange={(e)=> setEditedHeaderData((prev) => ({...prev, headerTitle1Link: e.target.value}))} />
                </div>
            </div>
            <div className='row'>
                <div className="col-6">
                    <label htmlFor="" className="form-label">Header 2 Title</label>
                    <input type="text" className="form-control" defaultValue={headerData.headerTitle2} onChange={(e)=> setEditedHeaderData((prev) => ({...prev, headerTitle2: e.target.value}))} />
                </div>
                <div className="col-6">
                    <label htmlFor="" className="form-label">Header 2 Link</label>
                    <input type="text" className="form-control" defaultValue={headerData.headerTitle2Link} onChange={(e)=> setEditedHeaderData((prev) => ({...prev, headerTitle2Link: e.target.value}))} />
                </div>
            </div>
            <div className='row'>
                <div className="col-6">
                    <label htmlFor="" className="form-label">Header 3 Title</label>
                    <input type="text" className="form-control" defaultValue={headerData.headerTitle3} onChange={(e)=> setEditedHeaderData((prev) => ({...prev, headerTitle3: e.target.value}))} />
                </div>
                <div className="col-6">
                    <label htmlFor="" className="form-label">Header 3 Link</label>
                    <input type="text" className="form-control" defaultValue={headerData.headerTitle3Link} onChange={(e)=> setEditedHeaderData((prev) => ({...prev, headerTitle3Link: e.target.value}))} />
                </div>
            </div>
            <div className='row'>
                <div className="col-6">
                    <label htmlFor="" className="form-label">Header 4 Title</label>
                    <input type="text" className="form-control" defaultValue={headerData.headerTitle4} onChange={(e)=> setEditedHeaderData((prev) => ({...prev, headerTitle4: e.target.value}))} />
                </div>
                <div className="col-6">
                    <label htmlFor="" className="form-label">Header 4 Link</label>
                    <input type="text" className="form-control" defaultValue={headerData.headerTitle4Link} onChange={(e)=> setEditedHeaderData((prev) => ({...prev, headerTitle4Link: e.target.value}))} />
                </div>
            </div>
            <div className='row'>
                <div className="col-6">
                    <label htmlFor="" className="form-label">Button Title</label>
                    <input type="text" className="form-control" defaultValue={headerData.headerTitleBold} onChange={(e)=> setEditedHeaderData((prev) => ({...prev, headerTitleBold: e.target.value}))} />
                </div>
                <div className="col-6">
                    <label htmlFor="" className="form-label">Button Link</label>
                    <input type="text" className="form-control" defaultValue={headerData.headerTitleBoldLink} onChange={(e)=> setEditedHeaderData((prev) => ({...prev, headerTitleBoldLink: e.target.value}))} />
                </div>
            </div>
            <div className='mt-3'>
                {isLoading ? 
                    <button class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Saving...
                    </button>:
                    <button onClick={handleSave} type='submit' className="btn btn-primary me-2 text-white">Save Changes</button>}

                <Link to={'/admin'}>
                    <button className="btn btn-danger">Cancel</button>
                </Link>
            </div>
        </form>
    </div>
  )
}

export default HeaderEdit