import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <section className="py-5 about-bg">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-9">
            <h1 className="mb-3 mt-5 course-h1 sm-mt-0 text-white">
              আমাদের সম্পর্কে শিক্ষার্থীরা কি বলছে
            </h1>
            <p className="course-p text-white mb-4">
              আমরা বিশ্বাস করি আমাদের প্রতিটি শিক্ষার্থী ক্রিয়েটিভ আইটি পরিবারের
              সদস্য। তাই শিক্ষার্থীদের যেকোনো গঠনমূলক মন্তব্য আমাদের ভুল-ত্রুটি
              শুধরে সামনে এগিয়ে চলার পথে প্রেরণা যোগায়
            </p>
          </div>
          <div className="col-md-3 pt-5">
            <div className="d-flex justify-content-end mt-5 sm-mt-0">
              {/* <i className="fa fa-arrow-left me-3 arrow" />
              <i className="fa fa-arrow-right arrow" /> */}
              <FaArrowLeft className="me-3 arrow"/>
              <FaArrowRight className="arrow"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 xs-mb">
            <div className="card">
              <div className="card-body">
                <h2 className="pt-3 ps-3 pe-3 about-h2">
                  “Buyer buzz partner network disruptive non-disclosure
                  agreement business”
                </h2>
              </div>
              <div className="d-flex align-items-center ps-4 pb-3 about-content">
                <img
                  src="images/about1.png"
                  className="img-fluid about-img"
                  alt=""
                />
                <div className="mt-4">
                  <h5 className="ms-3 mb-0">Albus Dumbledore</h5>
                  <p className="ms-3">Manager @ Howarts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 xs-mb">
            <div className="card sm-pb">
              <div className="card-body">
                <h2 className="pt-3 ps-3 pe-3 about-h2">
                  “Learning curve infrastructure value proposition advisor
                  strategy user experience hypotheses investor.”
                </h2>
              </div>
              <div className="d-flex align-items-center ps-4 pb-3 about-content">
                <img
                  src="images/about2.png"
                  className="img-fluid about-img"
                  alt=""
                />
                <div className="mt-4">
                  <h5 className="ms-3 mb-0">Severus Snape</h5>
                  <p className="ms-3">Manager @ Slytherin</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h2 className="pt-3 ps-3 pe-3 about-h2">
                  “Release facebook responsive web design business model canvas
                  seed money monetization.”
                </h2>
              </div>
              <div className="d-flex align-items-center ps-4 pb-3 about-content">
                <img
                  src="images/about3.png"
                  className="img-fluid about-img"
                  alt=""
                />
                <div className="mt-4">
                  <h5 className="ms-3 mb-0">Harry Potter</h5>
                  <p className="ms-3">Team Leader @ Gryffindor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials