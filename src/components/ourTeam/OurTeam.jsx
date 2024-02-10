import React from "react";

const OurTeam = () => {
  return (
    <section className="py-5 team text-white">
      <div className="container">
        <div className="row text-xs-center text-sm-center">
          <div className="col-lg-3 col-md-3 col-sm-3 d-flex align-items-center">
            <h1 className="text-center team-h1">একটি বিশেষজ্ঞ দল</h1>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-9 py-3">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 xs-mb">
                <div className="team-content position-relative">
                  <img
                    src="images/about-images/t1.png"
                    className="img-fluid team-img"
                    alt=""
                  />
                  <div className="position-absolute team-img-text p-3">
                    <h3 className="team-h3">Md Khaled Saif</h3>
                    <p className="team-p">Graphic Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 xs-mb">
                <div className="team-content position-relative">
                  <img
                    src="images/about-images/t2.png"
                    className="img-fluid team-img"
                    alt=""
                  />
                  <div className="position-absolute team-img-text p-3">
                    <h3 className="team-h3">Aslam Uddin</h3>
                    <p className="team-p">UI/UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 xs-mb">
                <div className="team-content position-relative">
                  <img
                    src="images/about-images/t3.png"
                    className="img-fluid team-img"
                    alt=""
                  />
                  <div className="position-absolute team-img-text p-3">
                    <h3 className="team-h3">Md Al Amin </h3>
                    <p className="team-p">Web Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 xs-mb">
                <div className="team-content position-relative">
                  <img
                    src="images/about-images/t4.png"
                    className="img-fluid team-img team-img-radius"
                    alt=""
                  />
                  <div className="position-absolute team-img-text p-3">
                    <h3 className="team-h3">Md Ali Hassan</h3>
                    <p className="team-p">Font-end Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
