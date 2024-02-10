import React from "react";

const Brands = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="mb-5 course-h1">আমরা 20+ প্রতিষ্ঠানের সাথে যুক্ত</h1>
          </div>
        </div>
        <div className="row">
          <div className="owl-carousel owl-theme mt-2">
            <div className="item mb-4">
              <div className="card border-0 mr-5 mt-2">
                <img
                  src="images/institute/i1.png"
                  className="img-fluid me-5"
                  alt=""
                />
              </div>
            </div>
            <div className="item mb-4">
              <div className="card border-0 mr-5 mt-2">
                <img
                  src="images/institute/i2.png"
                  className="img-fluid me-5"
                  alt=""
                />
              </div>
            </div>
            <div className="item mb-4">
              <div className="card border-0 mr-5 mt-2">
                <img
                  src="images/institute/i3.png"
                  className="img-fluid me-5"
                  alt=""
                />
              </div>
            </div>
            <div className="item mb-4">
              <div className="card border-0 mr-5 mt-2">
                <img
                  src="images/institute/i4.png"
                  className="img-fluid me-5"
                  alt=""
                />
              </div>
            </div>
            <div className="item mb-4">
              <div className="card border-0 mr-5 mt-2">
                <img
                  src="images/institute/i5.png"
                  className="img-fluid me-5"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
