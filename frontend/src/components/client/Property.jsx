import React, { useEffect, useState } from 'react'
import Line from '../../assets/line.png'
import Listings from './Listings'
import ArrowDown from '../../assets/arrow-down.png'
import ArrowUp from '../../assets/arrow-up.png'
import axios from 'axios'
import baseURL from '../../http'
import Pro1 from '../../assets/pro1.png'
import Pro2 from '../../assets/pro2.png'
import Pro3 from '../../assets/pro3.png'

const Property = () => {
    const [listings, setListings] = useState([])
    const [count, setCount] = useState(3)
    useEffect(() => {
        const fetchListings = async() => {
            try {
                const res = await axios.get(baseURL + '/listing')
                console.log(res.data)
                setListings(res.data)
            } catch(err) {
                console.log(err.message)
            }
        }
        fetchListings()
    }, [])
    console.log(count)
  return (
    <div className='property py-5'>
        <div className="container py-5">
            <h3 className='text-uppercase'>BOOK NOW<img src={Line} alt="" /></h3>
            <h2>Our Properties</h2>
            <p>Choose from our spectacular range of iconic properties in Dubai starting from AED 1,000,000 only.</p>
            <p className='text-primary fw-bold'>20% Guaranteed Rental Income Per Annum*</p>

            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 gap-3 justify-content-between listing-section mt-5'>
                {listings?.map((listing, index) => (
                    index < count && 
                        <div className="col col-md-6 col-lg-auto rounded p-0 listing bg-white">
                            {/* Carousal */}
                            {/* <div className="col"> */}
                                <div id={"myCarousel"+index} class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target={"#myCarousel"+index} data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target={"#myCarousel"+index} data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target={"#myCarousel"+index} data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target={"#myCarousel"+index} data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    </div>

                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img className='d-block w-100' src={Pro1} alt="" />
                                        </div>
                                        {/* <div class="carousel-item">
                                            <img className='d-block w-100' src={Pro2} alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img className='d-block w-100' src={Pro3} alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img className='d-block w-100' src={Pro2} alt="" />
                                        </div> */}
                                    </div>
                                </div>
                            {/* </div> */}

                            <div className='listing-body p-4 card-body'>
                                <h3 className='listing-title'>{listing?.title}</h3>
                                <h4 className='listing-subtitle'>{listing?.subTitle}</h4>
                                <div className="d-flex justify-content-between">
                                    <h4 className='listing-price'>AED <span className='listing-amount'>{listing?.price}</span></h4>
                                    <p className='listing-plan'>{listing?.onPlan ? "On plan" : "Off plan"}</p>
                                </div>
                                <div className="d-flex info justify-content-around rounded mt-3">
                                    <h4 className='fw-bold returns'>Quarterly <p className='fw-light'>paid returns</p></h4>
                                    <h4 className='fw-bold yield'>20% <p className='fw-light'>annual yield</p></h4>
                                </div>
                                <div className="text-center mt-3">
                                    <button className='btn btn-primary btn-lg text-white w-75 py-3'>Enquire Now</button>
                                </div>
                                
                            </div>
                        </div>
                ))}
            </div>
            <div className='d-flex align-items-center justify-content-center mt-5 load-more'>
                {count == 3 ? <a onClick={()=> setCount((prev) => prev + 3)} className='text-center'>Load more <img className='ms-2' src={ArrowDown}/></a> :
                <a onClick={()=> setCount((prev) => prev - 3)} className='text-center'>Load less <img className='ms-2' src={ArrowUp}/></a>}
            </div>
        </div>
    </div>
  )
}

export default Property