import React from 'react'
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row w-11/12 mx-auto">
                    <div className="col-md-6 order-md-1 order-2 flex flex-col justify-center mt-5">
                        <div className="h1">
                            Grow your company with <span className="text-sky-400">Touchwood</span>
                        </div>
                        <div className="mb-3">We are the team of talented developer making websites.</div>
                        <div>
                            <Link to="/contact" className="btn btn-outline-primary rounded-pill">Get Started</Link>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-2 order-1 flex flex-col justify-center mt-5">
                        <img src="/images/home_bg.png" className='img-fluid w-full animated' alt="landing-hero img" />
                    </div>
                </div>
            </div>
        </section>
    )
}
