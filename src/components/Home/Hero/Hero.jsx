import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="hero-section pt-5">
      <div className="container">
        <div className="row text-white pt-5">
          <div className="col-md-7 hero-content mt-5 col-sm-7 pt-5 sm-pt-0">
            <h1>ক্যারিয়ার শুরু হোক দক্ষতার আত্মবিশ্বাসে</h1>
            <p className="pt-2 pb-3">
              অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ক্রিয়েটিভ আইটি ইনস্টিটিউট
              প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের ৩০টিরও বেশি
              ট্রেন্ডি কোর্স থেকে আজই বেছে নিন আপনার পছন্দের কোর্স।
            </p>
            <Link href="/courses" className="btn btn-danger px-4 py-3 me-3">
              ব্রাউজ কোর্স
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline-danger px-4 py-3 text-white"
            >
              যোগাযোগ করুন
              <img src="images/button.png" className="img-fluid" alt="" />
            </Link>
            <ul className="mt-5 p-0 m-0 d-flex">
              <li className="me-5">
                ৫০০০+ <span className="fs-5 d-block xs-fs-3">শিক্ষার্থী</span>
              </li>
              <li className="ms-5 me-5">
                ৪৫০+ <span className="fs-5 d-block xs-fs-3">শিক্ষক</span>
              </li>
              <li className="ms-5">
                ২৩০+ <span className="fs-5 d-block xs-fs-3">বিষয়</span>
              </li>
            </ul>
          </div>
          <div className="col-md-5 pt-5 col-sm-5 mt-5">
            <div className="ms-5 ps-4 ms-sm-0">
              <img
                src="images/1.png"
                className="img-fluid ms-5 hero-content-img"
                alt=""
              />
            </div>
            <div className="hero-img">
              <iframe
                className="img-fluid w-sm sm-display hero-img-responsive"
                src="https://www.youtube.com/embed/any2cPkc9Bo"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              />
              {/*                    <img src="images/2.png" class="img-fluid w-25 h-25 w-sm sm-display" alt="">*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
