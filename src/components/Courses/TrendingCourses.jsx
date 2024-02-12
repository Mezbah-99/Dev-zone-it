import { fakeCourses } from "@/utils/fakeData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuMonitorDot } from "react-icons/lu";
import { MdMoreTime } from "react-icons/md";

const TrendingCourses = () => {
  const courses = fakeCourses;
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
          {courses?.slice(0, 3).map((course) => (
            <div key={course.id} className="col-md-4 mb-sm-5 xs-mb">
              <Image
                    width={400}
                    height={300} src={course.img} className="img-fluid w-100" alt="" />
              <div className="card border-0 trendy-content">
                <div className="card-body feature-part">
                  <h2 className="">{course.title}</h2>
                  <ul className="d-flex mt-3 m-0 p-0">
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
                  <Link href="/course-details" className="btn-primary mt-3 reverse">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
