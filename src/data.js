import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const mediaLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    description: "Travel smart and get the best value for your journey.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    description: "Explore scenic trails and nonstop outdoor adventures.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    description:
      " Enjoy a smooth, relaxing, and stress-free travel experience.",
  },
];

export const tourData = [
  {
    id: 1,
    img: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Tibet Adventure offers a thrilling journey through breathtaking landscapes, ancient monasteries, and high-altitude trails. Experience culture, nature, and adventure in one unforgettable trip.",
    country: "china",
    day: 6,
    money: 2100,
  },
  {
    id: 2,
    img: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Best of Java brings together stunning volcanoes, vibrant cities, rich culture, and serene beaches. Experience the heart of Indonesia through its most iconic destinations in one unforgettable journey.",
    country: "indonesia",
    day: 11,
    money: 1400,
  },
  {
    id: 3,
    img: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Explore Hong Kong blends iconic skylines, vibrant street markets, rich culture, and unforgettable city experiences into one dynamic journey. Please enjoy your trip on backRoads.",
    country: "hong kong",
    day: 8,
    money: 5000,
  },
  {
    id: 4,
    img: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: "Kenya Highlights showcases breathtaking safaris, stunning landscapes, and rich wildlife experiences for an unforgettable African adventure.",
    country: "kenya",
    day: 20,
    money: 3300,
  },
];
