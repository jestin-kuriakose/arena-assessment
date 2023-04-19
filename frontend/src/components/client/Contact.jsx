import React, { useRef, useState } from 'react'
import Line from '../../assets/line.png'
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef()
    const [error, setError] = useState("")
    const [done, setDone] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSend = (e) => {
        e.preventDefault()
        console.log(formRef.current)
        emailjs.sendForm('service_jjia23g', 'template_8ytoy34', formRef.current, 'uHlnrlooyBC2Q_FV_')
        .then((result) => {
            console.log(result.text);
            setDone(true);
          }, (error) => {
            console.log(error.text);
            setDone(false)
            setError(error.text)
        });
    }
  return (
    <div className='contact-section py-5'>
        <div className="container py-5">
            <h3 className='text-uppercase'>GET IN TOUCH <img src={Line} alt="" /></h3>
            <h2>Interested To Know More?</h2>
            <form ref={formRef} action="" className="">
                <div className='row g-3'>
                    <div className="col-sm-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control p-3" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email" className="form-control p-3" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="" className="form-label">Phone Number</label>
                        <input type="text" className="form-control p-3" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="" className="form-label">Investment Amount</label>
                        <select className='form-select p-3' name="amount" id="amount">
                            <option value="1">100,000 EUR</option>
                            <option value="5">500,000 EUR</option>
                            <option value="10">1,000,000 EUR</option>
                            <option value="25">2,500,000 EUR</option>
                            <option value="50">5,000,000 EUR</option>
                        </select>
                    </div>
                    <div className="col-sm-12">
                        <label htmlFor="" className="form-label">Message</label>
                        <textarea className='form-control' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="col-sm-6">
                        {isLoading ?
                        <button class="btn btn-primary w-100 btn-xl text-white" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Sending...
                        </button>:
                        <button onClick={handleSend} className='btn btn-primary w-100 btn-xl text-white'>Submit</button>}
                    </div>

                    {done && <div class="alert alert-primary" role="alert">
                        Message sent successfully!
                    </div>} 
                    {error != "" &&<div class="alert alert-danger" role="alert">
                        {error}
                    </div>}
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact