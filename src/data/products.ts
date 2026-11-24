export type ProductCategory = "veg" | "non-veg" | "sweet-tangy";

export interface Product {
  id: number;
  name: string;
  malayalamName?: string;
  description: string;
  tagline: string;
  tastingNotes: string;
  pairing: string;
  image: string;
  category: ProductCategory;
  isFlagship?: boolean;
  badge?: string;
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
    id: 6,
    name: "Meeras Special Garlic Pickle",
    malayalamName: "വെളുത്തുള്ളി അച്ചാർ · Lahsun Ka Achaar",
    description:
      "Our house signature. Plump, hand-peeled whole garlic cloves cured in cold-pressed gingelly oil with sun-dried Kashmiri chillies, brown mustard seeds, fenugreek, and wild curry leaves. Slow-matured until every clove is tender, mellow, and deeply aromatic.",
    tagline: "Our #1 House Signature — Aged in small batches for deep, mellow heat.",
    tastingNotes: "Pungent · Tangy · Warmly Spiced",
    pairing: "Steamed Matta rice, curd rice, chapathi & biriyani",
    image: Garlic_Pickle,
    category: "veg",
    isFlagship: true,
    badge: "House Signature · #1 Bestseller",
  },
  {
    id: 8,
    name: "Meeras Special Mango Pickle",
    malayalamName: "മാങ്ങ അച്ചാർ · Sadya Cut Mango",
    description:
      "Crisp raw mangoes hand-cut and pickled the traditional Kerala Sadya way with stone-ground red chilli, mustard, and asafoetida, capturing the unmistakable sour-spicy punch of a festive feast.",
    tagline: "Traditional Sadya-style cut mango pickle.",
    tastingNotes: "Sharp Sour · Crisp · Fiery Finish",
    pairing: "Kerala Sadya meals, kanji & curd rice",
    image: Sadya_Mango_Pickle,
    category: "veg",
    badge: "Sadya Classic",
  },
  {
    id: 1,
    name: "Meeras Special Roasted Dry Prawn & Spicy Masala Mix",
    malayalamName: "ഉണക്ക ചെമ്മീൻ ചമ്മന്തി · Chemmeen Masala",
    description:
      "A ready-to-eat coastal delicacy made from sun-dried prawns roasted with dry coconut, fiery red chillies, garlic cloves, and aged Malabar tamarind. Pounded in small batches for an intensely savory crunch.",
    tagline: "Coastal heirloom recipe roasted in small batches.",
    tastingNotes: "Umami · Roasted Coconut · Smoky Heat",
    pairing: "Hot rice with ghee, kanji & dosa",
    image: Prawns_Masal_Mix,
    category: "non-veg",
    badge: "Coastal Specialty",
  },
  {
    id: 5,
    name: "Meeras Special Hot & Sweet Dates & Lemon Pickle",
    malayalamName: "ഈന്തപ്പഴം നാരങ്ങ അച്ചാർ · Biriyani Side",
    description:
      "Sun-ripened dates and cured lemons simmered together into a glossy, jewel-toned reduction. The caramel sweetness of dates melts into the bright citrus tang of lemon and warm spices.",
    tagline: "The quintessential Malabar biriyani companion.",
    tastingNotes: "Caramel Sweet · Citrus Tang · Gentle Spice",
    pairing: "Malabar Thalassery biriyani, ghee rice & parathas",
    image: Dates_Lemon_Pickle,
    category: "sweet-tangy",
    badge: "Biriyani Favorite",
  },
  {
    id: 2,
    name: "Meeras Special Fish Pickle",
    malayalamName: "മീൻ അച്ചാർ · Coastal Fish Achar",
    description:
      "Firm coastal fish cubes marinated in turmeric and chilli, lightly seared and slow-simmered in gingelly oil with crushed garlic, julienned ginger, green chillies, and aged vinegar.",
    tagline: "Slow-simmered coastal catch in aromatic spice oil.",
    tastingNotes: "Rich · Tangy · Ginger-Garlic Depth",
    pairing: "Matta rice, kappa (tapioca) & appam",
    image: Fish_Pickle,
    category: "non-veg",
  },
  {
    id: 4,
    name: "Meeras Special Meat Pickle",
    malayalamName: "ഇറച്ചി അച്ചാർ · Traditional Meat Achar",
    description:
      "Succulent cuts of meat dry-roasted with black pepper, fennel, cinnamon, and curry leaves before being preserved in spiced oil and vinegar for a rich, deeply satisfying heritage pickle.",
    tagline: "Slow-roasted with whole Malabar garam masala.",
    tastingNotes: "Peppery · Savory · Deeply Aromatic",
    pairing: "Ghee rice, Kerala parotta & chapathi",
    image: Meat_Pickle,
    category: "non-veg",
  },
  {
    id: 9,
    name: "Meeras Special Lemon Pickle",
    malayalamName: "നാരങ്ങ അച്ചാർ · Sadya Naranga",
    description:
      "Sun-cured whole lemons quartered and mellowed in rock salt, gingelly oil, fenugreek, and roasted red chilli powder — a bright, zesty staple of every Kerala dining table.",
    tagline: "Sun-mellowed citrus with roasted fenugreek.",
    tastingNotes: "Zesty · Briny · Aromatic Bitterness",
    pairing: "Everyday rice meals, parathas & curd rice",
    image: Sadya_Lemon_Pickle,
    category: "veg",
  },
  {
    id: 7,
    name: "Meeras Special Dates Pickle",
    malayalamName: "ഈന്തപ്പഴം അച്ചാർ · Sweet Dates Achar",
    description:
      "Soft,dark dates slowly cooked down with tamarind, jaggery, and warming spices into a rich, spoonable preserve that balances natural sweetness with a lingering spicy kick.",
    tagline: "Rich, jammy dates simmered with tamarind & spice.",
    tastingNotes: "Jammy Sweet · Tamarind Tang · Warm Finish",
    pairing: "Biriyani, pulao, chapathi & flatbreads",
    image: Dates_Pickle,
    category: "sweet-tangy",
  },
  {
    id: 3,
    name: "Meeras Special Mixed Veg Pickle",
    malayalamName: "മിക്സഡ് വെജ് അച്ചാർ · Garden Medley",
    description:
      "Crisp seasonal carrots, raw mango, green chillies, and ginger cured in a fragrant mustard and chilli oil infusion — delivering crunch, heat, and tang in every bite.",
    tagline: "Crisp garden harvest in stone-ground mustard spice.",
    tastingNotes: "Crunchy · Mustard Bite · Bright Tang",
    pairing: "Rotis, sandwiches, wraps & dal-rice",
    image: Mixed_Veg_Pickle,
    category: "veg",
  },
];

export const flagshipProduct = products[0];
