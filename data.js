const PRODUCTS = [
  { id:1, name:"Samsung Galaxy A55 5G 8/256GB", price:4299000, oldPrice:5200000, category:"electronics", emoji:"📱", rating:4.8, reviews:342, discount:17, badge:"Bestseller" },
  { id:2, name:"Apple AirPods Pro 2-avlod", price:3199000, oldPrice:3800000, category:"electronics", emoji:"🎧", rating:4.9, reviews:891, discount:16, badge:"Top" },
  { id:3, name:"Xiaomi Redmi Note 13 Pro 12/512", price:3599000, oldPrice:4100000, category:"electronics", emoji:"📱", rating:4.7, reviews:256, discount:12, badge:null },
  { id:4, name:'LG Smart TV 55" 4K OLED', price:8990000, oldPrice:11000000, category:"electronics", emoji:"📺", rating:4.6, reviews:128, discount:18, badge:"Flash" },
  { id:5, name:"Nike Air Max 270 erkaklar uchun", price:1299000, oldPrice:1800000, category:"clothing", emoji:"👟", rating:4.7, reviews:445, discount:28, badge:"Sale" },
  { id:6, name:"Adidas Originals Trefoil Hoodie", price:890000, oldPrice:1100000, category:"clothing", emoji:"👕", rating:4.5, reviews:213, discount:19, badge:null },
  { id:7, name:"Zara Kiyim To'plami ayollar", price:650000, oldPrice:890000, category:"clothing", emoji:"👗", rating:4.6, reviews:334, discount:27, badge:"New", isNew:true },
  { id:8, name:"Levi's 511 Slim Fit Jeans", price:780000, oldPrice:950000, category:"clothing", emoji:"👖", rating:4.8, reviews:567, discount:18, badge:null },
  { id:9, name:"Tefal Non-stick Qozon Set 5 ta", price:1450000, oldPrice:1900000, category:"home", emoji:"🍳", rating:4.7, reviews:189, discount:24, badge:"Top" },
  { id:10, name:"Dyson V15 Detect Simsiz Changyutgich", price:6800000, oldPrice:8200000, category:"home", emoji:"🌀", rating:4.9, reviews:92, discount:17, badge:null },
  { id:11, name:"IKEA Kallax Javon 4x4", price:1890000, oldPrice:2200000, category:"home", emoji:"🪑", rating:4.4, reviews:78, discount:14, badge:null },
  { id:12, name:"Xiaomi Robot Vacuum S10+", price:3200000, oldPrice:4100000, category:"home", emoji:"🤖", rating:4.8, reviews:156, discount:22, badge:"Smart" },
  { id:13, name:"MAC Studio Fix Powder Foundation", price:580000, oldPrice:720000, category:"beauty", emoji:"💄", rating:4.7, reviews:623, discount:19, badge:null },
  { id:14, name:"The Ordinary Niacinamide 10% Serum", price:195000, oldPrice:250000, category:"beauty", emoji:"🧴", rating:4.8, reviews:1240, discount:22, badge:"Viral" },
  { id:15, name:"Dyson Airwrap Multi-Styler", price:5200000, oldPrice:6500000, category:"beauty", emoji:"💅", rating:4.9, reviews:445, discount:20, badge:"Luxury" },
  { id:16, name:"Nike Pro Training Kit Erkak", price:1150000, oldPrice:1400000, category:"sports", emoji:"🏋️", rating:4.6, reviews:234, discount:18, badge:null },
  { id:17, name:"Adidas Tiro Football Trousers", price:450000, oldPrice:580000, category:"sports", emoji:"⚽", rating:4.5, reviews:167, discount:22, badge:null },
  { id:18, name:"Wilson Pro Staff Raketa", price:2800000, oldPrice:3400000, category:"sports", emoji:"🎾", rating:4.8, reviews:89, discount:18, badge:"Pro" },
  { id:19, name:"Organic O'zbek Qora Choy 500g", price:85000, oldPrice:110000, category:"food", emoji:"🍵", rating:4.9, reviews:892, discount:23, badge:"Organic" },
  { id:20, name:"Nescafé Gold 500g Premium", price:125000, oldPrice:155000, category:"food", emoji:"☕", rating:4.7, reviews:445, discount:19, badge:null },
  { id:21, name:"LEGO Technic Lambo 1677 ta detal", price:1890000, oldPrice:2300000, category:"toys", emoji:"🧱", rating:4.9, reviews:234, discount:18, badge:"Kids" },
  { id:22, name:"Barbie Fashionista 2024 To'plam", price:320000, oldPrice:420000, category:"toys", emoji:"🪆", rating:4.7, reviews:178, discount:24, badge:"New", isNew:true },
  { id:23, name:"Atomic Habits — James Clear (UZ)", price:95000, oldPrice:120000, category:"books", emoji:"📚", rating:5.0, reviews:567, discount:21, badge:"Bestseller" },
  { id:24, name:"Python Dasturlash — O'zbek tilida", price:78000, oldPrice:99000, category:"books", emoji:"💻", rating:4.8, reviews:234, discount:21, badge:null },
];

function formatPrice(p) {
  return p.toLocaleString('uz-UZ') + " so'm";
}
