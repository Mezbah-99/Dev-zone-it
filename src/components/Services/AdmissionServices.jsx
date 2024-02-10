import Link from "next/link";
import React from "react";

const AdmissionServices = () => {
  return (
    <section className="course py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="mb-2 course-h1">সকল কোর্সে ভর্তি চলছে</h1>
            <p className="course-p">
              অনলাইন এবং অফলাইন যেকোনো কোর্সে আপনার সুবিধামতো সময়ে ভর্তি হতে
              পারেন এখনই
            </p>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-6">
            <div className="row bg-course xs-mb">
              <div className="col-md-5 pe-0">
                <img
                  src="images/course1.png"
                  className="img-fluid course-img"
                  alt=""
                />
              </div>
              <div className="col-md-7 ps-0 pb-sm-5">
                <div className="course-content xs-ml">
                  <h2 className="mt-4 p-2 mt-md-0 p-md-0 mt-sm-5">
                    গ্রাফিক ডিজাইন
                  </h2>
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
                  <Link
                    href="course.html"
                    className="btn btn-custom mt-4 mb-4 border"
                  >
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
          <div className="col-md-6">
            <div className="row bg-course xs-mb">
              <div className="col-md-5 pe-0">
                <img
                  src="images/course2.png"
                  className="img-fluid course-img"
                  alt=""
                />
              </div>
              <div className="col-md-7 ps-0 pb-sm-5">
                <div className="course-content xs-ml">
                  <h2 className="mt-4 p-2 mt-md-0 p-md-0 mt-sm-5">
                    ডিজিটাল মার্কেটিং
                  </h2>
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
                  <Link
                    href="course.html"
                    className="btn btn-custom mt-4 mb-4 border"
                  >
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
        <div className="row pt-3">
          <div className="col-md-6">
            <div className="row bg-course xs-mb">
              <div className="col-md-5 pe-0">
                <img
                  src="images/course3.png"
                  className="img-fluid course-img"
                  alt=""
                />
              </div>
              <div className="col-md-7 ps-0 pb-sm-5">
                <div className="course-content xs-ml">
                  <h2 className="mt-4 p-2 mt-md-0 p-md-0 mt-sm-5">
                    সিপিএ মার্কেটিং
                  </h2>
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
                  <Link
                    href="course.html"
                    className="btn btn-custom mt-4 mb-4 border"
                  >
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
          <div className="col-md-6">
            <div className="row bg-course">
              <div className="col-md-5 pe-0">
                <img
                  src="images/course4.png"
                  className="img-fluid course-img"
                  alt=""
                />
              </div>
              <div className="col-md-7 ps-0 pb-sm-5">
                <div className="course-content xs-ml">
                  <h2 className="mt-4 p-2 mt-md-0 p-md-0 mt-sm-5">
                    ওয়েব ডিজাইন
                  </h2>
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
                  <Link
                    href="course.html"
                    className="btn btn-custom mt-4 mb-4 border"
                  >
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
      </div>
    </section>
  );
};

export default AdmissionServices;
