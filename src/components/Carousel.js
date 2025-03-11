import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Make sure Bootstrap JS is loaded

const Carousel = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide mb-6" style={{top: '6vh',marginBottom: "4vh"}}
      data-bs-ride="carousel" // Enable automatic sliding
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cdn.mos.cms.futurecdn.net/g2eUmC9mie6Et6Aic4zHPF.jpg"
            className="d-block w-100"
            alt="Slide 1"
            height={600}
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>GTA San Andreas</h1>
              <a className="btn btn-lg btn-primary" href="#">
                Sign up today
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://wallpapercat.com/w/full/f/e/c/2475-1920x1080-desktop-1080p-grand-theft-auto-5-background-image.jpg"
            className="d-block w-100"
            alt="Slide 2"
            height={600}
          />
          <div className="container">
            <div className="carousel-caption">
              {/* <h1>Another example headline</h1>
              <p>Some representative placeholder content for the second slide.</p> */}
              <a className="btn btn-lg btn-primary" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
