// 1
db.defects.insertMany([
  { defect_id: 1, product_name: "ProdA", batch_number: "B1", defect_type: "Functional", detection_date: "2026-01-01", severity: "High", quantity_affected: 50, root_cause: "Design", status: "Open", resolution_date: null },
  { defect_id: 2, product_name: "ProdB", batch_number: "B2", defect_type: "Cosmetic", detection_date: "2025-01-01", severity: "Low", quantity_affected: 10, root_cause: "Material", status: "Resolved", resolution_date: "2025-02-01" },
  { defect_id: 3, product_name: "ProdC", batch_number: "B3", defect_type: "Safety", detection_date: "2026-02-01", severity: "High", quantity_affected: 30, root_cause: "Process", status: "Open", resolution_date: null },
  { defect_id: 4, product_name: "ProdD", batch_number: "B4", defect_type: "Functional", detection_date: "2021-01-01", severity: "Medium", quantity_affected: 20, root_cause: "Unknown", status: "Resolved", resolution_date: "2021-02-01" },
  { defect_id: 5, product_name: "ProdE", batch_number: "B5", defect_type: "Safety", detection_date: "2026-03-01", severity: "Low", quantity_affected: 5, root_cause: "Design", status: "Investigating", resolution_date: null }
]);

// 2
db.defects.find({
  severity: "High",
  status: "Open"
});

// 3
db.defects.updateMany(
  { root_cause: { $ne: "Unknown" } },
  { $set: { status: "Resolved", resolution_date: new Date() } }
);

// 4
db.defects.deleteMany({
  detection_date: { $lt: "2022-01-01" },
  status: "Resolved"
});

// 5 (Aggregation)
db.defects.aggregate([
  {
    $group: {
      _id: "$defect_type",
      total_quantity: { $sum: "$quantity_affected" }
    }
  },
  { $sort: { total_quantity: -1 } }
]);
