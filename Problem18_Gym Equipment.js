// 1
db.equipment.insertMany([
  { equip_id: 1, equip_name: "Treadmill", category: "Cardio", purchase_date: "2018-01-01", last_maintenance_date: "2026-01-01", next_maintenance_date: "2026-06-01", condition: "Good" },
  { equip_id: 2, equip_name: "Bench", category: "Strength", purchase_date: "2010-01-01", last_maintenance_date: "2024-01-01", next_maintenance_date: "2024-06-01", condition: "NeedsService" },
  { equip_id: 3, equip_name: "Cycle", category: "Cardio", purchase_date: "2016-01-01", last_maintenance_date: "2025-02-01", next_maintenance_date: "2025-08-01", condition: "OutOfOrder" },
  { equip_id: 4, equip_name: "Dumbbell", category: "Strength", purchase_date: "2020-01-01", last_maintenance_date: "2026-02-01", next_maintenance_date: "2026-07-01", condition: "Good" },
  { equip_id: 5, equip_name: "Row Machine", category: "Cardio", purchase_date: "2012-01-01", last_maintenance_date: "2023-01-01", next_maintenance_date: "2023-06-01", condition: "NeedsService" }
]);

// 2
db.equipment.find({
  condition: { $in: ["NeedsService", "OutOfOrder"] }
});

// 3
db.equipment.updateMany(
  { last_maintenance_date: { $gt: "2025-01-01" } },
  { $set: { condition: "Good" } }
);

// 4
db.equipment.deleteMany({
  purchase_date: { $lt: "2015-01-01" },
  condition: "OutOfOrder"
});

// 5
db.equipment.find().sort({ next_maintenance_date: 1 });
