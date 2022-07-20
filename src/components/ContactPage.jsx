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
    alert(`My name is ${<strong>{data.fullName}</strong>}, My phone number is ${<strong>{data.phone}</strong>}, My email address is ${<strong>{data.email}</strong>} and Description is ${<strong>{data.description}</strong>}`)
  };

  return (
    <div className="col-5 mx-auto">
      <form onSubmit={formSubmit}>
        <div class="mb-3">
          <label for="validationCustom01" class="form-label">full name</label>
          <input name='fullName' value={data.fullName} onChange={InputChange} type="text" class="form-control" id="validationCustom01" placeholder="Roshan Sharma" required />
        </div>
        <div class="mb-3">
          <label for="validationCustom01" class="form-label">Email address</label>
          <input name='email' value={data.email} onChange={InputChange} type="email" class="form-control" id="validationCustom01" placeholder="name@example.com" required />
        </div>
        <div class="mb-3">
          <label for="validationCustom02" class="form-label">Phone Number</label>
          <input name='phone' value={data.phone} onChange={InputChange} type="number" class="form-control" id="validationCustom02" placeholder="+9178XXXXXX08" required />
        </div>
        {/* <div class="mb-3">
          <label for="validationCustom03" class="form-label">Address</label>
          <input name='address' value={data.address} onChange={InputChange} type="address" class="form-control" id="validationCustom03" placeholder="e.g-001/02, sultanpur" required />
        </div> */}
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Description</label>
          <textarea name='description' value={data.description} onChange={InputChange} class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='type here...'></textarea>
        </div>
        <div class="col-12">
          <button class="btn btn-outline-primary" type="submit">Submit form</button>
        </div>
      </form>
    </div>
  )
}
