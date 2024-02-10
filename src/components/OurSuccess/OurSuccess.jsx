import React from "react";

const OurSuccess = () => {
  return (
    <section className="pb-5 pt-3">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-3" />
          <div className="col-md-6 text-center">
            <h1 className="mb-4 mt-3 course-h1">সফলতার গল্প</h1>
            <p className="course-p">
              আমাদের শিক্ষার্থীদের সফলতার প্রতিটি গল্প ক্রিয়েটিভ আইটি
              ইন্সটিটিউটের এগিয়ে চলায় উদ্দীপনা যোগায় প্রতিটি মুহূর্তে
            </p>
          </div>
          <div className="col-md-3" />
        </div>
        <div className="row mb-4">
          <div className="col-md-4 text-sm-center xs-mb text-xs-center">
            <div className="success-img position-relative mb-sm-4">
              <iframe
                className="img-responsive"
                src="https://www.youtube.com/embed/any2cPkc9Bo"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              />
            </div>
          </div>
          <div className="col-md-4 text-sm-center xs-mb text-xs-center">
            <div className="success-img position-relative mb-sm-4">
              <iframe
                width="100%"
                height={250}
                className="img-responsive"
                src="https://www.youtube.com/embed/gKJitcZK_KQ"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              />
            </div>
          </div>
          <div className="col-md-4 text-sm-center text-xs-center">
            <div className="success-img position-relative mb-sm-4">
              <iframe
                width="100%"
                height={250}
                className="img-responsive"
                src="https://www.youtube.com/embed/any2cPkc9Bo"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              />
              {/*                    <img src="images/success3.png" style="height: " class="img-fluid img-responsive" alt="">*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSuccess;
