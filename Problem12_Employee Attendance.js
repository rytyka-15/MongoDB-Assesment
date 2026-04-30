// 1
db.attendance.insertMany([
  { record_id: 1, emp_name: "Riya", department: "IT", date: "2026-04-01", status: "Present", check_in_time: "09:00" },
  { record_id: 2, emp_name: "Aman", department: "HR", date: "2026-04-01", status: "Absent", check_in_time: null },
  { record_id: 3, emp_name: "Neha", department: "IT", date: "2026-04-02", status: "Leave", check_in_time: null },
  { record_id: 4, emp_name: "Raj", department: "IT", date: "2026-04-02", status: "Absent", check_in_time: null },
  { record_id: 5, emp_name: "Simran", department: "Finance", date: "2026-04-03", status: "Present", check_in_time: "09:30" }
]);

// 2
db.attendance.find({ status: "Absent", department: "IT" });

// 3
db.attendance.updateMany(
  { check_in_time: { $ne: null } },
  { $set: { status: "Present" } }
);

// 4
db.attendance.deleteMany({
  date: { $lt: "2024-01-01" },
  status: "Leave"
});

// 5
db.attendance.find({ status: "Present" }).sort({ date: 1 });
