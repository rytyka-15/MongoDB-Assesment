// 1
db.giftcards.insertOne({
  card_id: 1,
  recipient_name: "Riya",
  sender_name: "Aman",
  amount: 1000,
  purchase_date: "2026-04-01",
  expiry_date: "2026-12-31",
  is_used: false
});

// 2
db.giftcards.insertMany([
  { card_id: 2, recipient_name: "Neha", sender_name: "Raj", amount: 500, purchase_date: "2026-03-01", expiry_date: "2026-10-01", is_used: false },
  { card_id: 3, recipient_name: "Simran", sender_name: "Arjun", amount: 1500, purchase_date: "2026-02-01", expiry_date: "2026-09-01", is_used: true },
  { card_id: 4, recipient_name: "Priya", sender_name: "Karan", amount: 2000, purchase_date: "2026-01-01", expiry_date: "2026-08-01", is_used: false },
  { card_id: 5, recipient_name: "Ankit", sender_name: "Rohit", amount: 750, purchase_date: "2026-04-15", expiry_date: "2026-11-15", is_used: false },
  { card_id: 6, recipient_name: "Pooja", sender_name: "Meena", amount: 1200, purchase_date: "2026-04-10", expiry_date: "2026-07-10", is_used: true }
]);

// 3
db.giftcards.find({
  is_used: false,
  expiry_date: { $gt: new Date() }
});

// 4
db.giftcards.find({}, { recipient_name: 1, amount: 1, expiry_date: 1, _id: 0 });

// 5
db.giftcards.deleteOne({ card_id: 3 });
