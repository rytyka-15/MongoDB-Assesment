// 1
db.subscriptions.insertMany([
  { sub_id: 1, user_name: "Riya", plan_type: "Basic", monthly_fee: 199, start_date: "2026-01-01", renewal_date: "2026-02-01", is_active: true },
  { sub_id: 2, user_name: "Aman", plan_type: "Premium", monthly_fee: 499, start_date: "2026-01-10", renewal_date: "2026-02-10", is_active: true },
  { sub_id: 3, user_name: "Neha", plan_type: "Standard", monthly_fee: 299, start_date: "2025-12-01", renewal_date: "2026-01-01", is_active: false },
  { sub_id: 4, user_name: "Raj", plan_type: "Basic", monthly_fee: 199, start_date: "2025-11-01", renewal_date: "2025-12-01", is_active: false },
  { sub_id: 5, user_name: "Simran", plan_type: "Premium", monthly_fee: 499, start_date: "2026-02-01", renewal_date: "2026-03-01", is_active: true }
]);

// 2
db.subscriptions.find({ is_active: true, plan_type: "Premium" });

// 3
db.subscriptions.updateMany(
  { plan_type: "Basic" },
  { $inc: { monthly_fee: 100 } }
);

// 4
db.subscriptions.deleteMany({
  is_active: false,
  renewal_date: { $lt: "2025-01-01" }
});

// 5
db.subscriptions.find({}, { user_name: 1, plan_type: 1, monthly_fee: 1, _id: 0 })
.sort({ monthly_fee: -1 });
