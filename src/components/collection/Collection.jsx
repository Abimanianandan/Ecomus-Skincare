import React from 'react'
import "../collection/Collection.css"
const Collection = ({product}) => {
  return (

<div className="container mt-5 shadow p-4 mb-5 bg-body-tertiary rounded">
 {
   product == 0 && <div className="card">
    <div className="row g-0">
      <div className="col-md-6 col-sm-12">
        <img
          src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_b3.jpg?v=1706607129&width=1400"
          className="img-fluid collection"
          alt="Organic Ingredients"
          style={{ objectFit: "cover" }}
        />
      </div>
      
      <div className="col-md-6 col-sm-12 bg-dark text-white d-flex">
        <div className="d-flex flex-column justify-content-center align-items-center text-center p-4 w-100">
          <h2 className="fw-normal fs-1 text-white">Organic Ingredients</h2>
          <p className="text-white mt-4">
            Use certified organic ingredients to assure consumers that the product is free
            from synthetic pesticides and fertilizers.
          </p>
          <button
            className="btn mt-4 p-2 text-dark flash-button"
            style={{ backgroundColor: "white", width: "200px" }}
          >
            Shop Collection
          </button>
        </div>
      </div>
    </div>
    </div>
  }
  {
    product == 1 && <div className="card">
    <div className="row g-0">
      <div className="col-md-6 col-sm-12">
        <img
          src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_b4.jpg?v=1706607129&width=1400"
          className="img-fluid collection"
          alt="Organic Ingredients"
          style={{ objectFit: "cover" }}
        />
      </div>
      
      <div className="col-md-6 col-sm-12 bg-dark text-white d-flex">
        <div className="d-flex flex-column justify-content-center align-items-center text-center p-4 w-100">
          <h2 className="fw-normal fs-1 text-white">Our Verified Cruelty-Free</h2>
          <p className="text-white mt-4">       
            Get full-size, verified cruelty-free and vegan products in every box! We work directly with brands to bring you huge discounts.
          </p>
          <button
            className="btn mt-4 p-2 text-dark flash-button"
            style={{ backgroundColor: "white", width: "200px" }}
          >
            Shop Collection
          </button>
        </div>
      </div>
    </div>
    </div>
   }
   {
     product == 2 && <div className="card">
    <div className="row g-0">
      <div className="col-md-6 col-sm-12">
        <img
          src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_b5.jpg?v=1706607129&width=1400"
          className="img-fluid collection"
          alt="Organic Ingredients"
          style={{ objectFit: "cover" }}
        />
      </div>
      
      <div className="col-md-6 col-sm-12 bg-dark text-white d-flex">
        <div className="d-flex flex-column justify-content-center align-items-center text-center p-4 w-100">
          <h2 className="fw-normal fs-1 text-white">Sustainable expansion</h2>
          <p className="text-white mt-4">
            With steadily increasing demand, the authors suggest that a major opportunity exists for environmentally and socially sustainable expansion
          </p>
          <button
            className="btn mt-4 p-2 text-dark flash-button"
            style={{ backgroundColor: "white", width: "200px" }}
          >
            Shop Collection
          </button>
        </div>
      </div>
    </div>
     </div>
   }
</div>


  )
}

export default Collection