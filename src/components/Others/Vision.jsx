import React from "react";

const Vision = () => {
  return (
    <section className="py-5 show-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="text-left ms-5">
                  <h2 className="team-h1 text-dark mb-3">দৃষ্টি</h2>
                  <p className="about-support-content-p">
                    আন্তর্জাতিক মানের প্রশিক্ষণ প্রদানের মাধ্যমে বিশ্বের সেরা
                    আইটি ট্রেনিং ইনস্টিটিউট হিসেবে ক্রিয়েটিভ আইটি ইনস্টিটিউট-কে
                    প্রতিষ্ঠিত করা।
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <img
                  src="images/about-images/show.png"
                  className="img-fluid ms-5"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-1" />
        </div>
      </div>
    </section>
  );
};

export default Vision;
