// import React from 'react'
// import "../carousel/carousel.css"
// const Carousel = () => {
//   return (

// <div id="carouselExampleCaptions" className="carousel slide position-relative">
// <div className="carousel-indicators">
//   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
// </div>
// <div className="carousel-inner">
//   <div className="carousel-item active">
//     <img src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_slide1..jpg?v=1706587023&width=1800" className="d-block w-100 carousel-img" alt="..."/>
//     <div className="carousel-caption custom-caption">
//       <h2 className="col-md-12 fw-normal">Skincare Reimagined .</h2>
//       <p className="mt-4">To deliver peak potency, minus the waste</p>
//       <button className="btn mt-4 p-2 text-dark" style={{backgroundColor:"white",width:"200px"}}>Shop collection   <i
//                     className="fa-solid fa-chevron-right"
                   
//                   ></i></button>
//     </div>
//   </div>
//   <div className="carousel-item">
//     <img src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_slide2.jpg?v=1706156130&width=1800" className="d-block w-100 carousel-img" alt="..."/>
//     <div className="carousel-caption custom-caption">
//       <h2 className="col-12 fw-normal">Beauty in Every Drop</h2>
//       <p className="mt-4">Indulge in the luxury of flawless skin</p>
//       <button className="btn mt-4 p-2 text-dark" style={{backgroundColor:"white",width:"200px"}}>Shop collection   <i
//                     className="fa-solid fa-chevron-right"
                   
//                   ></i></button>
//     </div>
//   </div>
//   <div className="carousel-item">
//     <img src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_slide3.jpg?v=1706156130&width=1800" className="d-block w-100 carousel-img" alt="..."/>
//     <div className="carousel-caption custom-caption">
//       <h2 className="col-12 fw-normal">Skin Love, Unleashed</h2>
//       <p className="mt-4">Experience the magic of self-care with our premium skincare</p>
//       <button className="btn mt-4 p-2 text-dark" style={{backgroundColor:"white",width:"200px"}}>Shop collection   <i
//                     className="fa-solid fa-chevron-right"
                   
//                   ></i></button>
//     </div>
//   </div>
// </div>
// </div>

//   )
// }

// export default Carousel
import React from "react";
import "../carousel/Carousel.css";
import Button from "../button/Button";

const slides = [
  {
    src: "https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_slide1..jpg?v=1706587023&width=1800",
    alt: "Skincare Slide 1",
    title: "Skincare Reimagined",
    description: "To deliver peak potency, minus the waste",
  },
  {
    src: "https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_slide2.jpg?v=1706156130&width=1800",
    alt: "Skincare Slide 2",
    title: "Beauty in Every Drop",
    description: "Indulge in the luxury of flawless skin",
  },
  {
    src: "https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_slide3.jpg?v=1706156130&width=1800",
    alt: "Skincare Slide 3",
    title: "Skin Love, Unleashed",
    description: "Experience the magic of self-care with our premium skincare",
  },
];

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide position-relative">
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="d-block w-100 carousel-img"
              loading="lazy"
            />
            <div className="carousel-caption custom-caption">
              <h2 className="col-md-12 fw-normal">{slide.title}</h2>
              <p className="mt-4">{slide.description}</p>
               <Button />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
