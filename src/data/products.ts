export interface Product {
  id: number;
  name: string;
  description: string;
  tagline: string;
  image: string;
}

import Prawns_Masal_Mix from "@/assets/01.jpg";
import Fish_Pickle from "@/assets/02.jpg";
import Mixed_Veg_Pickle from "@/assets/03.jpg";
import Meat_Pickle from "@/assets/04.jpg";
import Dates_Lemon_Pickle from "@/assets/05.jpg";
import Garlic_Pickle from "@/assets/06.jpg";
import Dates_Pickle from "@/assets/07.jpg";
import Sadya_Mango_Pickle from "@/assets/08.jpg";
import Sadya_Lemon_Pickle from "@/assets/09.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Meeras Special Prawns Masal Mix",
    description:
      "A masala mix made using dried sea prawns which are handpicked and processed under hygienic conditions. It contains Dry Coconut, Red Chillies, Garlic, Tamarind and Salt. Made regularly in small batches to ensure freshness.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Prawns_Masal_Mix,
  },
  {
    id: 2,
    name: "Meeras Special Fish Pickle",
    description:
      "A preserved food item made by salting and dehydrating fish cubes, then frying them in oil and mixing them with spices and vinegar. It is a popular side dish that complements meals like rice, rotis, sandwiches, and salads.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Fish_Pickle,
  },
  {
    id: 3,
    name: "Meeras Special Mixed Veg Pickle",
    description:
      "A condiment made from vegetables preserved in spices, oil, and vinegar or lemon juice. Known for its bold, tangy, and spicy flavors, it enhances dishes like rice, bread, sandwiches, and wraps.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Mixed_Veg_Pickle,
  },
  {
    id: 4,
    name: "Meeras Special Meat Pickle",
    description:
      "Also known as beef achar, this non-vegetarian pickle is prepared using vinegar, edible oil, salt, spices, and condiments, giving it a distinctive flavor and long shelf stability.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Meat_Pickle,
  },
  {
    id: 5,
    name: "Meeras Special Dates and Lemon Pickle",
    description:
      "A sweet and tangy pickle made with dates, lemon, and spices. The sweetness of dates balances the tartness of lemon, making it perfect with biryani, chapathi, or parathas.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Dates_Lemon_Pickle,
  },
  {
    id: 6,
    name: "Meeras Special Garlic Pickle",
    description:
      "A flavorful and tangy garlic pickle made from premium garlic cloves marinated in aromatic spices and tangy ingredients. Also known as Lahsun Ka Achaar.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Garlic_Pickle,
  },
  {
    id: 7,
    name: "Meeras Special Dates Pickle",
    description:
      "A flavorful pickle made with dates and spices that delivers a perfect balance of sweet, sour, tangy, and spicy flavors.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Dates_Pickle,
  },
  {
    id: 8,
    name: "Meeras Special Sadya Mango Pickle",
    description:
      "An authentic Kerala mango pickle made with natural ingredients and a traditional recipe passed down through generations. Perfect for enhancing any meal with rich flavor.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Sadya_Mango_Pickle,
  },
  {
    id: 9,
    name: "Meeras Special Sadya Lemon Pickle",
    description:
      "A tangy and spicy lemon pickle prepared by preserving lemons with spices, oil, and salt. A classic condiment served with rice, sandwiches, salads, and traditional meals.",
    tagline: "Order now and bring home the essence of Kerala!",
    image: Sadya_Lemon_Pickle,
  },
];
