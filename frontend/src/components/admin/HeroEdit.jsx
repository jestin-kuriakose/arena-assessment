import axios from 'axios'
import React, { useEffect, useState } from 'react'
import baseURL from '../../http'
import { Link } from 'react-router-dom'

const HeroEdit = () => {
    const [heroData, setHeroData] = useState({})
    const [editedHeroData, setEditedHeroData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [alert, setAlert] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchHeroDetails = async() => {
            try {
                const res = await axios.get(baseURL + '/hero')
                console.log(res.data)
                setHeroData(...res.data)
            } catch(err) {
                console.log(err)
            }

        }
        fetchHeroDetails()
    }, [])

    const handleSave = async(e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(false)
        setAlert("")
        try {
            const res = await axios.patch(baseURL + '/hero', editedHeroData)
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
    <div class="accordion-item">

        {/* Alert */}
        {alert !== "" &&
        <div className={error ? "alert alert-dismissible fade show alert-danger" : "alert alert-dismissible fade show alert-primary"} role="alert">
            <strong>{alert}</strong> 
            {!error && <p>checkout the website for the new changes <Link to={'/'}>View</Link></p>}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}

        <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Hero Section
        </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <form action="" className="form-control">
            <div>
                <label htmlFor="" className="form-label">Bold Title</label>
                <input type="text" className="form-control" defaultValue={heroData.boldTitle} onChange={(e) => setEditedHeroData((prev) => ({...prev, boldTitle: e.target.value}))}/>
            </div>
            <div>
                <label htmlFor="" className="form-label">Title</label>
                <input type="text" className="form-control" defaultValue={heroData.title} onChange={(e) => setEditedHeroData((prev) => ({...prev, title: e.target.value}))}/>
            </div>
            <div>
                <label htmlFor="" className="form-label">Sub-title</label>
                <input type="text" className="form-control" defaultValue={heroData.subTitle} onChange={(e) => setEditedHeroData((prev) => ({...prev, subTitle: e.target.value}))}/>
            </div>
            <div>
                <label htmlFor="" className="form-label">Button text</label>
                <input type="text" className="form-control" defaultValue={heroData.buttonText} onChange={(e) => setEditedHeroData((prev) => ({...prev, buttonText: e.target.value}))}/>
                <label htmlFor="" className="form-label">Button link</label>
                <input type="text" className="form-control" defaultValue={heroData.buttonLink} onChange={(e) => setEditedHeroData((prev) => ({...prev, buttonLink: e.target.value}))}/>
            </div>
            <div className="row">
                <div className='col-3'>
                <label htmlFor="" className="form-label">Image 1</label>
                <input type="file" className="form-control" />
                </div>
                <div className='col-3'>
                <label htmlFor="" className="form-label">Image 2</label>
                <input type="file" className="form-control" />
                </div>
                <div className='col-3'>
                <label htmlFor="" className="form-label">Image 3</label>
                <input type="file" className="form-control" />
                </div>
                <div className='col-3'>
                <label htmlFor="" className="form-label">Image 4</label>
                <input type="file" className="form-control" />
                </div>
            </div>
            <div className='mt-3'>
                {isLoading ? 
                    <button class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Saving...
                    </button>:
                    <button onClick={handleSave} type='submit' className="btn btn-primary me-2 text-white">Save Changes</button>}
                
                    <button className="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Cancel</button>
                
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default HeroEdit