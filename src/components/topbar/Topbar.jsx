import React, { useState } from 'react'
import Products from '../products/Products'
import "./Topbar.css"

const Topbar = () => {
  const[products,setProducts] = useState(true)
  const handleChange1 = () =>{
    setProducts(true)
  }
  const handleChange2 = () =>{
    setProducts(false)
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg mt-5">
    <div className="container-fluid justify-content-center">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <a className={products ? "nav-link active text-dark fs-2 fw-normal" :  "nav-link text-dark fs-2 fw-light"} onClick={handleChange1}>
            Essentials
          </a>
        </li>
        <li className="nav-item ms-5">
          <a className={products ? "nav-link text-dark fs-2 fw-light" : "nav-link active text-dark fs-2 fw-normal"}  onClick={handleChange2}>
            Gift Sets
          </a>
        </li>     
      </ul>
    </div>
  </nav>
  <Products products={products} setProducts={setProducts}/>
  </>
  )
}

export default Topbar