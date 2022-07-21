import React, { useState } from 'react'

export const ContactPage = () => {

  const [data, setData] = useState({
    fullName: "",
    email: '',
    phone: '',
    // address: '',
    description: '',
  })

  const InputChange = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullName}, My phone number is ${data.phone}, My email address is ${data.email} and Description is ${data.description}`)
  };

  return (
    <div className="col-md-5 col-sm-8 col-10 mx-auto">
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="validationCustom01" className="form-label">full name</label>
          <input name='fullName' value={data.fullName} onChange={InputChange} type="text" className="form-control" id="validationCustom01" placeholder="Roshan Sharma" required />
        </div>
        <div className="mb-3">
          <label htmlFor="validationCustom01" className="form-label">Email address</label>
          <input name='email' value={data.email} onChange={InputChange} type="email" className="form-control" id="validationCustom01" placeholder="name@example.com" required />
        </div>
        <div className="mb-3">
          <label htmlFor="validationCustom02" className="form-label">Phone Number</label>
          <input name='phone' value={data.phone} onChange={InputChange} type="number" step="10" className="form-control" id="validationCustom02" placeholder="+9178XXXXXX08" required />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="validationCustom03" className="form-label">Address</label>
          <input name='address' value={data.address} onChange={InputChange} type="address" className="form-control" id="validationCustom03" placeholder="e.g-001/02, sultanpur" required />
        </div> */}
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
          <textarea name='description' value={data.description} onChange={InputChange} className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='type here...'></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-outline-primary" type="submit">Submit form</button>
        </div>
      </form>
    </div>
  )
}
