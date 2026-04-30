// 1
db.expenses.insertOne({
  expense_id: 1,
  category: "Food",
  amount: 600,
  date: "2026-04-30",
  payment_method: "UPI",
  note: "Dinner"
});

// 2
db.expenses.insertMany([
  { expense_id: 2, category: "Transport", amount: 200, date: "2026-04-29", payment_method: "Cash", note: "Auto" },
  { expense_id: 3, category: "Entertainment", amount: 800, date: "2026-04-28", payment_method: "Card", note: "Movie" },
  { expense_id: 4, category: "Bills", amount: 1500, date: "2026-04-27", payment_method: "UPI", note: "Electricity" },
  { expense_id: 5, category: "Food", amount: 300, date: "2026-04-26", payment_method: "Cash", note: "Snacks" },
  { expense_id: 6, category: "Transport", amount: 700, date: "2026-04-25", payment_method: "Card", note: "Cab" }
]);

// 3
db.expenses.find({ amount: { $gt: 500 } });

// 4
db.expenses.find({}, { category: 1, amount: 1, date: 1, _id: 0 });

// 5
db.expenses.deleteOne({ expense_id: 5 });
