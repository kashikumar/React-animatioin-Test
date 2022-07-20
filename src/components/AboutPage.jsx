import React from 'react'
import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <section>
            <div className="container-fluid">
                <div className="row w-11/12 mx-auto">
                    <div className="col-md-6 flex flex-col justify-center mt-5">
                        <div className="h1">
                            Welcome To <span className="text-sky-400">Touchwood</span> About Page
                        </div>
                        <div className="mb-3">We are the team of talented developer making websites.</div>
                        <div>
                            <Link to="/contact" className="btn btn-outline-primary rounded-pill">Contact-Us</Link>
                        </div>
                    </div>
                    <div className="col-md-6 flex flex-col justify-center mt-5">
                        <img src="/images/about-img.svg" className='img-fluid w-full animated' alt="landing-hero img" />
                    </div>
                </div>
            </div>
        </section>
  )
}
