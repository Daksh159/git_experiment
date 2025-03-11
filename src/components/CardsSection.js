import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import california from "./california.jpg"; 

const CardsSection = () => {
  return (
    <div id="cards" className="container py-5">
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4">
        
        {/* Card 1 */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: `url('https://us.v-cdn.net/6036147/uploads/1OXI4RD03EO4/r-31-3-2-1200x675.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Short title, long jacket
              </h3>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: `url('https://media-rockstargames-com.akamaized.net/tina-uploads/posts/akk98a4o755825/5e6f14bf3b02e6f5342632d1dc08e5a7b4406c8c.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Much longer title that wraps to multiple lines
              </h3>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: `url(${california})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Another longer title belongs here
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CardsSection; // ✅ Default export
