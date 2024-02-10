import BlogPosts from "@/components/Blog-posts/BlogPosts";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="hero-section bg-blog">
        <div className="container">
          <div className="row text-white pt-5 text-center">
            <div className="col-md-2" />
            <div className="col-md-8 mt-5 col-sm-12 sm-mt-0 sm-pt-0 position-relative">
              <h1 className="blog-h1">
                ক্যারিয়ার ও দক্ষতা নিয়ে ইন্ড্রাস্ট্রিলিডারদের থেকে টিপস নিন
              </h1>
              <div className="pt-5 pb-3">
                <div className="col-md-7 m-auto">
                  <form>
                    <input
                      className="form-control me-2 search-bg border-0"
                      type="search"
                      placeholder="খুজুন..."
                      aria-label="Search"
                    />
                    <button className="btn btn-custom-search" type="submit">
                      <img
                        src="images/search-button.png"
                        className="img-fluid search-img"
                        alt=""
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </section>
      <BlogPosts/>
    </div>
  );
};

export default page;
