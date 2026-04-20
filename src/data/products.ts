import { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "Lumina Desk Lamp",
    price: 249,
    category: "Home Office",
    description: "A sleek, minimalist task light with adjustable color temperature and intensity.",
    image: "https://picsum.photos/seed/lamp/800/800",
    details: [
      "Aerospace-grade aluminum body",
      "Touch-sensitive controls",
      "Wireless charging base",
      "50,000 hour LED lifespan"
    ],
    isFeatured: true
  },
  {
    id: "2",
    name: "Ethereal Ceramic Vase",
    price: 180,
    category: "Decor",
    description: "Hand-thrown ceramic vase with a matte frost finish that plays with light and shadow.",
    image: "https://picsum.photos/seed/vase/800/800",
    details: [
      "Sustainable white clay",
      "Hand-polished surface",
      "Unique organic form",
      "Waterproof interior glazing"
    ],
    isFeatured: true
  },
  {
    id: "3",
    name: "Onyx Mechanical Keyboard",
    price: 320,
    category: "Tech",
    description: "Low-profile mechanical keys with a solid brass weighted plate for a premium tactile feel.",
    image: "https://picsum.photos/seed/keyboard/800/800",
    details: [
      "Hot-swappable switches",
      "Custom PBT keycaps",
      "Bluetooth 5.1 & Wired modes",
      "Programmable RGB underglow"
    ],
    isFeatured: true
  },
  {
    id: "4",
    name: "Aura Noise-Canceling Headphones",
    price: 450,
    category: "Tech",
    description: "Studio-quality sound delivered through a lightweight, carbon fiber frame.",
    image: "https://picsum.photos/seed/headphones/800/800",
    details: [
      "Hybrid active noise cancellation",
      "Spatial audio support",
      "45-hour battery life",
      "Replaceable lambskin ear pads"
    ]
  },
  {
    id: "5",
    name: "Velvet Hourglass Timer",
    price: 85,
    category: "Home Office",
    description: "A precision-timed instrument filled with fine black silica sand.",
    image: "https://picsum.photos/seed/timer/800/800",
    details: [
      "Borosilicate glass",
      "30-minute duration",
      "Hand-turned oak caps",
      "Calibrated sand flow"
    ]
  },
  {
    id: "6",
    name: "Prism Glass Water Bottle",
    price: 65,
    category: "Lifestyle",
    description: "Refractive glass bottle that transforms water into a visual centerpiece.",
    image: "https://picsum.photos/seed/bottle/800/800",
    details: [
      "Impact-resistant glass",
      "BPA-free silicone seal",
      "Dishwasher safe",
      "Ergonomic prismatic grip"
    ]
  }
];

export const categories = [
  "All",
  "Tech",
  "Home Office",
  "Decor",
  "Lifestyle"
];
