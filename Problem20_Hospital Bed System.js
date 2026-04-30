// 1
db.beds.insertMany([
  { bed_id: 1, ward_name: "ICU", bed_type: "ICU", is_occupied: false, patient_name: null, admission_date: null, expected_discharge_date: null },
  { bed_id: 2, ward_name: "General", bed_type: "General", is_occupied: true, patient_name: "Aman", admission_date: new Date(), expected_discharge_date: "2026-05-10" },
  { bed_id: 3, ward_name: "ICU", bed_type: "ICU", is_occupied: false, patient_name: null, admission_date: null, expected_discharge_date: null },
  { bed_id: 4, ward_name: "Private", bed_type: "Private", is_occupied: true, patient_name: "Neha", admission_date: "2026-04-01", expected_discharge_date: "2026-04-20" },
  { bed_id: 5, ward_name: "ICU", bed_type: "ICU", is_occupied: true, patient_name: "Raj", admission_date: new Date(), expected_discharge_date: "2026-05-15" }
]);

// 2
db.beds.find({
  is_occupied: false,
  ward_name: "ICU"
});

// 3
db.beds.updateMany(
  { admission_date: new Date() },
  { $set: { is_occupied: true, patient_name: "New Patient" } }
);

// 4
db.beds.deleteMany({
  expected_discharge_date: { $lt: new Date() },
  is_occupied: true
});

// 5
db.beds.find({}, { ward_name: 1, bed_type: 1, is_occupied: 1, _id: 0 })
.sort({ bed_type: 1 });
