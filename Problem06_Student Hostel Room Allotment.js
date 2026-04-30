// 1
db.hostel.insertOne({
  student_id: 1,
  name: "Ritika",
  room_number: 101,
  block_name: "A",
  bed_number: 1,
  check_in_date: "2026-04-01"
});

// 2
db.hostel.insertMany([
  { student_id: 2, name: "Aman", room_number: 102, block_name: "B", bed_number: 2, check_in_date: "2026-04-02" },
  { student_id: 3, name: "Neha", room_number: 103, block_name: "A", bed_number: 1, check_in_date: "2026-04-03" },
  { student_id: 4, name: "Raj", room_number: 104, block_name: "C", bed_number: 2, check_in_date: "2026-04-04" },
  { student_id: 5, name: "Simran", room_number: 105, block_name: "A", bed_number: 1, check_in_date: "2026-04-05" },
  { student_id: 6, name: "Arjun", room_number: 106, block_name: "B", bed_number: 2, check_in_date: "2026-04-06" }
]);

// 3
db.hostel.find({ block_name: "A" });

// 4
db.hostel.find({}, { name: 1, room_number: 1, block_name: 1, _id: 0 });

// 5
db.hostel.deleteOne({ student_id: 4 });
