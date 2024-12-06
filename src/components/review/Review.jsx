import React, { useState } from "react";
import "../review/Review.css";

const Review = () => {
  const [review, setReview] = useState(true);

  const handleChange = () => {
    if (review) {
      setReview(false);
    } else {
      setReview(true);
    }
  };

  return (
    <div className="container review shadow p-4 mb-5 bg-body-tertiary rounded d-flex mt-4">
      {review ? (
        <div className="row d-flex align-items-center">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <p className="fw-bold text-uppercase text-center">
              Our Customer's Review
            </p>
            <div className="d-flex justify-content-center mb-3">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className="fa-solid fa-star"
                  style={{ color: "#fc7303", marginRight: "5px" }}
                ></i>
              ))}
            </div>
            <p className="fs-5 fw-normal text-center">
              "Love love love! This product is so easy to use! I absolutely love
              the Alpha Arbutin product. It has made such a difference with my
              hyperpigmentation spots! I feel so much more confident without
              makeup on, whereas before I would never leave the house."
            </p>
            <p className="fw-bold text-center mb-1">Robert Smith</p>
            <p className="fw-light text-center">
              Purchase item:{" "}
              <span className="fw-lighter cold">100% Organic Cold-Pressed Oil</span>
            </p>
            {review ? (
              <i
                className={`fa-solid fa-code-compare text-center fs-3`}
                role="button"
                onClick={handleChange}
              ></i>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6 d-flex justify-content-center position-relative">
            <img
              src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_tes1.jpg?v=1706610236&width=750"
              alt="Customer Review"
              className="img-fluid rounded shadow-sm main-img"
            />
            <img
              src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_tes2.jpg?v=1706610235&width=550"
              alt="Hand holding product"
              className="rounded shadow-sm overlay-img hand"
            />
          </div>
        </div>
      ) : (
        <div className="row d-flex align-items-center">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <p className="fw-bold text-uppercase text-center">
              Our Customer's Review
            </p>
            <div className="d-flex justify-content-center mb-3">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className="fa-solid fa-star"
                  style={{ color: "#fc7303", marginRight: "5px" }}
                ></i>
              ))}
            </div>
            <p className="fs-5 fw-normal text-center">
              I'm impressed with the durability of the furniture collection.
              Even after years of use, the pieces still look and feel as good as
              new.I have been shopping with this web fashion site for over a
              year now and I can confidently say it is the best online.
            </p>
            <p className="fw-bold text-center mb-1"> Alex Grien</p>
            <p className="fw-light text-center">
              Purchase item:{" "}
              <span className="fw-lighter"> Glycolic Exfoliating Toner</span>
            </p>
            {review ? (
              ""
            ) : (
              <i
                className={`fa-solid fa-code-compare text-center fs-3`}
                role="button"
                onClick={handleChange}
              ></i>
            )}
          </div>

          <div className="col-md-6 d-flex justify-content-center position-relative">
            <img
              src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_tes4.jpg?v=1706610236&width=750"
              alt="Customer Review"
              className="img-fluid rounded shadow-sm main-img"
            />
            <img
              src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_tes3.jpg?v=1706610235&width=550"
              alt="Hand holding product"
              className="rounded shadow-sm overlay-img"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
