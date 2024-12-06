import React, { useRef, useState } from 'react'

const ExclusiveProduct = () => {
    const productRef = useRef(null);
    const [rightArrow, setRightArrow] = useState(true);
    const [leftArrow, setLeftArrow] = useState(false);
  
    const smoothScroll = (element, distance, duration) => {
      let start = element.scrollLeft;
      let startTime = performance.now();
      const scroll = (time) => {
        const timeElapsed = time - startTime;
        const scrollAmount = Math.min(timeElapsed / duration, 1) * distance;
        element.scrollLeft = start + scrollAmount;
        if (timeElapsed < duration) {
          requestAnimationFrame(scroll);
        }
      };
  
      requestAnimationFrame(scroll);
    };
    const handleRight = () => {
      if (productRef.current) {
        smoothScroll(productRef.current, 1400, 1000);
        setRightArrow(false);
        setLeftArrow(true);
      }
    };
    const handleLeft = () => {
      if (productRef.current) {
        smoothScroll(productRef.current, -1400, 1000);
        setRightArrow(true);
        setLeftArrow(false);
      }
    };
  return (
    <div className="container mt-5"  ref={productRef}>
        <h2 className="d-flex justify-content-center fs-1 fw-normal">Exclusive Kits</h2>
    <div className="row mt-5" style={{flexWrap:"nowrap",gap:"2px"}}>
    <div className="col-sm-3 col-md-5 col-lg-3">
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <img
            src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/Frame237.jpg?v=1706772087&width=668"
            className="card-img three"
            alt="..."
          />
          <div className="card-body text-center">
            <p className="card-text">Serum for Hair Density</p>
            <p className="fw-bold">$ 52.00</p>
            <div className="d-flex justify-content-center justify-content-evenly">
              <span className="fw-bold border p-1">40ml</span>
              <span className="fw-bold border p-1">50ml</span>
            </div>
            <button className="btn btn-dark mt-3">Quick add</button>
          </div>
        </div>
      </div>
      <div className="col-sm-3 col-md-5 col-lg-3">
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <img
            src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/Frame241.jpg?v=1706772168&width=668"
            className="card-img four"
            alt="..."
          />
          <div className="card-body text-center">
            <p className="card-text">Mini Confidence in a Cleanser</p>
            <p className="fw-bold">$ 22.00</p>
            <div className="d-flex justify-content-center justify-content-evenly">
              <span className="fw-bold border p-1">50ml</span>
              <span className="fw-bold border p-1">80ml</span>
            </div>
            <button className="btn btn-dark mt-3">Quick add</button>
          </div>
        </div>
      </div>
      <div className="col-sm-3 col-md-5 col-lg-3">
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <img
            src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/Frame244.jpg?v=1706772223&width=668"
            className="card-img one"
            alt="..."
          />
          <div className="card-body text-center">
            <p className="card-text">Granactive Retinoid Emulsion</p>
            <p className="fw-bold">$ 32.00</p>
            <div className="d-flex justify-content-center justify-content-evenly">
              <span className="fw-bold border p-1">30ml</span>
              <span className="fw-bold border p-1">60ml</span>
            </div>
            <button className="btn btn-dark mt-3">Quick add</button>
          </div>
        </div>
      </div>
    <div className="col-sm-3 col-md-5 col-lg-3">
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <img
            src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/Frame245.jpg?v=1706772247&width=1646"
            className="card-img six"
            alt="..."
          />
           {rightArrow ? (
            <i
            className={`fa-solid fa-chevron-right arrow arrow-right`}
            aria-label="Scroll Right"
            role="button"
            onClick={handleRight}
          ></i>
          
               
              ) : (
                ""
              )}
          <div className="card-body text-center">
            <p className="card-text">Glycolic Expoliating Toner</p>
            <p className="fw-bold">$ 75.00</p>
            <div className="d-flex justify-content-center justify-content-evenly">
              <span className="fw-bold border p-1">10ml</span>
              <span className="fw-bold border p-1">20ml</span>
            </div>
            <button className="btn btn-dark mt-3">Quick add</button>
          </div>
        </div>
      </div>
      <div className="col-sm-3 col-md-5 col-lg-3">
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <img
            src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/Frame245_d1e20333-8119-423e-9111-d3c65409901f.jpg?v=1706772563&width=668"
            className="card-img six"
            alt="..."
          />
          {leftArrow ? (
                <i
                  className="fa-solid fa-chevron-left  position-absolute angle"
                  style={{
                    top: "50%",
                    right: "250px",
                    transform: "translateY(-50%)",
                    color: "black",
                    fontSize: "24px",
                    cursor: "pointer",
                  }}
                  onClick={handleLeft}
                ></i>
              ) : (
                ""
              )}
          <div className="card-body text-center">
            <p className="card-text">100% Organic Cold-Pressed Oil</p>
            <div className="d-flex justify-content-center">
              <p className="text-muted text-decoration-line-through">
                $ 85.00
              </p>
              <p className="fw-bold ms-3 text-danger">$ 50.00</p>
            </div>
            <div className="d-flex justify-content-center justify-content-evenly">
              <span className="fw-bold border p-1">15ml</span>
              <span className="fw-bold border p-1">20ml</span>
            </div>
            <button className="btn btn-dark mt-3">Quick add</button>
          </div>
        </div>
      </div>
      <div className="col-sm-3 col-md-5 col-lg-3">
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <img
            src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/Frame251.jpg?v=1706772622&width=668"
            className="card-img eight"
            alt="..."
          />
          <div className="card-body text-center">
            <p className="card-text">Mini ExfoliKate Foaming Wash</p>
            <p className="fw-bold">$ 40.00</p>
            <div className="d-flex justify-content-center justify-content-evenly">
              <span className="fw-bold border p-1">10ml</span>
              <span className="fw-bold border p-1">20ml</span>
            </div>
            <button className="btn btn-dark mt-3">Quick add</button>
          </div>
        </div>
      </div>
      <div className="col-sm-3 col-md-5 col-lg-3">
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <img
            src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/Frame253.jpg?v=1706772675&width=668"
            className="card-img seven"
            alt="..."
          />
          <div className="card-body text-center">
            <p className="card-text">Mini Skin Perfecting Exfoliant</p>
            <p className="fw-bold">$ 35.00</p>
            <div className="d-flex justify-content-center justify-content-evenly">
              <span className="fw-bold border p-1">40ml</span>
              <span className="fw-bold border p-1">50ml</span>
            </div>
            <button className="btn btn-dark mt-3">Quick add</button>
          </div>
        </div>
      </div>
      <div className="col-sm-3 col-md-5 col-lg-3">
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <img
            src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/Frame254.jpg?v=1706772810&width=668"
            className="card-img five"
            alt="..."
          />
          <div className="card-body text-center">
            <p className="card-text">Caffeine Depuffing Eye Serum</p>
              <p className="fw-bold ms-3">$ 22.00</p>
            <div className="d-flex justify-content-center justify-content-evenly">
              <span className="fw-bold border p-1">10ml</span>
              <span className="fw-bold border p-1">20ml</span>
            </div>
            <button className="btn btn-dark mt-3">Quick add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ExclusiveProduct