import { Framer } from "lucide-react";
import { Rocket } from "lucide-react";
import { Hammer } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { Pointer } from "lucide-react";
import { FolderCode } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpeg";
import user3 from "../assets/profile-pictures/user3.jpeg";
import user4 from "../assets/profile-pictures/user4.jpeg";
import user5 from "../assets/profile-pictures/user5.jpeg";
import user6 from "../assets/profile-pictures/user6.jpeg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Framer />,
    text: "Product UI UX Design",
    description:
      "A well-designed product has a clear purpose. It’s intuitive results in clear business growth. Our UX design process allows you to design new products and re-design existing products to meet your unique needs.",
  },
  {
    icon: <Hammer />,
    text: "Product Re-Design",
    description:
      "Product re-design is your key to attract new and retain existing users. not adding new features. What if you can improve the visual appeal incrementally and gain the attention your business want? We have done just that.",
  },
  {
    icon: <ShieldHalf />,
    text: "Product Engineering",
    description:
      "We assemble engineering teams that are dependable and adaptable that match your requirements while keeping you in full control of people and product roadmap.",
  },
  {
    icon: <Rocket />,
    text: "MVP Development",
    description:
      "We can help you build a MVP to launch new products. But we are also open to flexible working models, co-investing in promising ideas and networking with industry leaders. We are eager to make it happen.",
  },
  {
    icon: <Pointer />,
    text: "Websites Development",
    description:
      "We create responsive, SEO-friendly websites with custom design, e-commerce solutions, CMS platforms, and secure backend development. Our goal is to enhance user engagement, performance, and experience for all web applications.",
  },
  {
    icon: <FolderCode />,
    text: "Software Development",
    description:
      "We develop desktop, mobile, applications with cross-platform compatibility, robust security, optimized performance, and scalable architecture, ensuring your business applications, SaaS platforms solutions are built for success.",
  },
];

export const checklistItems = [
  {
    title: "Concept",
    description:
      "We help our Partners carry out the discovery phase, defining the product-market fit and forming the project requirements.",
  },
  {
    title: "Prototype",
    description:
      "We create clickable product versions and help our Partners define further development, essential functionality and user design.",
  },
  {
    title: "MVP",
    description:
      "Your dedicated team creates a basic yet fully functional version of the product ready for market launch.",
  },
  {
    title: "Full Product",
    description:
      "With the user feedback from the MVP and our business expertise, your assigned dedicated team creates a full-fledged, marketable product.",
  },
  {
    title: "Scaling",
    description:
      "We bet on long-term collaborations and guide our Partners through the entire process, including scaling already existing products.",
  }
];

export const pricingOptions = [
  {
    title: "Time & Material",
    price: "The Dedicated Team model provides specialists who fully dedicate their efforts to a project. This model allows the Client to directly The contract typically includes:",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Fixed Budget",
    price: "The Fixed Budget model is one of the most popular pricing options. It builds upon the Time & Material model,the only difference being a commitment to deliver a complete ",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Fixed Price",
    price: "The Fixed Price model operates on a predefined sum specified in the contract, paid in parts as agreed. This model offers high predictability as the developers",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
  
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported" },
  { href: "#", text: "Requirements" },
  { href: "#", text: "Contact" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
