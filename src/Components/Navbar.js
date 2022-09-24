import React from 'react';
import '../App.css'
import { Badge } from '@material-ui/core';
import './Responsive.css'

export const Navbar = () => {
  return (
    <>
    <div className="navbar_container">
      <div className="navbar_data">
       
       {/* .mid_element */}

        <div className="navbar_icons">
          <div className="header_icon">
        <svg xmlns="http://www.w3.org/2000/svg" className='left-right-icon' enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/></svg>
        </div>
        <div className="header_icon">
        <svg xmlns="http://www.w3.org/2000/svg" className='left-right-icon' enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><rect fill="none" height="34" width="34"/><path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"/></svg>
        </div>

        <div className="navbar_user_heading">
          <span className='navbar_heading_Data'>User Stories</span>
        </div>
        </div>

        <div className="navbar_middle_data">
          <span className='navbar_middle'>Project: <span className='navbar_middle_data'> Pension & Annuity </span> <i class="fa-sharp fa-solid fa-caret-down"></i> </span>
        </div>

        <div className="navbar_last_div">
          <div className="navbar_last_icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
          </div>
          <div className="navbar_last_icon">

          <Badge color="secondary" className='badge-notification notification' badgeContent={2}>
          <svg className='badge-notification' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
          </Badge>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
