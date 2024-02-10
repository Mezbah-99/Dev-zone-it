import React from "react";
import PopularItem from "./PopularItem";

const PopularCourses = () => {
  return (
    <div>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto feature text-center mt-3">
              <h1 className="mb-3">জনপ্রিয় কোর্সসমূহ</h1>
              <p className="text-center text-muted">
                দেশ ও দেশের বাইরে বর্তমানে যে স্কিলগুলোর চাহিদা সবচেয়ে বেশি,
                সেসব দিয়েই সাজানো হয়েছে আমাদের কোর্স লিস্ট। এখান থেকে আপনার
                সুবিধামত অনলাইন বা অফলাইনে কোর্সে এনরোল করতে পারবেন যেকোনো সময়।
              </p>
            </div>
          </div>
        </div>
      </section>
      <PopularItem/>
    </div>
  );
};

export default PopularCourses;
