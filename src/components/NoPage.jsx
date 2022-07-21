import React from 'react'
import { NavLink } from "react-router-dom";


export const NoPage = () => {
  return (
    <div className="text-center">
      <h1 className='text-slate-500 mb-3'>Oops! No page Found...</h1>
      <NavLink to="/">
        Go to Home &rarr;
      </NavLink>
    </div>
  )
}
