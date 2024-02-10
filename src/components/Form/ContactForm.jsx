import React from "react";

const ContactForm = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-md-5 mt-3">
            <div className="form-section">
              <h3 className="form-title mb-4">
                আপনার কোন প্রশ্ন থাকলে আমাদের করুন
              </h3>
              <div className="card card-body border-0 p-0 text-xs-center">
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-radius-none"
                      placeholder="আপনার নাম"
                    />
                  </div>
                  <div className="form-group row mt-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control border-radius-none"
                        placeholder="ইমেল"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control border-radius-none mt-sm"
                        placeholder="ফোন"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="" />
                    <select
                      name="category_id"
                      id=""
                      className="form-control border-radius-none category-color"
                    >
                      <option value="">কোর্স ক্যাটাগরি</option>
                      <option value="">yueg</option>
                      <option value="">yueg</option>
                    </select>
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      name="content"
                      id=""
                      cols={30}
                      rows={5}
                      className="form-control border-radius-none"
                      placeholder="বিস্তারিত"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="submit"
                      className="btn btn-danger button-padding"
                      defaultValue="সাবমিট"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 pt-5 ms-2 contact-bg">
            <h3 className="mb-3 footer-address-h footer-p">অফিস</h3>
            <div className="d-flex">
              <p className="contact-p">
                অফিস ঠিকানা: ১/৪, ব্লক-ই, সাত-মসজিদ রোড, <br />
                মোহাম্মদপুর বাসস্ট্যান্ড, ঢাকা
              </p>
            </div>
            <h3 className="mb-3 footer-address-h footer-p">ফোন নাম্বার</h3>
            <div className="d-flex">
              <p className="footer-address">
                +৮৮০১৭২০-০০০৫৪৫৬ +৮৮০১৭২০-০০০৫৪৫৬ +৮৮০১৭২০-০০০৫৪৫৬
              </p>
            </div>
            <h3 className="mb-3 footer-address-h footer-p">ই-মেইল</h3>
            <div className="d-flex">
              <p className="footer-address">topitinstitute@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="row pt-5 pb-3">
          <div className="col-md-1" />
          <div className="col-md-10">
            <iframe
              className="img-fluid map-img"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.899965645067!2d90.36324091335099!3d23.75094639467601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfe90bf1b3ff%3A0x92358b436c808045!2sTOP%20IT%20LTD!5e0!3m2!1sen!2sbd!4v1656910781747!5m2!1sen!2sbd"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/*                <img src="images/contact1.png" class="img-fluid map-img" alt="">*/}
            {/*                <img src="images/contact1.png" class="img-fluid map-img" alt="">*/}
          </div>
          <div className="col-md-1" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
