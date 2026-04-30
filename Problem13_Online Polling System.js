// 1
db.polls.insertMany([
  { poll_id: 1, question: "Fav color?", options: ["Red","Blue"], votes: [10,15], created_date: "2026-01-01", end_date: "2026-12-01", is_active: true },
  { poll_id: 2, question: "Best food?", options: ["Pizza","Burger","Pasta"], votes: [20,25,15], created_date: "2026-01-01", end_date: "2026-05-01", is_active: true },
  { poll_id: 3, question: "Fav sport?", options: ["Cricket","Football"], votes: [30,20], created_date: "2025-01-01", end_date: "2025-06-01", is_active: false },
  { poll_id: 4, question: "Best movie?", options: ["A","B","C","D"], votes: [5,10,15,20], created_date: "2026-02-01", end_date: "2026-03-01", is_active: true },
  { poll_id: 5, question: "Tea or Coffee?", options: ["Tea","Coffee"], votes: [40,50], created_date: "2026-01-15", end_date: "2026-06-01", is_active: true }
]);

// 2
db.polls.find({
  is_active: true,
  end_date: { $gt: new Date() }
});

// 3
db.polls.updateMany(
  { end_date: { $lt: new Date() } },
  { $set: { is_active: false } }
);

// 4
db.polls.deleteMany({
  created_date: { $lt: "2023-01-01" },
  is_active: false
});

// 5
db.polls.find({
  $expr: { $gt: [{ $size: "$options" }, 3] }
});
