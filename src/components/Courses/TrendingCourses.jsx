import Link from "next/link";
import React from "react";

const TrendingCourses = () => {
  return (
    <section className="py-5 trendy">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="mb-4 course-h1">ট্রেন্ডি কোর্স সমূহ</h1>
            <p className="course-p">
              অনলাইন এবং অফলাইন যেকোনো কোর্সে আপনার সুবিধামতো সময়ে ভর্তি হতে
              পারেন এখনই
            </p>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-4 mb-sm-5 xs-mb">
            <img src="images/f3.png" className="img-fluid" alt="" />
            <div className="card border-0 trendy-content">
              <div className="card-body feature-part">
                <h2 className="">সিপিএ মার্কেটিং</h2>
                <ul className="d-flex mt-3 m-0 p-0">
                  <li className="ps-2">
                    <i className="fa fa-display course-icon" />
                    টোটাল ক্লাসঃ ৩০টি
                  </li>
                  <li className="ps-5">
                    <i className="fa-regular fa-clock course-icon" />
                    টোটাল ৬০+ ঘন্টা
                  </li>
                </ul>
                <Link href="" className="btn btn-trendy mt-3 border">
                  ব্রাউজ কোর্স
                  <img
                    src="images/course-button.png"
                    className="img-fluid button-img"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-sm-5 xs-mb">
            <img src="images/f6.png" className="img-fluid" alt="" />
            <div className="card border-0 trendy-content">
              <div className="card-body feature-part">
                <h2 className="">প্রফেশনাল গ্রাফিক ডিজাইন</h2>
                <ul className="d-flex mt-3 m-0 p-0">
                  <li className="ps-2">
                    <i className="fa fa-display course-icon" />
                    টোটাল ক্লাসঃ ৩০টি
                  </li>
                  <li className="ps-5">
                    <i className="fa-regular fa-clock course-icon" />
                    টোটাল ৬০+ ঘন্টা
                  </li>
                </ul>
                <Link href="" className="btn btn-trendy mt-3 border">
                  ব্রাউজ কোর্স
                  <img
                    src="images/course-button.png"
                    className="img-fluid button-img"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-sm-5">
            <img src="images/f5.png" className="img-fluid" alt="" />
            <div className="card border-0 trendy-content">
              <div className="card-body feature-part">
                <h2 className="">ডিজিটাল মার্কেটিং</h2>
                <ul className="d-flex mt-3 m-0 p-0">
                  <li className="ps-2">
                    <i className="fa fa-display course-icon" />
                    টোটাল ক্লাসঃ ৩০টি
                  </li>
                  <li className="ps-5">
                    <i className="fa-regular fa-clock course-icon" />
                    টোটাল ৬০+ ঘন্টা
                  </li>
                </ul>
                <Link href="#" className="btn btn-trendy mt-3 border">
                  ব্রাউজ কোর্স
                  <img
                    src="images/course-button.png"
                    className="img-fluid button-img"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
