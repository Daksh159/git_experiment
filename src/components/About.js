import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="section-title">About Us</h1>
        <p className="section-subtitle">Discover our story and mission</p>
      </div>
      <div className="row featurette align-items-center">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4">
            <h2 className="featurette-heading mb-3">Our Story</h2>
            <p className="lead">
              Welcome to our store, your go-to destination for quality products at unbeatable prices. 
              We are an online retail platform committed to providing a seamless shopping experience for customers worldwide. 
              Our mission is simple: to bring you the latest, most exciting products, from fashion to home goods, electronics to beauty, and beyond—all in one convenient place.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <img
            className="featurette-image img-fluid mx-auto rounded-3 shadow"
            src="https://c4.wallpaperflare.com/wallpaper/901/47/735/5bd3f55e67984-wallpaper-preview.jpg"
            alt="About Us"
            style={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4">
            <h2 className="featurette-heading mb-3">Why Choose Us?</h2>
            <p className="lead">
              We have grown from a small startup to a trusted name in e-commerce by prioritizing customer satisfaction 
              and offering a vast range of top-quality items. Whether you're shopping for everyday essentials or searching for something special, 
              we make it our mission to deliver exceptional service, secure payment options, and fast, reliable shipping.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
