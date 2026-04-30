// 1
db.prescriptions.insertMany([
  { prescription_id: 1, patient_name: "Riya", doctor_name: "Dr A", medicine_name: "Med1", dosage: "2/day", issue_date: "2026-01-01", expiry_date: "2026-12-01", status: "Active" },
  { prescription_id: 2, patient_name: "Aman", doctor_name: "Dr B", medicine_name: "Med2", dosage: "1/day", issue_date: "2025-01-01", expiry_date: "2025-06-01", status: "Expired" },
  { prescription_id: 3, patient_name: "Neha", doctor_name: "Dr C", medicine_name: "Med3", dosage: "3/day", issue_date: "2026-02-01", expiry_date: "2026-08-01", status: "Active" },
  { prescription_id: 4, patient_name: "Raj", doctor_name: "Dr D", medicine_name: "Med4", dosage: "1/day", issue_date: "2024-01-01", expiry_date: "2024-06-01", status: "Fulfilled" },
  { prescription_id: 5, patient_name: "Simran", doctor_name: "Dr E", medicine_name: "Med5", dosage: "2/day", issue_date: "2026-03-01", expiry_date: "2026-09-01", status: "Active" }
]);

// 2
db.prescriptions.find({
  status: "Active",
  expiry_date: { $gt: new Date() }
});

// 3
db.prescriptions.updateMany(
  { expiry_date: { $lt: new Date() } },
  { $set: { status: "Expired" } }
);

// 4
db.prescriptions.deleteMany({
  status: "Fulfilled",
  issue_date: { $lt: "2024-01-01" }
});

// 5
db.prescriptions.find({}, { patient_name: 1, medicine_name: 1, status: 1, _id: 0 })
.sort({ issue_date: -1 });
