import React from "react";

const FreeServices = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-5 mt-3">
            <div className="about-support text-center pt-5 position-relative">
              <img
                src="images/about-images/1.png"
                className="img-fluid about-img-left"
                alt=""
              />
              <div className="about-support-img position-absolute">
                <img
                  src="images/about-images/2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-7 mt-5 pt-3 sm-mt-0">
            <div className="about-support-content">
              <p className="pt-3 about-support-content-p">সাহায্য পান</p>
              <h2 className="pb-3 pt-2">আজীবন বিনামূল্যে সহায়তা</h2>
              <p className="pb-3 about-support-content-p">
                প্রশিক্ষণের সময় এবং প্রশিক্ষণের পরে, টপ ইট লিমিটেড যখনই
                প্রয়োজন তখনই তার সমস্ত ছাত্রদের অফলাইন এবং অনলাইন সহায়তা
                প্রদান করে। এবং এটি আজীবনের জন্য বিনামূল্যে!
              </p>
              {/*                    <a href="" class="btn btn-custom text-white">সহায়তা নিন</a>*/}
              <a
                href="contact.html"
                className="btn btn-danger btn-sm px-4 py-3 text-white hero-content img"
              >
                সহায়তা নিন
                <img src="images/button.png" className="img-fluid" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeServices;
