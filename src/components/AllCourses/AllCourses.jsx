import Link from "next/link";
import React from "react";

const AllCourses = () => {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="row pt-5 text-center">
            <div className="col-md-3 col-sm-6">
              <Link href="/course-details" className="main-menu">
                <div className="courses-bg mb-sm-5">
                  <img
                    src="images/courses/1.png"
                    className="img-fluid courses-img"
                    alt=""
                  />
                  <h3 className="courses-title mt-4">গ্রাফিক ডিজাইন</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link href="/course-details" className="main-menu">
                <div className="courses-bg mb-sm-5">
                  <img
                    src="images/courses/2.png"
                    className="img-fluid courses-img"
                    alt=""
                  />
                  <h3 className="courses-title mt-4">ডিজিটাল মার্কেটিং</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link href="/course-details" className="main-menu">
                <div className="courses-bg mb-sm-5">
                  <img
                    src="images/courses/3.png"
                    className="img-fluid courses-img"
                    alt=""
                  />
                  <h3 className="courses-title mt-4">সিপিএ মার্কেটিং</h3>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link href="/course-details" className="main-menu">
                <div className="courses-bg">
                  <img
                    src="images/courses/4.png"
                    className="img-fluid courses-img"
                    alt=""
                  />
                  <h3 className="courses-title mt-4">ওয়েব ডিজাইন</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 trendy mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="courses-h2 mb-4">সকল কোর্স</h2>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <Link href="/course-details" className="main-menu">
                <img src="images/f4.png" className="img-fluid" alt="" />
                <div className="card mb-sm-5 xs-mb">
                  <div className="card-body feature-part">
                    <h2 className="">প্রফেশনাল গ্রাফিক ডিজাইন</h2>
                    <ul className="d-flex mt-2 mb-2 justify-content-around">
                      <li className="">
                        <i className="fa fa-display icon-f-2" />
                        টোটাল ক্লাসঃ ৩০টি
                      </li>
                      <li className="ps-3">
                        <i className="fa-regular fa-clock icon-f-2" />
                        টোটাল ৬০+ ঘন্টা
                      </li>
                    </ul>
                    <h5 className="mt-2">
                      ৭০০০ ৳ <del className="del">১০০০০ ৳</del>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link href="/course-details" className="main-menu">
                <img src="images/f3.png" className="img-fluid" alt="" />
                <div className="card mb-sm-5 xs-mb">
                  <div className="card-body feature-part">
                    <h2 className="">এডভ্যান্স সিপিএ মার্কেটিং</h2>
                    <ul className="d-flex mt-2 mb-2 justify-content-around">
                      <li className="">
                        <i className="fa fa-display icon-f-2" />
                        টোটাল ক্লাসঃ ৩০টি
                      </li>
                      <li className="ps-3">
                        <i className="fa-regular fa-clock icon-f-2" />
                        টোটাল ৬০+ ঘন্টা
                      </li>
                    </ul>
                    <h5 className="mt-2">
                      ৬০০০ ৳ <del className="del">৭০০০৳</del>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link href="/course-details" className="main-menu">
                <img src="images/f2.png" className="img-fluid" alt="" />
                <div className="card mb-sm-5 xs-mb">
                  <div className="card-body feature-part">
                    <h2 className="">প্রফেশনাল ডিজিটাল মার্কেটিং</h2>
                    <ul className="d-flex mt-2 mb-2 justify-content-around">
                      <li className="">
                        <i className="fa fa-display icon-f-2" />
                        টোটাল ক্লাসঃ ৩০টি
                      </li>
                      <li className="ps-3">
                        <i className="fa-regular fa-clock icon-f-2" />
                        টোটাল ৬০+ ঘন্টা
                      </li>
                    </ul>
                    <h5 className="mt-2">
                      ৫০০০ ৳ <del className="del">৬০০০৳</del>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link href="/course-details" className="main-menu">
                <img src="images/f1.png" className="img-fluid" alt="" />
                <div className="card mb-sm-5 xs-mb">
                  <div className="card-body feature-part">
                    <h2 className="">ওয়েব ডিজাইন</h2>
                    <ul className="d-flex mt-2 mb-2 justify-content-around">
                      <li className="">
                        <i className="fa fa-display icon-f-2" />
                        টোটাল ক্লাসঃ ৩০টি
                      </li>
                      <li className="ps-3">
                        <i className="fa-regular fa-clock icon-f-2" />
                        টোটাল ৬০+ ঘন্টা
                      </li>
                    </ul>
                    <h5 className="mt-2">
                      ৫০০০ ৳ <del className="del">৭০০০৳</del>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllCourses;
