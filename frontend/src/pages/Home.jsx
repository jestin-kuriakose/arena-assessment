import React, { useEffect, useState } from 'react'
import Header from '../components/client/Header'
import Hero from '../components/client/Hero'
import axios from 'axios'
import baseURL from '../http'
import Property from '../components/client/Property'
import Contact from '../components/client/Contact'

const Home = () => {
  const [headerData, setHeaderData] = useState({})
  useEffect(() => {
    const fetchHeaderData = async() => {
      const res = await axios.get(baseURL + "/header")
      setHeaderData(...res.data)
    }
    fetchHeaderData()
  }, [])

  return (
    <>
        <Header data={headerData}/>
        <Hero/>
        <Property/>
        <Contact/>
    </>
  )
}

export default Home