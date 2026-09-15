export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  tag: string;
  isPlaceholder: boolean;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: string;
  comments: string;
  caption: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Finally, a fruit bowl in Hyderabad that feels like a luxury gift to yourself. Crisp, perfectly chilled, and beautifully cut every single time.",
    author: "Ananya Reddy",
    location: "Jubilee Hills, Hyderabad",
    tag: "Customer testimonial placeholder",
    isPlaceholder: true,
  },
  {
    id: "2",
    quote: "The fruit quality and packing are immaculate. It's so refreshing to order fruit that actually looks and tastes premium.",
    author: "Karan Verma",
    location: "Gachibowli, Hyderabad",
    tag: "Customer testimonial placeholder",
    isPlaceholder: true,
  },
  {
    id: "3",
    quote: "Bowlful has completely replaced my unhealthy mid-afternoon snacks. The Signature Bowl is an absolute masterpiece.",
    author: "Sneha Kapoor",
    location: "Banjara Hills, Hyderabad",
    tag: "Customer testimonial placeholder",
    isPlaceholder: true,
  }
];

export const INSTAGRAM_GRID: InstagramPost[] = [
  {
    id: "ig-1",
    image: "/assets/hero.jpg",
    likes: "1.2k",
    comments: "48",
    caption: "Morning daylight & fresh crisp fruits. Freshness, beautifully packed. 🍉✨"
  },
  {
    id: "ig-2",
    image: "/assets/tropical.jpg",
    likes: "890",
    comments: "34",
    caption: "Alphonso mangoes & golden pineapples. Taste the summer sunshine in Hyderabad. 🥭"
  },
  {
    id: "ig-3",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    likes: "2.1k",
    comments: "92",
    caption: "Berries, kiwis & ruby pomegranate arils. Natural colours belong in your bowl. 🍇"
  },
  {
    id: "ig-4",
    image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80",
    likes: "1.5k",
    comments: "56",
    caption: "Weekend breakfast with the Family Fruit Bowl. Shared moments, simply enjoyed. ☀️"
  },
  {
    id: "ig-5",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80",
    likes: "1.8k",
    comments: "71",
    caption: "Freshly prepared every morning with zero compromise on quality and prep hygiene. 🌿"
  },
  {
    id: "ig-6",
    image: "/assets/classic.jpg",
    likes: "940",
    comments: "29",
    caption: "Keep it simple. Good fruit, thoughtfully cut, ready for your busy workday. 🍏"
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "SELECT",
    subtitle: "Hand-picked Peak Fruits",
    description: "We inspect and source top-tier, sun-ripened fruits daily from trusted local growers.",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "02",
    title: "PREPARE",
    subtitle: "Precision Chef Cuts",
    description: "Every piece is washed thoroughly, peeled, and sliced with surgical cleanliness.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "03",
    title: "PACK",
    subtitle: "Sealed Cold-Chilled Packaging",
    description: "Packed in eco-conscious, food-grade transparent bowls designed to lock in crisp natural dew.",
    image: "https://images.unsplash.com/photo-1526398977052-654221a252b1?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "04",
    title: "DELIVER",
    subtitle: "Fast Local Dispatch in Hyderabad",
    description: "Delivered directly to your home, office, or event location in insulated temperature-controlled bags.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  }
];

export const HYGIENE_POINTS = [
  {
    title: "Fresh Preparation",
    desc: "Cut only after your order is confirmed to ensure maximum juiciness and zero sogginess."
  },
  {
    title: "Careful Handling",
    desc: "Prepared in temperature-regulated clean kitchens by certified food handlers wearing gloves and masks."
  },
  {
    title: "Clean Packaging",
    desc: "100% food-safe, recyclable, spill-proof containers sealed tight for pristine delivery."
  },
  {
    title: "Clear Product Info",
    desc: "Full transparency on fruit origin, net weight, slice size, and preparation timestamps."
  }
];
