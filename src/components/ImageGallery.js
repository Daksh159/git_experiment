import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ImageGallery = () => {
  const images = [
    {
      src: "https://cdn.mos.cms.futurecdn.net/Lf9fbStDf37vWxuRpPm4ud.jpg",
      alt: "GTA V"
    },
    {
      src: "https://wallpapers.com/images/hd/gta-v-4k-3840-x-2160-wallpaper-ugr0m8ye9446ofzm.jpg",
      alt: "GTA Online"
    },
    {
      src: "https://wallpapercat.com/w/full/2/8/5/130792-2880x1800-desktop-hd-grand-theft-auto-5-background-image.jpg",
      alt: "Los Santos"
    },
    {
      src: "https://i.pinimg.com/736x/5f/4e/e3/5f4ee38c058ce4bfeaae9c03ab819f5f.jpg",
      alt: "Red Dead Redemption 2"
    },
    {
      src: "https://images4.alphacoders.com/134/thumb-350-1343565.webp",
      alt: "RDR2 Landscape"
    },
    {
      src: "https://images.alphacoders.com/543/543389.jpg",
      alt: "GTA Vice City"
    },
    {
      src: "https://wallpapercave.com/wp/wp32342.jpg",
      alt: "GTA San Andreas"
    }
  ];

  return (
    <div className="container-fluid py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="section-title">Game Gallery</h1>
        <p className="section-subtitle">Explore our legendary titles</p>
      </div>

      <div className="gallery-container">
        <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#imageCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {images.map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <div className="carousel-image-container">
                  <img
                    src={image.src}
                    className="d-block w-100"
                    alt={image.alt}
                  />
                  <div className="carousel-caption">
                    <h3 className="fw-bold mb-0">{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#imageCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#imageCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;