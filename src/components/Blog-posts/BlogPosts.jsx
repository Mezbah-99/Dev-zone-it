import Link from "next/link";
import React from "react";

const BlogPosts = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
              <img
                src="images/blog/blog.png"
                className="img-fluid blog-img"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 pt-5 about-content">
              <p className="blog-p pt-2 margin-auto-xs">ইউআইএক্স</p>
              <h2 className="blog-h2 mt-sm-3">
                আপনার কি UI/UX ডিজাইন ক্যারিয়ার নিয়ে বিবেচনা করা উচিত?
              </h2>
              <p className="pt-2 pb-3">
                ভবিষ্যতে কোন পেশাটা নিজের জন্য ভালো হবে- এই সিদ্ধান্তটা সঠিকভাবে
                নেয়া খুব কঠিন একটা কাজ। চাকরির ক্ষেত্র গুলো প্রতি মূহুর্তে
                পরিবর্তন হচ্ছে, এখন যে বিষয়টা চাকরির বাজারে ডিমান্ডেবল আছে, সেটা
                আগামী কয়েক দশকও জনপ্রিয় থাকবে কি না- এটা অনেক বিষয়ের উপরেই
                নির্ভর করে। একজন UI/UX Designer এর এখন যেরকম ডিমান্ড., নাকি কমে
                যাবে- যারা এই বিষয়ে জানতে আগ্রহী, আজকের এই আর্টিকেলটা তাদের জন্য
                <Link href="/blog-details" className="ms-2">
                  আরো পড়ুন...
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 mb-3">
              <div className="card card-border-radius">
                <img
                  src="images/blog/b1.png"
                  className="card-img-top img-fluid"
                  alt=""
                />
                <div className="card-body">
                  <div className="d-flex">
                    <p className="blog-p pt-2 me-2">ফ্রিল্যান্সিং</p>
                    <p className="blog-p pt-2">জুন ০৯,২০২২</p>
                  </div>
                  <h2 className="blog-h3">
                    চাকরি নাকি ফ্রিল্যান্সিং, কোন ক্যারিয়ার আপনার জন্য ভালো
                    হবে?
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3">
              <div className="card card-border-radius">
                <img
                  src="images/blog/b2.png"
                  className="card-img-top img-fluid"
                  alt=""
                />
                <div className="card-body">
                  <div className="d-flex">
                    <p className="blog-p pt-2 me-2">ডিজাইন</p>
                    <p className="blog-p pt-2">জুন ০৯,২০২২</p>
                  </div>
                  <h2 className="blog-h3">
                    গ্রাফিক ডিজাইনারদের জন্য প্যাসিভ ইনকাম আইডিয়া
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3">
              <div className="card card-border-radius">
                <img
                  src="images/blog/b3.png"
                  className="card-img-top img-fluid"
                  alt=""
                />
                <div className="card-body">
                  <div className="d-flex">
                    <p className="blog-p pt-2 me-2">ডিজাইন</p>
                    <p className="blog-p pt-2">জুন ০৯,২০২২</p>
                  </div>
                  <h2 className="blog-h3">
                    চাকরি নাকি ফ্রিল্যান্সিং, কোন ক্যারিয়ার আপনার জন্য ভালো
                    হবে?
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3">
              <div className="card card-border-radius">
                <img
                  src="images/blog/b4.png"
                  className="card-img-top img-fluid"
                  alt=""
                />
                <div className="card-body">
                  <div className="d-flex">
                    <p className="blog-p pt-2 me-2">ফ্রিল্যান্সিং</p>
                    <p className="blog-p pt-2">জুন ০৯,২০২২</p>
                  </div>
                  <h2 className="blog-h3">
                    চাকরি নাকি ফ্রিল্যান্সিং, কোন ক্যারিয়ার আপনার জন্য ভালো
                    হবে?
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3">
              <div className="card card-border-radius">
                <img
                  src="images/blog/b5.png"
                  className="card-img-top img-fluid"
                  alt=""
                />
                <div className="card-body">
                  <div className="d-flex">
                    <p className="blog-p pt-2 me-2">ডিজাইন</p>
                    <p className="blog-p pt-2">জুন ০৯,২০২২</p>
                  </div>
                  <h2 className="blog-h3">
                    ক্লায়েন্টরা কি ধরনের গ্রাফিক্স ডিজাইনার দের হায়ার করতে পছন্দ
                    করে
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3">
              <div className="card card-border-radius">
                <img
                  src="images/blog/b6.png"
                  className="card-img-top img-fluid"
                  alt=""
                />
                <div className="card-body">
                  <div className="d-flex">
                    <p className="blog-p pt-2 me-2">ফ্রিল্যান্সিং</p>
                    <p className="blog-p pt-2">জুন ০৯,২০২২</p>
                  </div>
                  <h2 className="blog-h3">
                    ক্লায়েন্টরা কি ধরনের গ্রাফিক্স ডিজাইনার দের হায়ার করতে পছন্দ
                    করে
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3">
              <div className="card card-border-radius">
                <img
                  src="images/blog/b7.png"
                  className="card-img-top img-fluid"
                  alt=""
                />
                <div className="card-body">
                  <div className="d-flex">
                    <p className="blog-p pt-2 me-2">ডিজাইন</p>
                    <p className="blog-p pt-2">জুন ০৯,২০২২</p>
                  </div>
                  <h2 className="blog-h3">
                    গ্রাফিক ডিজাইনারদের জন্য প্যাসিভ ইনকাম আইডিয়া
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3">
              <div className="card card-border-radius">
                <img
                  src="images/blog/b8.png"
                  className="card-img-top img-fluid"
                  alt=""
                />
                <div className="card-body">
                  <div className="d-flex">
                    <p className="blog-p pt-2 me-2">ডিজাইন</p>
                    <p className="blog-p pt-2">জুন ০৯,২০২২</p>
                  </div>
                  <h2 className="blog-h3">
                    গ্রাফিক ডিজাইনারদের জন্য প্যাসিভ ইনকাম আইডিয়া
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3">
              <div className="card card-border-radius">
                <img
                  src="images/blog/b9.png"
                  className="card-img-top img-fluid"
                  alt=""
                />
                <div className="card-body">
                  <div className="d-flex">
                    <p className="blog-p pt-2 me-2">ডিজাইন</p>
                    <p className="blog-p pt-2">জুন ০৯,২০২২</p>
                  </div>
                  <h2 className="blog-h3">
                    গ্রাফিক ডিজাইনারদের জন্য প্যাসিভ ইনকাম আইডিয়া
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 mt-5">
        <div className="container py-5"></div>
      </section>
      <section className="py-5 footer-bg text-white mt-5">
        <div className="container">
          <div className="row under-footer text-center d-flex align-items-center">
            {/*            <div class="col-md-3"></div>*/}
            <div className="col-md-12 text-center pt-5">
              <h1 className="course-h1 text-white pt-5">
                সকল কোর্সে ভর্তি চলছে
              </h1>
              <p className="course-p text-white pt-3 pb-3 text-center">
                ক্যারিয়ার গড়ার সিদ্ধান্ত নিতে আর দেরি নয়। অনলাইন বা অফলাইন
                যেকোনো কোর্সে আপনার <br /> সুবিধামতো সময়ে ভর্তি হয়ে যান এখনই।
              </p>
              <Link href="/blog-details" className="btn btn-custom bg-dark">
                ব্রাউজ কোর্স
              </Link>
              {/*               <img src="images/vector.png" class="img-fluid vector-img" alt="">*/}
            </div>
            {/*            <div class="col-md-3"></div>*/}
          </div>
          <div className="row py-5">
            <div className="col-lg-6 col-md-12">
              <div className="row pt-5">
                <div className="col-md-7 pt-5">
                  <img
                    src="images/logo.png"
                    className="img-fluid w-75 mb-3"
                    alt=""
                  />
                  <p className="footer-p">
                    টপ আইটি বাংলাদেশের অন্যতম সেরা ই-লার্নিং স্কিল ডেভেলপমেন্ট
                    প্ল্যাটফর্ম। দক্ষতা উন্নয়নের মাধ্যমে দেশ থেকে বেকারত্ব
                    দূরীকরণ এবং বৈশ্বিক মানবসম্পদ তৈরিতে আমরা প্রতিশ্রুতিবদ্ধ।
                  </p>
                  <div className="mt-4">
                    <Link href="https://facebook.com" target="_blank">
                      <i className="fa-brands fa-facebook-f social-icon me-2" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank">
                      <i className="fa-brands fa-twitter social-icon social-icon-t me-2" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank">
                      <i className="fa-brands fa-linkedin-in social-icon social-icon me-2" />
                    </Link>
                    <Link href="https://youtube.com" target="_blank">
                      <i className="fa-brands fa-youtube social-icon social-icon-y me-2" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-5 pt-5 ps-sm-0">
                  <ul className="m-0 p-0 ps-4 sm-ps-0">
                    <li className="mb-3">কুইক লিংক</li>
                    <li>হোম</li>
                    <li>ফ্রি সেমিনারের সময়সূচি</li>
                    <li>মেন্টরস</li>
                    <li>সাফল্যের গল্প</li>
                    <li>গোপনীয়তা নীতি</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row pt-5 sm-pt-0">
                <div className="col-md-5 pt-5">
                  <ul className="m-0 p-0 ps-4 pe-3 sm-ps-0">
                    <li className="mb-3">কোর্স</li>
                    <li>গ্রাফিক ডিজাইন</li>
                    <li>সিপিএ মার্কেটিং</li>
                    <li>ডিজিটাল মার্কেটিং</li>
                    <li>ওয়েব ডিজাইন</li>
                  </ul>
                </div>
                <div className="col-md-7 pt-5">
                  <h3 className="mb-4 ms-4 footer-address-h footer-a">
                    ঠিকানা
                  </h3>
                  <div className="d-flex">
                    <i className="fa fa-location-dot pe-3 footer-icon" />
                    <p className="footer-address">
                      1/4, ব্লক-ই, সাত-মসজিদ রোড, মোহাম্মদপুর বাসস্ট্যান্ড,
                      ঢাকা-1207। 1207 ঢাকা, ঢাকা বিভাগ, বাংলাদেশ
                    </p>
                  </div>
                  <div className="d-flex">
                    <i className="fa fa-phone pe-3 footer-icon" />
                    <p className="footer-address">
                      +৮৮০১৭২০-০০০৫৪৫৬ +৮৮০১৭২০-০০০৫৪৫৬ +৮৮০১৭২০-০০০৫৪৫৬
                    </p>
                  </div>
                  <div className="d-flex">
                    <i className="fa fa-envelope pe-3 footer-icon" />
                    <p className="footer-address">topitinstitute@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPosts;
