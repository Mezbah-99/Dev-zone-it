import Image from "next/image";
import Link from "next/link";
import React from "react";

const IncludedServices = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 seminar-content ps-5">
              <h1 className="mb-4">
                আজই অংশ নিন ফ্রি সেমিনারে বাংলাদেশের সবচেয়ে বড় লার্নিং
                প্ল্যাটফর্মে
              </h1>
              <p>
                ফ্রিল্যান্সিং-এর জন্য কোন কোর্স করবেন, সিদ্ধান্ত নিতে পারছেন না?
                জয়েন করুন আমাদের ফ্রি সেমিনারে। বিষয়ভিত্তিক এই সেমিনারগুলোতে
                প্রতিটি কোর্সের সম্ভাবনা সম্পর্কে জানতে পারবেন। তাছাড়া সেমিনারে
                উপস্থিত এক্সপার্ট কাউন্সেলরের সঙ্গে কথা বলে আপনি যথাযথ কোর্স
                বেছে নেওয়ার সিদ্ধান্ত নিতে পারবেন সহজেই।
              </p>
              <Link
                href="/free-seminar"
                className="btn-primary reverse"
                style={{maxHeight: "50px", width: "250px"}}
              >
                আপকামিং ফ্রি সেমিনার
                <img
                  src="images/course-button.png"
                  className="img-fluid button-img"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-5 col-md-12">
              <Image
              width={500}
              height={200}
                src="/images/seminar1.png"
                className="img-fluid mb-3 w-100"
                alt=""
              />
              <div className="d-flex">
                <Image
                width={200}
                height={200}
                  src="/images/seminar2.png"
                  className="img-fluid seminar-img w-md-50 me-3 w-100"
                  alt=""
                />
                <Image
                width={200}
                height={200}
                  src="/images/seminar3.png"
                  className="img-fluid seminar-img w-md-50 w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 pt-3">
              <img
                src="images/more-courese1.png"
                className="img-fluid mb-4 main-course-img"
                alt=""
              />
              <div className="d-flex">
                <img
                  src="images/more-courses2.png"
                  className="img-fluid m-course-img me-3"
                  alt=""
                />
                <img
                  src="images/more-courses3.png"
                  className="img-fluid m-course-img"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-7 more-course ps-5">
              <h1>টপ আইটি থেকে কেন কোর্স করবেন</h1>
              <p>
                প্রতিটি কোর্সে রয়েছে সেলফ এবং ক্যারিয়ার ডেভেলপমেন্টের সুযোগ।
              </p>
              <div className="more-course-content d-flex align-items-center">
                <img
                  src="images/courses-icon/c1.png"
                  className="img-fluid m-course-icon"
                  alt=""
                />
                <div>
                  <h2 className="w-75 pt-2 ps-4">আপডেটেড কোর্স মডিউল</h2>
                  <p className="course-p ps-4 w-75">
                    সময়োপযোগী কোর্স মডিউল এবং আন্তর্জাতিক কোর্স কারিকুলাম অনুসরণ
                    করে প্রতিটি কোর্স তৈরি করা হয়েছে।
                  </p>
                </div>
              </div>
              <div className="more-course-content d-flex align-items-center">
                <img
                  src="images/courses-icon/c2.png"
                  className="img-fluid m-course-icon"
                  alt=""
                />
                <div>
                  <h2 className="w-75 pt-2 ps-4">স্কিল ডেভেলপমেন্ট</h2>
                  <p className="course-p ps-4 w-75">
                    সময়োপযোগী কোর্স মডিউল এবং আন্তর্জাতিক কোর্স কারিকুলাম অনুসরণ
                    করে প্রতিটি কোর্স তৈরি করা হয়েছে।
                  </p>
                </div>
              </div>
              <div className="more-course-content d-flex align-items-center">
                <img
                  src="images/courses-icon/c3.png"
                  className="img-fluid m-course-icon"
                  alt=""
                />
                <div>
                  <h2 className="w-75 pt-2 ps-4">অভিজ্ঞ ও প্রফেশনাল মেন্টর</h2>
                  <p className="course-p ps-4 w-75">
                    সময়োপযোগী কোর্স মডিউল এবং আন্তর্জাতিক কোর্স কারিকুলাম অনুসরণ
                    করে প্রতিটি কোর্স তৈরি করা হয়েছে।
                  </p>
                </div>
              </div>
              <div className="more-course-content d-flex align-items-center">
                <img
                  src="images/courses-icon/c4.png"
                  className="img-fluid m-course-icon"
                  alt=""
                />
                <div>
                  <h2 className="w-75 pt-2 ps-4">পর্যাপ্ত রিসোর্স সরবরাহ</h2>
                  <p className="course-p ps-4 w-75">
                    সময়োপযোগী কোর্স মডিউল এবং আন্তর্জাতিক কোর্স কারিকুলাম অনুসরণ
                    করে প্রতিটি কোর্স তৈরি করা হয়েছে।
                  </p>
                </div>
              </div>
              <div className="more-course-content d-flex align-items-center">
                <img
                  src="images/courses-icon/c5.png"
                  className="img-fluid m-course-icon"
                  alt=""
                />
                <div>
                  <h2 className="w-75 pt-2 ps-4">সার্টিফিকেশন</h2>
                  <p className="course-p ps-4 w-75">
                    সময়োপযোগী কোর্স মডিউল এবং আন্তর্জাতিক কোর্স কারিকুলাম অনুসরণ
                    করে প্রতিটি কোর্স তৈরি করা হয়েছে।
                  </p>
                </div>
              </div>
              <div className="more-course-content d-flex align-items-center">
                <img
                  src="images/courses-icon/c6.png"
                  className="img-fluid m-course-icon"
                  alt=""
                />
                <div>
                  <h2 className="w-75 pt-2 ps-4">ক্যারিয়ার সাপোর্ট</h2>
                  <p className="course-p ps-4 w-75">
                    সময়োপযোগী কোর্স মডিউল এবং আন্তর্জাতিক কোর্স কারিকুলাম অনুসরণ
                    করে প্রতিটি কোর্স তৈরি করা হয়েছে।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IncludedServices;
