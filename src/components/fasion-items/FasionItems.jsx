import React from 'react'
import "../fasion-items/FasionItems.css"

const FasionItems = () => {
  return (
    <div className="container-fluid mt-5">
        <h2 className="d-flex justify-content-center fs-1 fw-normal">Shop Gram</h2>
        <p className="d-flex justify-content-center fw-lighter mt-3 discription">Inspire and let yourself be inspired, from one unique fashion to another .</p>
        <div className="row row-cols-1 row-cols-md-5 g-5 justify-content-center mt-3">
          <div className="col-md-2">
            <div className="card item ">
              <div className="image-container dress">
                <img
                  src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincate_ins1.jpg?v=1706610487&width=400"
                  alt="fav1"
                  className="w-100 fasion"
                />
              </div>
             
            </div>
          </div>

          <div className="col-md-2">
            <div className="card item ">
              <div className="image-container dress">
                <img
                  src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincate_ins6.jpg?v=1706610486&width=400"
                  alt="fav2"
                  className="w-100 fasion"
                />
               
              </div>
             
            </div>
          </div>

          <div className="col-md-2">
            <div className="card item">
              <div className="image-container dress">
                <img
                  src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincate_ins5.jpg?v=1706610486&width=400"
                  alt="fav3"
                  className="w-100 fasion"
                />
              </div>
             
            </div>
          </div>

          <div className="col-md-2">
            <div className="card item">
              <div className="image-container dress">
                <img
                  src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincate_ins3.jpg?v=1706610486&width=400"
                  alt="fav4"
                  className="w-100 fasion"
                />
              
              </div>
             
            </div>
          </div>

          <div className="col-md-2">
            <div className="card item">
              <div className="image-container dress">
                <img
                  src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincate_ins4.jpg?v=1706610487&width=400"
                  alt="fav5"
                  className="w-100 fasion"
                />
              </div>
             
            </div>
          </div>
        </div>
      </div>
       
  )
}

export default FasionItems