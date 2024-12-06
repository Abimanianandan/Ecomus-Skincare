import React from 'react'
import '../banner/Banner.css'

const Banner = () => {
  return (

<div className="card text-bg-dark mt-4">
<img
  src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_b1.jpg?v=1706156130&width=1800"
  className="card-img w-100"
  alt="Silk Blouses and Shirts"
/>
<div
  className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center"
>
  <p className="fw-bold text-white">ULTRA PREMIUM SILK</p>
  <h2 className="col-12 fw-normal fs-1 text-white">Silk Blouses Shirts</h2>
  <p className="text-white mt-4">
    Shop our luxury silk button-up blouses made with ultra-soft, washable silk.
  </p>
  <button className="btn mt-4 p-2 text-dark flash-button" style={{backgroundColor:"white",width:"200px"}}>Shop Collection</button>
</div>
</div>
  )
}

export default Banner