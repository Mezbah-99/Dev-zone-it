import React from "react";

const DetailsBanner = () => {
  return (
    <section className="py-5 mt-2">
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-8 col-md-8 col-sm-12 mt-5">
            <img
              src="images/courses/course-details.png"
              className="img-fluid course-details-img"
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mt-5 pt-2 course-details-content">
            {" "}
            {/* opacity-50 */}
            {/*                <div class="opacity-c">jgghvhgj></div>*/}
            <ul className="d-block mt-3 m-0 p-0 pt-3">
              <li className="mb-4">
                <img
                  src="images/courses/course-icon.png"
                  className="img-fluid img-course-details me-3 ms-2"
                  alt=""
                />
                টোটাল ক্লাসঃ ৩০টি
              </li>
              <li className="mb-4">
                <img
                  src="images/courses/course-icon.png"
                  className="img-fluid img-course-details me-3 ms-2"
                  alt=""
                />
                টোটাল ৬০+ ঘন্টা
              </li>
              <li className="mb-4">
                <img
                  src="images/courses/course-icon.png"
                  className="img-fluid img-course-details me-3 ms-2"
                  alt=""
                />
                মার্কেটপ্লেস সম্পর্কে পর্যাপ্ত ধারনা
              </li>
              <li className="mb-4">
                <img
                  src="images/courses/course-icon.png"
                  className="img-fluid img-course-details me-3 ms-2"
                  alt=""
                />
                কোর্স শেষে সার্টিফিকেট
              </li>
              <li className="mb-4">
                <img
                  src="images/courses/course-icon.png"
                  className="img-fluid img-course-details me-3 ms-2"
                  alt=""
                />
                লাইফ টাইম সাপোর্ট
              </li>
            </ul>
            <div className="d-flex pt-3">
              <h5 className="course-fee me-4 ms-3">কোর্স ফিঃ ১০,০০০</h5>
              <div>
                <i
                  className="fas fa-star icon-course"
                  aria-hidden="true"
                  id="s1"
                />
                <i
                  className="fas fa-star  icon-course"
                  aria-hidden="true"
                  id="s2"
                />
                <i
                  className="fas fa-star  icon-course"
                  aria-hidden="true"
                  id="s3"
                />
                <i
                  className="fas fa-star  icon-course"
                  aria-hidden="true"
                  id="s4"
                />
                <i
                  className="fa-regular fa-star icon-course"
                  aria-hidden="true"
                  id="s5"
                />
              </div>
            </div>
            <div className="ms-4 mt-4">
              <a
                href="contact.html"
                className="btn btn-danger px-5 course-btn-sm py-2 me-3 me-sm-1"
              >
                ভর্তি
              </a>
              <a
                href="seminar.html"
                className="btn btn-dark px-4 py-2 course-btn-sm text-white"
              >
                ফ্রি সেমিনার
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsBanner;
