import React from "react";

const demo = () => {
  return (
    <Tab.Pane
            eventKey="#graphic-design"
            className="tab-pane fade show active"
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
          </Tab.Pane>
  );
};

export default demo;
