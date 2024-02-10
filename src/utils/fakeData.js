const fakeCourses = [
  {
    id: 1,
    title: "গ্রাফিক ডিজাইন",
    description:
      "Graphic design is the art of visual communication, combining imagery and text to convey a message or evoke a response.It involves creating visually appealing layouts for various mediums such as print, web, and multimedia.",
    img: "https://res.cloudinary.com/dxtetoe1z/image/upload/v1707562257/Top-It/course1_vr6fwn.png",
    created_at: "2024-01-15",
    price: 9999,
    discount_price: 850,
    course_details: {
      hour: 90,
      total_class: 45,
    },
  },
  {
    id: 2,
    title: "ডিজিটাল মার্কেটিং",
    description:
      "Digital marketing is the use of online channels and technologies to promote products or services and connect with potential customers.It encompasses various strategies such as social media marketing, email marketing, search engine optimization (SEO), and content marketing. ",
    img: "https://res.cloudinary.com/dxtetoe1z/image/upload/v1707563595/Top-It/course2_lwv1gk.png",
    created_at: "2024-01-15",
    price: 14000,
    discount_price: 1900,
    course_details: {
      hour: 30,
      total_class: 40,
    },
  },
  {
    id: 3,
    title: "সিপিএ মার্কেটিং",
    description:
      "CPA (Cost Per Action) marketing is a performance-based advertising model where advertisers pay publishers for a specific action taken by a user, such as a click, form submission, or sale. Unlike traditional advertising models, where advertisers pay for impressions or clicks, CPA marketing focuses on tangible results.",
    img: "https://res.cloudinary.com/dxtetoe1z/image/upload/v1707563642/Top-It/course3_qybsmg.png",
    created_at: "2024-01-15",
    price: 7000,
    discount_price: 1500,
    course_details: {
      hour: 30,
      total_class: 25,
    },
  },
  {
    id: 4,
    title: "ওয়েব ডিজাইন",
    description:
      "Web design is the process of creating visually appealing and functional websites. It involves planning the layout, structure, and navigation of a website, as well as selecting colors, fonts, and images to create a cohesive and engaging user experience. Web designers use a combination of coding languages, such as HTML, CSS, and JavaScript, along with design software and tools to bring their vision to life.",
    img: "https://res.cloudinary.com/dxtetoe1z/image/upload/v1707563643/Top-It/course4_rf4tvm.png",
    created_at: "2024-01-15",
    price: 13500,
    discount_price: 1350,
    course_details: {
      hour: 30,
      total_class: 67,
    },
  },
  {
    id: 5,
    title: "ওয়েব ডিজাইন",
    description:
      "CPA (Cost Per Action) marketing is a performance-based advertising model where advertisers pay publishers for a specific action taken by a user, such as a click, form submission, or sale. Unlike traditional advertising models, where advertisers pay for impressions or clicks, CPA marketing focuses on tangible results.",
    img: "https://res.cloudinary.com/dxtetoe1z/image/upload/v1707564551/Top-It/business-development-strategy-results-concept_irneoz.jpg",
    created_at: "2024-01-15",
    price: 11500,
    discount_price: 1300,
    course_details: {
      hour: 2,
      total_class: 25,
    },
  },
  {
    id: 6,
    title: "ওয়েব ডিজাইন",
    description:
      "CPA (Cost Per Action) marketing is a performance-based advertising model where advertisers pay publishers for a specific action taken by a user, such as a click, form submission, or sale. Unlike traditional advertising models, where advertisers pay for impressions or clicks, CPA marketing focuses on tangible results.",
    img: "https://res.cloudinary.com/dxtetoe1z/image/upload/v1707564438/Top-It/marketing-branding-planning-vision-goals-concept_rlxpxz.jpg",
    created_at: "2024-01-15",
    price: 11500,
    discount_price: 1180,
    course_details: {
      hour: 2,
      total_class: 65,
    },
  },
  {
    id: 7,
    title: "Auto cade ",
    description:
      "CPA (Cost Per Action) marketing is a performance-based advertising model where advertisers pay publishers for a specific action taken by a user, such as a click, form submission, or sale. Unlike traditional advertising models, where advertisers pay for impressions or clicks, CPA marketing focuses on tangible results.",
    img: "https://res.cloudinary.com/dxtetoe1z/image/upload/v1707564919/Top-It/man-using-laptop-emerging-graphics_vovfhg.jpg",
    created_at: "2024-01-15",
    price: 19500,
    discount_price: 1950,
    course_details: {
      hour: 3,
      total_class: 47,
    },
  },
  {
    id: 8,
    title: "shopping-banking ",
    description:
      "CPA (Cost Per Action) marketing is a performance-based advertising model where advertisers pay publishers for a specific action taken by a user, such as a click, form submission, or sale. Unlike traditional advertising models, where advertisers pay for impressions or clicks, CPA marketing focuses on tangible results.",
    img: "https://res.cloudinary.com/dxtetoe1z/image/upload/v1707564920/Top-It/shopping-banking-accounting-webpage-text-search-concept_fczcgb.jpg",
    created_at: "2024-01-15",
    price: 16500,
    discount_price: 1550,
    course_details: {
      hour: 1.5,
      total_class: 52,
    },
  },
  {
    id: 9,
    title: "website-coding ",
    description:
      "CPA (Cost Per Action) marketing is a performance-based advertising model where advertisers pay publishers for a specific action taken by a user, such as a click, form submission, or sale. Unlike traditional advertising models, where advertisers pay for impressions or clicks, CPA marketing focuses on tangible results.",
    img: "https://res.cloudinary.com/dxtetoe1z/image/upload/v1707564922/Top-It/web-design-website-coding-concept_h5zr3f.jpg",
    created_at: "2024-01-15",
    price: 15500,
    discount_price: 1950,
    course_details: {
      hour: 3,
      total_class: 47,
    },
  },
  {
    id: 10,
    title: "web-design-technology",
    description:
      "CPA (Cost Per Action) marketing is a performance-based advertising model where advertisers pay publishers for a specific action taken by a user, such as a click, form submission, or sale. Unlike traditional advertising models, where advertisers pay for impressions or clicks, CPA marketing focuses on tangible results.",
    img: "https://res.cloudinary.com/dxtetoe1z/image/upload/v1707564932/Top-It/web-design-technology-browsing-programming-concept_pappln.jpg",
    created_at: "2024-01-15",
    price: 14500,
    discount_price: 1250,
    course_details: {
      hour: 2,
      total_class: 55,
    },
  },
];
