// 1
db.wishlist.insertMany([
  { wishlist_id: 1, customer_name: "Riya", product_name: "Phone", product_category: "Electronics", price: 15000, added_date: "2026-01-01", notify_when_available: true },
  { wishlist_id: 2, customer_name: "Aman", product_name: "Shoes", product_category: "Fashion", price: 2000, added_date: "2025-01-01", notify_when_available: false },
  { wishlist_id: 3, customer_name: "Riya", product_name: "Laptop", product_category: "Electronics", price: 60000, added_date: "2026-02-01", notify_when_available: true },
  { wishlist_id: 4, customer_name: "Neha", product_name: "Bag", product_category: "Fashion", price: 1500, added_date: "2023-01-01", notify_when_available: true },
  { wishlist_id: 5, customer_name: "Riya", product_name: "Watch", product_category: "Accessories", price: 3000, added_date: "2026-03-01", notify_when_available: true }
]);

// 2
db.wishlist.find({
  price: { $lt: 2000 },
  notify_when_available: true
});

// 3
db.wishlist.updateMany(
  { product_category: "Electronics" },
  { $mul: { price: 0.8 } }
);

// 4
db.wishlist.deleteMany({
  added_date: { $lt: "2024-01-01" }
});

// 5 (Aggregation)
db.wishlist.aggregate([
  {
    $group: {
      _id: "$customer_name",
      total_items: { $sum: 1 }
    }
  }
]);
