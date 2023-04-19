import React, { useEffect, useState } from 'react'
import Img1 from "../../assets/img1.png"
import Img2 from "../../assets/img2.png"
import Img3 from "../../assets/img3.png"
import Img4 from "../../assets/img4.png"
import axios from 'axios'
import baseURL from '../../http'

const Hero = () => {
    const [heroData, setHeroData] = useState({})
    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const res = await axios.get(baseURL + '/hero')
                console.log(res.data)
                setHeroData(...res.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchHeroData()
    },[])

  return (
    <div className='position-relative'>
    <div class="container hero">
        <div class="row pb-5 pe-lg-0 pt-lg-5 align-items-center">
            <div class="col-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold text-body-emphasis">{heroData.boldTitle} <span className='fw-normal'>{heroData.title}</span></h1>
                <p class="lead fw-normal pe-5">{heroData.subTitle}</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 text-white">{heroData.buttonText}</button>
                </div>
            </div>
            <div class="img-container bg-primary">
                <img class="position-absolute img1 " src={Img1} alt="" />
                <img class="position-absolute img2" src={Img2} alt="" />
                <img class="position-absolute img3" src={Img3} alt="" />
                <img class="position-absolute img4" src={Img4} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero