// 1. Create collection & insert one document
db.menu.insertOne({
  item_id: 1,
  name: "Cappuccino",
  category: "Coffee",
  price: 150,
  availability: true
});

// 2. Insert many
db.menu.insertMany([
  { item_id: 2, name: "Latte", category: "Coffee", price: 180, availability: true },
  { item_id: 3, name: "Green Tea", category: "Tea", price: 120, availability: true },
  { item_id: 4, name: "Sandwich", category: "Snack", price: 100, availability: false },
  { item_id: 5, name: "Espresso", category: "Coffee", price: 130, availability: true },
  { item_id: 6, name: "Brownie", category: "Snack", price: 90, availability: true }
]);

// 3. Find available items
db.menu.find({ availability: true });

// 4. Projection
db.menu.find({}, { name: 1, price: 1, _id: 0 });

// 5. Delete
db.menu.deleteOne({ item_id: 4 });
