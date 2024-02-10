import React from "react";

const PopularItem = () => {
  return (
    <section className="tab-content pb-5 pt-3">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-11 m-auto">
            <nav className="navbar navbar-expand-md bg-light">
              <div className="container-fluid">
                <ul
                  className="nav nav-pills mb-lg-0 m-auto align-items-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li
                    className="nav-item me-3 me-sm-0 xs-mb xs-ml"
                    role="presentation"
                  >
                    <button
                      className="nav-link active text-center menu-style li-active py-4 px-4 py-sm-3 px-sm-3 me-2"
                      id="সকলকোর্স-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#সকলকোর্স"
                      type="button"
                      role="tab"
                      aria-controls="সকলকোর্স"
                      aria-selected="true"
                    >
                      সকল কোর্স
                    </button>
                  </li>
                  <li
                    className="nav-item me-3 me-sm-0 xs-ml xs-mb"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-center menu-style py-4 px-4 py-sm-3 px-sm-3 me-2"
                      id="গ্রাফিকডিজাইন-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#গ্রাফিকডিজাইন"
                      type="button"
                      role="tab"
                      aria-controls="গ্রাফিকডিজাইন"
                      aria-selected="true"
                    >
                      গ্রাফিক ডিজাইন
                    </button>
                  </li>
                  <li
                    className="nav-item me-3 me-sm-0 xs-ml xs-mb"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-center menu-style py-4 px-4 py-sm-3 px-sm-3 me-2"
                      id="ডিজিটালমার্কেটিং-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#ডিজিটালমার্কেটিং"
                      type="button"
                      role="tab"
                      aria-controls="ডিজিটালমার্কেটিং"
                      aria-selected="true"
                    >
                      ডিজিটাল মার্কেটিং
                    </button>
                  </li>
                  <li
                    className="nav-item me-3 me-sm-0 xs-ml xs-mb"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-center menu-style py-4 px-4 py-sm-3 px-sm-3 me-2"
                      id="ওয়েবডিজাইন-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#ওয়েবডিজাইন"
                      type="button"
                      role="tab"
                      aria-controls="ওয়েবডিজাইন"
                      aria-selected="true"
                    >
                      ওয়েব ডিজাইন
                    </button>
                  </li>
                  <li
                    className="nav-item me-3 me-sm-0 xs-mb"
                    role="presentation"
                  >
                    <button
                      className="nav-link text-center menu-style py-4 px-4 py-sm-3 px-sm-3 me-2"
                      id="সিপিএমার্কেটিং-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#সিপিএমার্কেটিং"
                      type="button"
                      role="tab"
                      aria-controls="সিপিএমার্কেটিং"
                      aria-selected="true"
                    >
                      সিপিএ মার্কেটিং
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="সকলকোর্স"
            role="tabpanel"
            aria-labelledby="সকলকোর্স-tab"
          >
            <div className="row">
              <div className="col-lg-6">
                <a href="course-details.html" className="main-menu"></a>
                <div className="feature-content xs-mb pb-3 mb-sm-5">
                  <a href="course-details.html" className="main-menu">
                    <img
                      src="images/feature.png"
                      className="img-fluid"
                      alt=""
                    />
                    <h2 className="mt-4 p-1">প্রফেশনাল গ্রাফিক ডিজাইন</h2>
                    <ul className="d-flex mt-3">
                      <li className="ps-2">
                        <i className="fa fa-display icon-f" />
                        টোটাল ক্লাসঃ ৩০টি
                      </li>
                      <li className="ps-5">
                        <i className="fa-regular fa-clock icon-f" />
                        টোটাল ৬০+ ঘন্টা
                      </li>
                    </ul>
                  </a>
                  <a
                    href="course-details.html"
                    className="btn btn-custom mt-4 border"
                  >
                    কোর্স ফিঃ ৫০০০ টাকা
                  </a>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <a href="course-details.html" className="main-menu">
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
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="course-details.html" className="main-menu">
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
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
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
                  </div>
                  <div className="col-md-6">
                    <a href="course-details.html" className="main-menu">
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="গ্রাফিকডিজাইন"
            role="tabpanel"
            aria-labelledby="গ্রাফিকডিজাইন-tab"
          >
            <div className="row">
              <div className="col-md-6">
                <a href="course-details.html" className="main-menu"></a>
                <div className="feature-content pb-3 mb-sm-5 xs-mb">
                  <a href="course-details.html" className="main-menu">
                    <img
                      src="images/course4.png"
                      className="img-fluid tab-img"
                      alt=""
                    />
                    <h2 className="mt-4 p-1">গ্রাফিক ডিজাইন</h2>
                    <ul className="d-flex mt-3">
                      <li className="ps-2">
                        <i className="fa fa-display icon-f" />
                        টোটাল ক্লাসঃ ৩০টি
                      </li>
                      <li className="ps-5">
                        <i className="fa-regular fa-clock icon-f" />
                        টোটাল ৬০+ ঘন্টা
                      </li>
                    </ul>
                  </a>
                  <a href="" className="btn btn-custom mt-4 border">
                    কোর্স ফিঃ ৫০০০ টাকা
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <a href="course-details.html" className="main-menu">
                      <img src="images/f1.png" className="img-fluid" alt="" />
                      <div className="card mb-sm-5 xs-mb">
                        <div className="card-body feature-part">
                          <h2 className="">গ্রাফিক ডিজাইন</h2>
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="ডিজিটালমার্কেটিং"
            role="tabpanel"
            aria-labelledby="ডিজিটালমার্কেটিং-tab"
          >
            <div className="row">
              <div className="col-md-6">
                <a href="course-details.html" className="main-menu"></a>
                <div className="feature-content pb-3 mb-sm-5 xs-mb">
                  <a href="course-details.html" className="main-menu">
                    <img
                      src="images/course2.png"
                      className="img-fluid tab-img"
                      alt=""
                    />
                    <h2 className="mt-4 p-1">ডিজিটাল মার্কেটিং</h2>
                    <ul className="d-flex mt-3">
                      <li className="ps-2">
                        <i className="fa fa-display icon-f" />
                        টোটাল ক্লাসঃ ৩০টি
                      </li>
                      <li className="ps-5">
                        <i className="fa-regular fa-clock icon-f" />
                        টোটাল ৬০+ ঘন্টা
                      </li>
                    </ul>
                  </a>
                  <a href="" className="btn btn-custom mt-4 border">
                    কোর্স ফিঃ ৫০০০ টাকা
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <a href="course-details.html" className="main-menu">
                      <img src="images/f2.png" className="img-fluid" alt="" />
                      <div className="card mb-sm-5 xs-mb">
                        <div className="card-body feature-part">
                          <h2 className="">ডিজিটাল মার্কেটিং</h2>
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="ওয়েবডিজাইন"
            role="tabpanel"
            aria-labelledby="ওয়েবডিজাইন-tab"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="feature-content pb-3 mb-sm-5 xs-mb">
                  <img src="images/feature.png" className="img-fluid" alt="" />
                  <h2 className="mt-4 p-1">ওয়েব ডিজাইন</h2>
                  <ul className="d-flex mt-3">
                    <li className="ps-2">
                      <i className="fa fa-display icon-f" />
                      টোটাল ক্লাসঃ ৩০টি
                    </li>
                    <li className="ps-5">
                      <i className="fa-regular fa-clock icon-f" />
                      টোটাল ৬০+ ঘন্টা
                    </li>
                  </ul>
                  <a href="" className="btn btn-custom mt-4 border">
                    কোর্স ফিঃ ৫০০০ টাকা
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <img src="images/f3.png" className="img-fluid" alt="" />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="সিপিএমার্কেটিং"
            role="tabpanel"
            aria-labelledby="সিপিএমার্কেটিং-tab"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="feature-content pb-3 mb-sm-5 xs-mb">
                  <img
                    src="images/course1.png"
                    className="img-fluid tab-img"
                    alt=""
                  />
                  <h2 className="mt-4 p-1">সিপিএ মার্কেটিং</h2>
                  <ul className="d-flex mt-3">
                    <li className="ps-2">
                      <i className="fa fa-display icon-f" />
                      টোটাল ক্লাসঃ ৩০টি
                    </li>
                    <li className="ps-5">
                      <i className="fa-regular fa-clock icon-f" />
                      টোটাল ৬০+ ঘন্টা
                    </li>
                  </ul>
                  <a href="course.html" className="btn btn-custom mt-4 border">
                    কোর্স ফিঃ ৫০০০ টাকা
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <img src="images/f4.png" className="img-fluid" alt="" />
                    <div className="card mb-sm-5 xs-mb">
                      <div className="card-body feature-part">
                        <h2 className="">সিপিএ মার্কেটিং</h2>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularItem;
