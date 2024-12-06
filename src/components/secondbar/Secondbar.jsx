import React, { useState } from 'react'
import "../secondbar/Secondbar.css"
import Collection from '../collection/Collection'

const Secondbar = () => {
    const[product,setProduct] = useState(0)
  const handleChange1 = () =>{
    setProduct(0)
  }
  const handleChange2 = () =>{
    setProduct(1)
  }
  const handleChange3 = () =>{
    setProduct(2)
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg mt-5">
    <div className="container-fluid justify-content-center">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <a className={product == 0 ? "nav-link active text-dark fs-2 fw-bold" :  "nav-link text-dark fs-2 fw-light"} onClick={handleChange1}>
            Organic Ingredients
          </a>
        </li>
        <li className="nav-item ms-5">
          <a className={product == 1 ? "nav-link active text-dark fs-2 fw-bold" : "nav-link text-dark fs-2 fw-light"}  onClick={handleChange2}>
            Cruelty-Free
          </a>
        </li>   
        <li className="nav-item ms-5">
          <a className={product == 2 ? "nav-link active text-dark fs-2 fw-bold" : "nav-link text-dark fs-2 fw-light"}  onClick={handleChange3}>
            Sustainable
          </a>
        </li>     
      </ul>
    </div>
  </nav>
  <Collection product={product}/>
  </>
  )
}

export default Secondbar