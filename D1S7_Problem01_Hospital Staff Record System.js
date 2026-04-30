// 1
db.staff.insertOne({
  staffName: "Dr. Mehta",
  role: "doctor",
  department: "Cardiology",
  salary: 90000,
  shiftTiming: "Morning"
});

// 2
db.staff.insertMany([
  { staffName: "Nurse Asha", role: "nurse", department: "ICU", salary: 40000, shiftTiming: "Night" },
  { staffName: "Dr. Rao", role: "doctor", department: "Orthopedics", salary: 85000, shiftTiming: "Evening" },
  { staffName: "Admin Raj", role: "admin", department: "HR", salary: 50000, shiftTiming: "Morning" },
  { staffName: "Nurse Pooja", role: "nurse", department: "General", salary: 38000, shiftTiming: "Morning" },
  { staffName: "Dr. Khan", role: "doctor", department: "Neurology", salary: 95000, shiftTiming: "Night" }
]);

// 3
db.staff.find();

// 4
db.staff.find({}, { staffName: 1, department: 1, _id: 0 });

// 5
db.staff.deleteOne({ staffName: "Admin Raj" });
