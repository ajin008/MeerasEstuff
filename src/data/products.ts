export type ProductCategory = "veg" | "non-veg" | "sweet-tangy";

export interface Product {
  id: number;
  name: string;
  description: string;
  tagline: string;
  image: string;
  category: ProductCategory;
}

import Prawns_Masal_Mix from "@/assets/RoastedDryPrawn&spicyMasala_pickle.png";
import Fish_Pickle from "@/assets/Fish_pickle.png";
import Mixed_Veg_Pickle from "@/assets/MixedVeg_pickle.png";
import Meat_Pickle from "@/assets/Meat_pickle.png";
import Dates_Lemon_Pickle from "@/assets/Dates&Lemon_pickle.png";
import Garlic_Pickle from "@/assets/Garlic_pickle.png";
import Dates_Pickle from "@/assets/Dates_pickle.png";
import Sadya_Mango_Pickle from "@/assets/Mango_pickle.png";
import Sadya_Lemon_Pickle from "@/assets/Lemon_Pickle.png";

export const products: Product[] = [
  {
    id: 1,
    name: "Meeras Special Roasted Dry Prawn & Spicy Masala Mix",
    description:
      "A ready-to-eat masala mix made from roasted dry prawns, handpicked and processed under hygienic conditions, ground with dry coconut, red chillies, garlic and tamarind. Made in small batches for a bold, savory addition to rice and curries.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Prawns_Masal_Mix,
    category: "non-veg",
  },
  {
    id: 2,
    name: "Meeras Special Fish Pickle",
    description:
      "Tender fish cubes salted, fried and slow-cooked in traditional Kerala spices and vinegar, delivering a rich, tangy bite in every spoonful. A popular side dish with rice, rotis, and sandwiches.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Fish_Pickle,
    category: "non-veg",
  },
  {
    id: 3,
    name: "Meeras Special Mixed Veg Pickle",
    description:
      "A medley of fresh vegetables pickled in aromatic spices and oil, striking the perfect balance of tang, heat, and crunch. Great with rice, bread, sandwiches, and wraps.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Mixed_Veg_Pickle,
    category: "veg",
  },
  {
    id: 4,
    name: "Meeras Special Meat Pickle",
    description:
      "Tender meat pieces slow-cooked with vinegar, edible oil, and a bold blend of spices for a deeply flavorful, long-lasting pickle. Also known as meat achar.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Meat_Pickle,
    category: "non-veg",
  },
  {
    id: 5,
    name: "Meeras Special Hot & Sweet Dates & Lemon Pickle",
    description:
      "Sweet dates and tangy lemon simmered together with spices for a hot-and-sweet pickle. The sweetness of dates balances the tartness of lemon, making it perfect with biryani, chapathi, or parathas.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Dates_Lemon_Pickle,
    category: "sweet-tangy",
  },
  {
    id: 6,
    name: "Meeras Special Garlic Pickle",
    description:
      "Whole garlic cloves pickled in a tangy, aromatic spice blend — bold, pungent, and full of traditional Kerala flavor. Also known as Lahsun Ka Achaar.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Garlic_Pickle,
    category: "veg",
  },
  {
    id: 7,
    name: "Meeras Special Dates Pickle",
    description:
      "Soft dates cooked down with spices into a rich, sweet-and-tangy pickle that delivers a perfect balance of sweet, sour, tangy, and spicy flavors.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Dates_Pickle,
    category: "sweet-tangy",
  },
  {
    id: 8,
    name: "Meeras Special Mango Pickle",
    description:
      "Raw mangoes pickled the traditional Sadya way with natural ingredients and a recipe passed down through generations, capturing the authentic sour-spicy taste of a Kerala feast.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Sadya_Mango_Pickle,
    category: "sweet-tangy",
  },
  {
    id: 9,
    name: "Meeras Special Lemon Pickle",
    description:
      "Whole lemons pickled in classic Sadya style with spices, oil, and salt — a tangy staple served with rice, sandwiches, salads, and traditional meals.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Sadya_Lemon_Pickle,
    category: "sweet-tangy",
  },
];
