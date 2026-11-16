/* Paghilom Café menu data — edit prices/items here.
   Item shape: { n: name, hot: price|null, iced: price|null, p: single price, note: text, tag: "New"|"Barista's Choice"|... }
*/
window.MENU = [
  {
    id: "coffee",
    title: "Coffee",
    blurb: "Espresso classics and sweet signatures.",
    items: [
      { n: "Americano", hot: 95, iced: 100 },
      { n: "Cafe Latte", hot: 130, iced: 140 },
      { n: "Spanish Latte", hot: 130, iced: 140 },
      { n: "Caramel Macchiato", hot: 140, iced: 150 },
      { n: "Salted Caramel", hot: 130, iced: 140 },
      { n: "Cafe Mocha", hot: 130, iced: 140 },
      { n: "White Chocolate Mocha", hot: 130, iced: 140 },
      { n: "Butterscotch Latte", iced: 140 },
      { n: "Honey Cloud Iced Americano", iced: 140 },
      { n: "Coffee Jelly Cream", iced: 150 },
      { n: "Crema de Mocha", iced: 150 },
      { n: "Coffee Cloud", iced: 160 },
      { n: "Paghilom Latte", iced: 160 },
      { n: "Iced Biscoff Latte", iced: 160 },
      { n: "Ube Espresso", iced: 160 },
      { n: "Toffe Nut Latte", iced: 170 },
      { n: "Toasted Marshmallow Creme", iced: 170 },
      { n: "Barista’s Choice", iced: 195, tag: "Barista’s Choice" }
    ]
  },
  {
    id: "new",
    title: "New Flavors",
    blurb: "Fresh on the bar.",
    items: [
      { n: "Mont Blanc Coffee", p: 170, tag: "New" },
      { n: "Vietnamese Egg Coffee", p: 170, tag: "New" },
      { n: "Sea Salt Latte", p: 160, tag: "New" },
      { n: "Biscoff Matcha", p: 170, tag: "New" },
      { n: "Matcha Oreo", p: 150, tag: "New" },
      { n: "Iced Grapefruit Black Tea", p: 130, tag: "New" }
    ]
  },
  {
    id: "noncoffee",
    title: "Non-Coffee",
    blurb: "Milky, fruity and fully caffeine-light.",
    items: [
      { n: "Milky Choco", p: 130 },
      { n: "Milky Blueberry", p: 130 },
      { n: "Milky Strawberry", p: 130 },
      { n: "Milky Caramel", p: 130 },
      { n: "Milky Salted", p: 130 },
      { n: "Red Velvet Cream Cheese", p: 150 },
      { n: "Choco Berry", p: 150 },
      { n: "Milky Biscoff", p: 160 },
      { n: "Ube Cloud", p: 160 },
      { n: "Paghilom Cloud", p: 160 }
    ]
  },
  {
    id: "matcha",
    title: "Matcha Series",
    blurb: "Earthy, creamy and a little playful.",
    items: [
      { n: "Matcha Latte", hot: 130, iced: 140 },
      { n: "Matcha Yakult", p: 140 },
      { n: "Dirty Matcha Latte", p: 150 },
      { n: "Matcha Berry", p: 150 },
      { n: "Matcha Cloud", p: 150 },
      { n: "Banana Matcha Cinnamon", iced: 150, tag: "Featured" },
      { n: "Ube Matcha", p: 160 }
    ]
  },
  {
    id: "oat",
    title: "Oat Series",
    blurb: "Made with oat milk.",
    items: [
      { n: "Oat Latte", p: 155 },
      { n: "Salted Latte", p: 155 },
      { n: "White Chocolate Oat", p: 155 },
      { n: "Spanish Oat", p: 160, tag: "Featured" }
    ]
  },
  {
    id: "frappe",
    title: "Frappe",
    blurb: "Blended, whipped and drizzled.",
    groups: [
      {
        label: "Coffee-based",
        items: [
          { n: "Mocha Frappe", p: 170 },
          { n: "Caramel Frappe", p: 170 },
          { n: "Salted Caramel Frappe", p: 170 },
          { n: "Biscoff Frappe", p: 170 }
        ]
      },
      {
        label: "Non-coffee",
        items: [
          { n: "Strawberry Creme Frappe", p: 160 },
          { n: "Matcha Frappe", p: 160 },
          { n: "Double Chocolate Frappe", p: 160 },
          { n: "Cookies & Cream Frappe", p: 160 },
          { n: "Blueberry Frappe", p: 160 },
          { n: "Ube Frappe", p: 170 }
        ]
      }
    ]
  },
  {
    id: "tea",
    title: "Teas & Sparkle",
    blurb: "Hibiscus teas and sparkling coolers.",
    groups: [
      {
        label: "Hibiscus tea",
        items: [
          { n: "Lemon Hibiscus", p: 130 },
          { n: "Orange Hibiscus", p: 140 },
          { n: "Yakult Hibiscus", p: 150 }
        ]
      },
      {
        label: "Sparkle",
        items: [
          { n: "Blueberry Sparkle", p: 130 },
          { n: "Lemon Lychee Sparkle", p: 130 },
          { n: "Strawberry Yakult Sparkle", p: 150 }
        ]
      }
    ]
  },
  {
    id: "food",
    title: "Waffles & Nachos",
    blurb: "Something to share.",
    items: [
      { n: "Nachos Plain Cheese", p: 120 },
      { n: "Beef Nachos", p: 170 },
      { n: "Strawberry Cream Waffle", p: 120 },
      { n: "Rocky Road Waffle", p: 120 }
    ]
  }
];
