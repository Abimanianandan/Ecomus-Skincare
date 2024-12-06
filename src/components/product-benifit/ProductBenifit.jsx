import React, { useState } from "react";

const ProductBenifit = () => {
    const [benifit,setBenifit] = useState(true)

    const handleChange = () =>{
        if(benifit){
            setBenifit(false)
        }else{
            setBenifit(true)
        }
    }

  return (
    <div className="container-fluid mt-5">
      <h2 className="d-flex justify-content-center fs-1 fw-normal ">
        Before and after use our products
      </h2>
      <p className="d-flex justify-content-center fw-lighter text-center">
        Witness the transformative power of our skincare solutions as they
        unveil a <br /> radiant new youa
      </p>
      { benifit ? 
      <div className="card mt-5 ">
        <img
          src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_before.jpg?v=1706609802&width=1200"
          className="card-img w-100"
          alt="Silk Blouses and Shirts"
          style={{ objectFit: "cover" }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center text-center">
          <button
            className="btn mt-4 p-2 text-dark"
            style={{ backgroundColor: "white", width: "150px" }}
            onClick={handleChange}
          >
            After
          </button>
        </div>
      </div> :
      <div className="card mt-5">
        <img
          src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_after.jpg?v=1706609802&width=1200"
          className="card-img w-100"
          alt="Silk Blouses and Shirts"
          style={{ objectFit: "cover" }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center text-center">
          <button
            className="btn mt-4 p-2 text-dark"
            style={{ backgroundColor: "white", width: "150px" }}
            onClick={handleChange}
          >
            Before
          </button>
        </div>
      </div>
      }
    </div>
  );
};

export default ProductBenifit;
