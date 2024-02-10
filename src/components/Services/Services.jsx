import React from "react";

const Services = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row pt-3">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-md-6 mb-sm-5">
                <img
                  src="/images/project.png"
                  className="img-fluid xs-mb"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <img
                  src="/images/project2.png"
                  className="img-fluid mb-3"
                  alt=""
                />
                <img src="/images/project3.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 project-content ps-5">
            <h1 className="pt-2 pt-md-0">
              প্র্যাকটিক্যাল প্রজেক্টের মাধ্যমে শিক্ষাদান আমাদের বিশেষত্ব
            </h1>
            <p className="text-muted">
              প্র্যাকটিক্যাল প্রোজেক্ট ছাড়া যেকোনো শিক্ষা অপূর্ণ। এক জরিপে দেখা
              গেছে, কেবল হাতে-কলমে শিক্ষার অভাবে চাকরি জীবনে ভোগান্তির শিকার হন
              ৬৭ শতাংশ মানুষ। তাছাড়া মার্কেটপ্লেস বা লোকাল জবে একটি পোর্টফোলিও
              না থাকলে কাজ পেতেও অনেক সময় লাগে। সব ক্যারিয়ারের শুরুতে কম-বেশি
              সবাই এই সমস্যায় ভোগেন। তাই ক্রিয়েটিভ আইটি বিশ্বাস করে হাতে-কলমে
              শিক্ষার উপর। এজন্যই আমাদের প্রতিটি কোর্সে রাখা হয়েছে পর্যাপ্ত
              সংখ্যক প্রজেক্ট। আপনি যদি আমাদের দক্ষ মেন্টরের তত্ত্বাবধানে সবগুলো
              প্রজেক্ট শেষ করেন, তাহলে কোর্স চলাকালীন সময়েই নিজের একটি ভালো
              পোর্টফোলিও তৈরি করতে পারবেন।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
