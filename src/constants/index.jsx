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
      "We help our Partners carry out the discovery phase, defining the product-market fit and forming the project requirements. Get started with business analytics, lean startup coaching and design thinking.",
  },
  {
    title: "Prototype",
    description:
      "We create clickable product versions and help our Partners define further development, essential functionality and user design. According to the decisions made at this stage, we assign a professional team dedicated solely to your project.",
  },
  {
    title: "MVP",
    description:
      "Your dedicated team creates a basic yet fully functional version of the product ready for market launch. A minimum viable product helps you attract investments and gather invaluable user feedback to determine the next features.",
  },
  {
    title: "Full Product",
    description:
      "With the user feedback from the MVP and our business expertise, your assigned dedicated team creates a full-fledged, marketable product. Our developers follow Scrum best practices and the agreed feature plan.",
  },
  {
    title: "Scaling",
    description:
      "We bet on long-term collaborations and guide our Partners through the entire process, including scaling already existing products. We help them find new niches and expand the product's market presence.",
  }
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
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
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
