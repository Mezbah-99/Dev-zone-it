import ContactForm from "@/components/Form/ContactForm";
import React from "react";

const Contact = () => {
  return (
    <div>
      <section class="hero-section bg-height">
        <div class="container">
          <div class="row text-white pt-5 text-center">
            <div class="col-md-2"></div>
            <div class="col-md-8 about-content mt-5 col-sm-12 pt-5 sm-mt-0 sm-pt-0">
              <h1 class="pt-5">যোগাযোগ</h1>
              <p class="pt-3 pb-3">
                যে কোনো প্রয়োজনে যোগাযোগ করতে সরাসরি আমাদের অফিস ভিজিট করতে
                পারেন। তাছাড়া হটলাইন নম্বরে কল করে জেনে নিতে পারেন ট্রেইনিং
                সংক্রান্ত যেকোনো তথ্য। এছাড়াও উল্লেখিত মেইলে কিংবা ফেসবুক
                ম্যাসেঞ্জারেও নক দিতে পারেন।
              </p>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </section>
      <ContactForm/>
    </div>
  );
};

export default Contact;
