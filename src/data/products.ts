export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

// All products use the same placeholder image.
// Replace the `image` path with your own photos when ready.
import pickleJar from "@/assets/pickle-jar.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Mango Pickle",
    description:
      "Traditional Kerala style mango pickle made with authentic spices.",
    image: pickleJar,
  },
  {
    id: 2,
    name: "Lemon Pickle",
    description: "Tangy and spicy  homemade lemon pickle.",
    image: pickleJar,
  },
  {
    id: 3,
    name: "Garlic Pickle",
    description: "Bold garlic pickle with a fiery Kerala spice blend.",
    image: pickleJar,
  },
  {
    id: 4,
    name: "Mixed Vegetable Pickle",
    description: "A medley of seasonal vegetables pickled to perfection.",
    image: pickleJar,
  },
  {
    id: 5,
    name: "Prawn Pickle",
    description: "Coastal Kerala prawn pickle with aromatic spices.",
    image: pickleJar,
  },
  {
    id: 6,
    name: "Gooseberry Pickle",
    description: "Nellikkaa pickle rich in flavor and tradition.",
    image: pickleJar,
  },
  {
    id: 7,
    name: "Chicken Pickle",
    description: "Succulent chicken pieces in a spiced oil base.",
    image: pickleJar,
  },
  {
    id: 8,
    name: "Fish Pickle",
    description: "Kerala fish pickle with tangy tamarind and red chili.",
    image: pickleJar,
  },
  {
    id: 9,
    name: "Ginger Pickle",
    description: "Zingy ginger pickle with mustard and fenugreek.",
    image: pickleJar,
  },
  {
    id: 10,
    name: "Green Chili Pickle",
    description: "Fiery green chilies pickled with Kerala spices.",
    image: pickleJar,
  },
  {
    id: 11,
    name: "Tender Mango Pickle",
    description: "Young mangoes in a traditional brine and spice mix.",
    image: pickleJar,
  },
  {
    id: 12,
    name: "Lime Pickle",
    description: "Sun-ripened limes in a sweet and sour pickle.",
    image: pickleJar,
  },
  {
    id: 13,
    name: "Tomato Pickle",
    description: "Ripe tomatoes with a smoky, spiced finish.",
    image: pickleJar,
  },
  {
    id: 14,
    name: "Bitter Gourd Pickle",
    description: "Kaippakka pickle with a complex, layered flavor.",
    image: pickleJar,
  },
  {
    id: 15,
    name: "Beef Pickle",
    description: "Kerala-style beef pickle slow-cooked with whole spices.",
    image: pickleJar,
  },
];
