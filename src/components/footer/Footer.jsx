import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section style={{top: "100px"}} className="py-5 footer-bg text-white mt-5">
      <div className="container">
        <div className="row under-footer text-center d-flex align-items-center">
          {/*            <div class="col-md-3"></div>*/}
          <div className="col-md-12 text-center pt-5">
            <h1 className="course-h1 text-white pt-5">সকল কোর্সে ভর্তি চলছে</h1>
            <p className="course-p text-white pt-3 pb-3 text-center">
              ক্যারিয়ার গড়ার সিদ্ধান্ত নিতে আর দেরি নয়। অনলাইন বা অফলাইন যেকোনো
              কোর্সে আপনার <br /> সুবিধামতো সময়ে ভর্তি হয়ে যান এখনই।
            </p>
            <Link href="course-details.html" className="btn btn-custom bg-dark">
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
                    {/* <i className="fa-brands fa-facebook-f social-icon me-2" /> */}
                    <FaFacebookF className="fa-facebook-f social-icon me-2"/>
                    
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    {/* <i className="fa-brands fa-twitter social-icon social-icon-t me-2" /> */}
                    <FaTwitter className="fa-brands fa-twitter social-icon social-icon-t me-2"/>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank">
                    {/* <i className="fa-brands fa-linkedin-in social-icon social-icon me-2" /> */}
                    <FaLinkedinIn className="fa-brands fa-linkedin-in social-icon social-icon me-2"/>
                  </Link>
                  <Link href="https://youtube.com" target="_blank">
                    {/* <i className="fa-brands fa-youtube social-icon social-icon-y me-2" /> */}
                    <FaYoutube className="fa-brands fa-youtube social-icon social-icon-y me-2"/>
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
                <h3 className="mb-4 ms-4 footer-address-h footer-a">ঠিকানা</h3>
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
  );
};

export default Footer;
