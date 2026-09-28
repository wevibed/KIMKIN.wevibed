export const SITE = {
  brand: "KIMKIN TECHNOLOGIES",
  shortBrand: "KIMKIN",
  tagline: "Tech For Every Part Of Life",
  eyebrow: "Laptops · Phones · Electronics · Power · Accessories",
  subtagline: "Laptops, phones, electronics, power solutions and everyday technology for work, home and beyond.",
  addressLine1: "Eastgate Market, Shop B30/B37",
  addressLine2: "Harare, Zimbabwe",
  hours: "Contact us for current opening hours",
  status: "Fast Delivery · Order on WhatsApp",
  phones: ["071 294 2609", "077 393 7213", "077 723 8507", "071 734 4719"],
  phoneDisplay: "071 294 2609 / 077 393 7213 / 077 723 8507 / 071 734 4719",
  whatsapp: "263712942609",
  instagram: "",
  facebook: "",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Eastgate+Market+Shop+B30+B37+Harare",
};

export const IMAGES = {
  hero: "/hero-tech.png",
  laptop: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  phone: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
  accessories: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
  printer: "https://images.pexels.com/photos/392228/pexels-photo-392228.jpeg",
  networking: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg",
  watches: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
  audio: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
  generator: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
};

export const CATEGORIES = [
  { name: "Laptops & Computers", image: IMAGES.laptop },
  { name: "Phones", image: IMAGES.phone },
  { name: "Accessories", image: IMAGES.accessories },
  { name: "Generators & Power", image: IMAGES.generator },
  { name: "Printers", image: IMAGES.printer },
  { name: "Networking", image: IMAGES.networking },
  { name: "Watches", image: IMAGES.watches },
  { name: "Audio", image: IMAGES.audio },
];

export function whatsappLink(message = "Hi Kimkin Technologies! I'd like to enquire about your products.") {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryLink(product) {
  return whatsappLink(`Hi Kimkin Technologies! I'm interested in the ${product.name}. Is it currently available?`);
}
