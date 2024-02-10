"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Scrollbar,
  A11y,
  EffectCube,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useCallback, useRef } from "react";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
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
            <div className="d-flex justify-content-end mt-5 sm-mt-0 swiper-navigation">
              {/* <i className="fa fa-arrow-left me-3 arrow" />
              <i className="fa fa-arrow-right arrow" /> */}
              <FaArrowLeft onClick={handlePrev}  className="me-3 arrow" />
              <FaArrowRight onClick={handleNext} className="arrow" />
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper ref={sliderRef}
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={25}
            slidesPerView={3}
            // navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="testimonialSlider"
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
          >
            <SwiperSlide>
              <div className="col-lg-4 col-md-6 col-sm-12 w-100">
                <div className="card">
                  <div className="card-body">
                    <h2 className="pt-3 ps-3 pe-3 about-h2">
                      “Release facebook responsive web design business model
                      canvas seed money monetization.”
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-4 col-md-6 col-sm-12 w-100">
                <div className="card">
                  <div className="card-body">
                    <h2 className="pt-3 ps-3 pe-3 about-h2">
                      “Release facebook responsive web design business model
                      canvas seed money monetization.”
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-4 col-md-6 col-sm-12 xs-mb w-100">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-lg-4 col-md-6 col-sm-12 w-100">
                <div className="card">
                  <div className="card-body">
                    <h2 className="pt-3 ps-3 pe-3 about-h2">
                      “Release facebook responsive web design business model
                      canvas seed money monetization.”
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="container"></div>
    </section>
  );
};

export default Testimonials;
