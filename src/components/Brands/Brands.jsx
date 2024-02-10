"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";

const Brands = () => {
  return (
    <section className="py-5 brands">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="mb-5 course-h1">আমরা 20+ প্রতিষ্ঠানের সাথে যুক্ত</h1>
          </div>
        </div>
        <div className="row">
          <div className="mt-2">
            <div className="item mb-4">
              <Swiper
                modules={[Autoplay, Pagination, Scrollbar]}
                spaceBetween={25}
                slidesPerView={5}
                // navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={{ delay: 500, disableOnInteraction: false }}
              >
                <SwiperSlide>
                  <div className="card border-0 mr-5 mt-2">
                    <img
                      src="images/institute/i1.png"
                      className="img-fluid me-5"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card border-0 mr-5 mt-2">
                    <img
                      src="images/institute/i2.png"
                      className="img-fluid me-5"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card border-0 mr-5 mt-2">
                    <img
                      src="images/institute/i3.png"
                      className="img-fluid me-5"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card border-0 mr-5 mt-2">
                    <img
                      src="images/institute/i4.png"
                      className="img-fluid me-5"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card border-0 mr-5 mt-2">
                    <img
                      src="images/institute/i5.png"
                      className="img-fluid me-5"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card border-0 mr-5 mt-2">
                    <img
                      src="images/institute/i2.png"
                      className="img-fluid me-5"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
