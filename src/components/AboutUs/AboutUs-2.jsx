import React from "react";

const AboutUsTwo = () => {
  return (
    <section className="hero-section bg-height">
      <div className="container">
        <div className="row text-white pt-5">
          <div className="col-md-7 about-content mt-5 col-sm-6 position-relative pt-5 sm-mt-0 sm-pt-0 h-100">
            <h1 className="pt-5">আমাদের সম্পর্কে</h1>
            <p className="pt-3 pb-3">
              ক্রিয়েটিভ আইটি ইনস্টিটিউট, আইটিতে সাফল্য সৃষ্টির লক্ষ্যে
              প্রতিষ্ঠিত একটি বিশ্বস্ত প্রতিষ্ঠান। প্রতিষ্ঠা লগ্ন থেকে শুরু করে
              এখন পর্যন্ত সুদীর্ঘ ১৩ বছরে ক্রিয়েটিভ আইটি অর্জন করেছে বহুমুখী
              সাফল্য। অবদান রেখে চলেছে ডিজিটাল বাংলাদেশ বিনির্মাণে। বাংলাদেশের
              অন্যতম প্রধান আইটি প্রতিষ্ঠানটি ২০০৮ সাল থেকে বেকার সমস্যা দূর
              করতেও গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে
              <a href="" className="ms-2">
                আরো পড়ুন...
              </a>
            </p>
          </div>
          <div className="col-md-5 pt-4 position-absolute col-sm-6 about-img-position">
            <div className="ms-5 ps-4">
              <img
                src="images/about-images/about.png"
                className="img-fluid about-content-img sm-display"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTwo;
