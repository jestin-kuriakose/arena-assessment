import React, { useEffect } from 'react'
import HeroEdit from './HeroEdit'
import PropertyEdit from './PropertyEdit'
import ContactEdit from './ContactEdit'

const HomePageEdit = () => {

  return (
    <div className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
      <h1 className='text-center py-2'>Home Page</h1>
      <div class="accordion" id="accordionExample">
        <HeroEdit/>
        {/* <PropertyEdit/>
        <ContactEdit/> */}
      </div>
  </div>
  )
}

export default HomePageEdit