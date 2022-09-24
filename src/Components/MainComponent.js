import React from "react";
import "../App.css";
import { IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { data } from "./data";
import DataTable from "./Table";
import './Responsive.css'

export const MainComponent = () => {
  // document.body.style.overflow = "hidden"
  return (
    <>
      <div className="main_component">
        <div className="filter-table">
          <div className="filter-table-head">

            <span className="filter-table-head-data">User Stories List</span>
            <IconButton aria-label="delete" color="primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="btn-plus-icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
            </IconButton>
          </div>
          <hr className="hr" />
            
            <div className="search-main-component">
          <input type="text" className="search-input" placeholder="Search/Filter"  />
          <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" enable-background="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24 M24,24H0" fill="none"/><path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/><path d="M0,0h24v24H0V0z" fill="none"/></g></svg>
          </div>
          <hr className="hr" />
          <div className="search-data-main-div">
            <div className="small-search-data-main-div">
              {data.map((item,idx)=>{
 return(<>    <div id={idx} className="small-search-data">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"/><g><path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"/><path d="M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"/><path d="M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"/></g></g></g></svg>
              <span className="des-name">{item.Name}</span>
          
              <Button variant="contained"  className="review-btn">Done</Button>
            
              <span className="btn-space">
              <Button variant="outlined" className="review-btn1">Trace</Button>
              </span>
              </div>
              <div className="search-disc">
              <span className="search-func-description">{item.Description.length > 70 ?item.Description.substring(0,item.Description.length - 160)+"...": item.Description}</span>
              </div>
              <hr className="hr-data" />
              </>)
})}
            </div>
            
          </div>
        </div>
        <div className="verticle"></div>
         <div className="main-table">
          <div className="main-table-heading">
            <span className="main-table-head">Summary:WAT-936</span>
          </div>
          <div className="main-component-text">
          <div className="main-table-text-case">
            <span className="text-head">Test Cases</span>
              <div className="main-small-container-data">
            <div className="main-div-table">
                <p className="total-text-data">Total</p>
                <p className="total-text-value">03</p>
              </div>
              <div className="verticle1"></div>

              <div className="main-div-table">
                <p className="total-text-data">Passed</p>
                <p className="total-text-value ">00</p>
              </div>
              <div className="verticle1"></div>

              <div className="main-div-table">
                <p className="total-text-data">Failed</p>
                <p className="total-text-value failed">01</p>
              </div>
              </div>
          </div>

<div className="main-table-text-case text-packs">
            <span className="text-head">Test Packs </span>
              <div className="main-small-container-data">
            <div className="main-div-table">
                <p className="total-text-data">Total</p>
                <p className="total-text-value">03</p>
              </div>
              <div className="verticle1"></div>

              <div className="main-div-table">
                <p className="total-text-data">Passed</p>
                <p className="total-text-value ">00</p>
              </div>
              <div className="verticle1"></div>

              <div className="main-div-table">
                <p className="total-text-data">Failed</p>
                <p className="total-text-value failed">01</p>
              </div>
              </div>
          </div>
          </div>
          <div className="main-component-navbar">
            <div className="main-navbar-left-div">
            <Button variant="contained" className="test-cases-btn">Test Cases</Button>
            <Button variant="contained" className="test-cases-btn test-cases-btn1 ">Test Packs</Button>
            </div>
            <div className="main-navbar-right-div">
            <IconButton aria-label="delete" color="primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="table-down-icons" height="14px" viewBox="0 0 24 24" width="14px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
            </IconButton>

            <svg xmlns="http://www.w3.org/2000/svg" className=" table-down-icons1" enable-background="new 0 0 24 24"  height="24px" viewBox="0 0 24 24" width="24px" fill="grey"><g><rect fill="none" height="24" width="24"/></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z"/></g></svg>
            
            <svg xmlns="http://www.w3.org/2000/svg" className=" table-down-icons1" enable-background="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="24px" fill="grey"><rect fill="none" height="24" width="24"/><polygon points="21,11 21,3 13,3 16.29,6.29 6.29,16.29 3,13 3,21 11,21 7.71,17.71 17.71,7.71"/></svg>

            </div>
          </div>
          <div className="main-component-table-main-component">
            <DataTable />
          </div>
        </div> 
      </div>







      {/* ------------------------------- small screen   --------------------------- */}
      <div className="main_component small-main-container">
        <div className="filter-table small-filter-table">
          <div className="filter-table-head">

            <span className="filter-table-head-data">User Stories List</span>
            <IconButton aria-label="delete" color="primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="btn-plus-icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
            </IconButton>
          </div>
          <hr className="hr" />
            
            <div className="search-main-component">
          <input type="text" className="search-input" placeholder="Search/Filter"  />
          <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" enable-background="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24 M24,24H0" fill="none"/><path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/><path d="M0,0h24v24H0V0z" fill="none"/></g></svg>
          </div>
          <hr className="hr" />
          <div className="search-data-main-div small-search-data-main-div">
            <div className="small-search-data-main-div">
              {data.map((item,idx)=>{
 return(<>    <div id={idx} className="small-search-data">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"/><g><path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"/><path d="M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"/><path d="M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"/></g></g></g></svg>
              <span className="des-name">{item.Name}</span>
          
              <Button variant="contained "  className="review-btn small-review-btn">{item.button}</Button>
            
              <span className="btn-space">
              <Button variant="outlined" className="review-btn1">Trace</Button>
              </span>
              </div>
              <div className="search-disc">
              <span className="search-func-description small-desc">{item.Description}</span>
              </div>
              <hr className="hr-data" />
              </>)
})}
            </div>
            
          </div>
        </div>
        <div className="verticle"></div>
        <div className="main-table small-tab">
          <div className="main-table-heading">
            <span className="main-table-head">Summary:WAT-936</span>
          </div>
          <div className="main-component-text">
          <div className="main-table-text-case">
            <span className="text-head">Test Cases</span>
              <div className="main-small-container-data">
            <div className="main-div-table">
                <p className="total-text-data">Total</p>
                <p className="total-text-value">03</p>
              </div>
              <div className="verticle1"></div>

              <div className="main-div-table">
                <p className="total-text-data">Passed</p>
                <p className="total-text-value ">00</p>
              </div>
              <div className="verticle1"></div>

              <div className="main-div-table">
                <p className="total-text-data">Failed</p>
                <p className="total-text-value failed">01</p>
              </div>
              </div>
          </div>

<div className="main-table-text-case text-packs">
            <span className="text-head">Test Packs </span>
              <div className="main-small-container-data">
            <div className="main-div-table">
                <p className="total-text-data">Total</p>
                <p className="total-text-value">03</p>
              </div>
              <div className="verticle1"></div>

              <div className="main-div-table">
                <p className="total-text-data">Passed</p>
                <p className="total-text-value ">00</p>
              </div>
              <div className="verticle1"></div>

              <div className="main-div-table">
                <p className="total-text-data">Failed</p>
                <p className="total-text-value failed">01</p>
              </div>
              </div>
          </div>
          </div>
          <div className="main-component-navbar">
            <div className="main-navbar-left-div">
            <Button variant="contained" className="test-cases-btn">Test Cases</Button>
            <Button variant="contained" className="test-cases-btn test-cases-btn1 ">Test Packs</Button>
            </div>
            <div className="main-navbar-right-div">
            <IconButton aria-label="delete" color="primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="table-down-icons" height="14px" viewBox="0 0 24 24" width="14px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
            </IconButton>

            <svg xmlns="http://www.w3.org/2000/svg" className=" table-down-icons1" enable-background="new 0 0 24 24"  height="24px" viewBox="0 0 24 24" width="24px" fill="grey"><g><rect fill="none" height="24" width="24"/></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z"/></g></svg>
            
            <svg xmlns="http://www.w3.org/2000/svg" className=" table-down-icons1" enable-background="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="24px" fill="grey"><rect fill="none" height="24" width="24"/><polygon points="21,11 21,3 13,3 16.29,6.29 6.29,16.29 3,13 3,21 11,21 7.71,17.71 17.71,7.71"/></svg>

            </div>
          </div>
          <div className="main-component-table-main-component">
            <DataTable />
          </div>
        </div>
      </div>
    </>
  );
};

