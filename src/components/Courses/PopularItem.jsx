"use client"
import { fakeCourses } from "@/utils/fakeData";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { LuMonitorDot } from "react-icons/lu";
import { MdMoreTime } from "react-icons/md";
import "./PopularItem.css"

const PopularItem = () => {
  const courses = fakeCourses;
  const pinCourse = courses[9];

  return (
    <div className="popularCourses">
      <Tabs
        defaultActiveKey="all-courses"
        id="justify-tab-example"
        className="container bg-light mb-5"
        justify
      >
        <Tab eventKey="all-courses" title="All Courses">
          <div className="tab-content container">
            <div className="row">
              <div className="col-lg-6">
                {/* <a href="course-details.html" className="main-menu"></a> */}
                <div className="feature-content xs-mb pb-3 mb-sm-5">
                  <Link href="/course-details" className="main-menu">
                    <Image
                      width={600}
                      height={600}
                      src={pinCourse.img}
                      className="img-fluid w-100"
                      alt={pinCourse.title}
                    />
                    <h2 className="mt-4 p-1">{pinCourse.title}</h2>
                    <ul className="d-flex mt-3">
                      <li className="d-flex align-items-center justify-content-center gap-1">
                        <LuMonitorDot style={{ fontSize: "20px" }} />
                        টোটাল ক্লাসঃ {pinCourse.course_details.total_class}
                        টি
                      </li>
                      <li className="ps-3 d-flex align-items-center justify-content-center gap-1">
                        <MdMoreTime style={{ fontSize: "20px" }} />
                        টোটাল {pinCourse.course_details.total_class}+ ঘন্টা
                      </li>
                    </ul>
                  </Link>
                  <Link
                    href="course-details.html"
                    className="btn-primary w-50 mt-3 reverse"
                    style={{ maxHeight: "60px" }}
                  >
                    কোর্স ফিঃ {pinCourse.price} টাকা
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="row mb-3">
                  {courses?.slice(5, 9).map((course) => (
                    <div key={course.id} className="col-md-6">
                      <Link href="/course-details" className="main-menu">
                        <Image
                          width={300}
                          height={150}
                          src={course.img}
                          className="img-fluid w-100"
                          alt={course.title}
                          style={{ height: "210px" }}
                        />
                        <div className="card mb-sm-5 xs-mb">
                          <div className="card-body feature-part">
                            <h2 className="">{course.title}</h2>
                            <ul className="d-flex mt-2 mb-2 justify-content-around">
                              <li className="d-flex align-items-center justify-content-center gap-1">
                                <LuMonitorDot style={{ fontSize: "20px" }} />
                                টোটাল ক্লাসঃ {course.course_details.total_class}
                                টি
                              </li>
                              <li className="ps-3 d-flex align-items-center justify-content-center gap-1">
                                <MdMoreTime style={{ fontSize: "20px" }} />
                                টোটাল {course.course_details.total_class}+ ঘন্টা
                              </li>
                            </ul>
                            <h5 className="mt-2">
                              {course.price} ৳{" "}
                              <del className="del">
                                {course.discount_price}৳
                              </del>
                            </h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Grafics design">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {/* <Link href="/course-details" className="main-menu"></Link> */}
                <div className="feature-content pb-3 mb-sm-5 xs-mb">
                  <Link href="/course-details" className="main-menu">
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
                  </Link>
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
        </Tab>
        <Tab eventKey="longer-tab" title="Loooonger Tab">
          Tab content for Loooonger Tab
        </Tab>
      </Tabs>
    </div>
  );
};

export default PopularItem;
