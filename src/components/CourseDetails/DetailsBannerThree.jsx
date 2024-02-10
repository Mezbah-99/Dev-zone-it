import React from "react";

const DetailsBannerThree = () => {
  return (
    <section className="pt-5">
      <div className="container">
        <div className="row pt-5 text-center">
          <h2 className="pb-5 courses-h2">এই কোর্স যাদের জন্য</h2>
          <div className="col-md-3 col-sm-6">
            <div className="courses-bg mb-sm-5">
              <img
                src="images/courses/c1.png"
                className="img-fluid courses-img"
                alt=""
              />
              <h3 className="courses-title-header mt-4">
                ফ্রিল্যান্সিং এ আগ্রহী
              </h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="courses-bg mb-sm-5">
              <img
                src="images/courses/c2.png"
                className="img-fluid courses-img"
                alt=""
              />
              <h3 className="courses-title-header mt-4">চাকুরী প্রত্যাশী</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="courses-bg mb-sm-5">
              <img
                src="images/courses/c3.png"
                className="img-fluid courses-img"
                alt=""
              />
              <h3 className="courses-title-header mt-4">ছাত্র-ছাত্রী</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="courses-bg">
              <img
                src="images/courses/c4.png"
                className="img-fluid courses-img"
                alt=""
              />
              <h3 className="courses-title-header mt-4">
                গ্রাফিক ডিজাইনে আগ্রহী যেকেউ
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsBannerThree;
