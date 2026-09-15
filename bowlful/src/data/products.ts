export interface Product {
  id: string;
  name: string;
  badge: string;
  price: number;
  size: string;
  image: string;
  description: string;
  shortDesc: string;
  ingredients: string[];
  seasonalNote?: string;
  isBestSeller?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "classic-fruit-bowl",
    name: "Classic Fruit Bowl",
    badge: "CLASSIC",
    price: 200,
    size: "250g",
    image: "/assets/classic.jpg",
    shortDesc: "Apple, banana, watermelon, papaya & grapes.",
    description: "Prepared fresh every morning. A timeless assortment of crisp apple slices, ripe banana, juicy watermelon, orange papaya, and sweet grapes.",
    ingredients: ["Apple", "Banana", "Watermelon", "Papaya", "Grapes"],
    seasonalNote: "Fruit selection may vary with seasonal availability.",
    isBestSeller: true,
  },
  {
    id: "tropical-fruit-bowl",
    name: "Tropical Fruit Bowl",
    badge: "TROPICAL",
    price: 220,
    size: "300g",
    image: "/assets/tropical.jpg",
    shortDesc: "Pineapple, papaya, watermelon, muskmelon & grapes.",
    description: "A bright burst of tropical sunshine. Packed with sweet golden pineapple, papaya, hydrating watermelon, lush muskmelon, and grapes.",
    ingredients: ["Pineapple", "Papaya", "Watermelon", "Muskmelon", "Grapes"],
    seasonalNote: "Fruit selection may vary with seasonal availability.",
    isBestSeller: true,
  },
  {
    id: "premium-fruit-bowl",
    name: "Premium Fruit Bowl",
    badge: "PREMIUM",
    price: 260,
    size: "350g",
    image: "/assets/premium.jpg",
    shortDesc: "Pomegranate, apple, pineapple, kiwi & grapes.",
    description: "An elevated luxury bowl featuring ruby pomegranate arils, crisp apple wedges, sweet pineapple, green kiwi, and seedless grapes.",
    ingredients: ["Pomegranate", "Apple", "Pineapple", "Kiwi", "Grapes"],
    seasonalNote: "Fruit selection may vary with seasonal availability.",
  },
  {
    id: "signature-fruit-bowl",
    name: "Signature Fruit Bowl",
    badge: "SIGNATURE",
    price: 300,
    size: "400g",
    image: "/assets/signature.jpg",
    shortDesc: "Seasonal fruit, pomegranate, pineapple, apple, grapes & kiwi.",
    description: "Bowlful's crown jewel. A vibrant medley of seasonal fruit, ruby pomegranate arils, sweet pineapple, crisp apple wedges, seedless grapes, and kiwi.",
    ingredients: ["Seasonal Fruit", "Pomegranate", "Pineapple", "Apple", "Grapes", "Kiwi"],
    seasonalNote: "Fruit selection may vary with seasonal availability.",
    isBestSeller: true,
  },
  {
    id: "family-fruit-bowl",
    name: "Family Fruit Bowl",
    badge: "FAMILY",
    price: 350,
    size: "600g",
    image: "/assets/family.jpg",
    shortDesc: "Watermelon, papaya, pineapple, apple, banana, grapes & pomegranate.",
    description: "A generous sharing size filled with watermelon, papaya, golden pineapple, crisp apple, banana, grapes, and ruby pomegranate.",
    ingredients: ["Watermelon", "Papaya", "Pineapple", "Apple", "Banana", "Grapes", "Pomegranate"],
    seasonalNote: "Fruit selection may vary with seasonal availability.",
  }
];
