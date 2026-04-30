// 1
db.parking.insertOne({
  slot_id: 1,
  floor: 1,
  vehicle_type: "Car",
  is_occupied: false,
  vehicle_number: null
});

// 2
db.parking.insertMany([
  { slot_id: 2, floor: 1, vehicle_type: "Bike", is_occupied: true, vehicle_number: "KA01AB1234" },
  { slot_id: 3, floor: 2, vehicle_type: "Car", is_occupied: false, vehicle_number: null },
  { slot_id: 4, floor: 2, vehicle_type: "Bike", is_occupied: true, vehicle_number: "KA02CD5678" },
  { slot_id: 5, floor: 3, vehicle_type: "Car", is_occupied: false, vehicle_number: null },
  { slot_id: 6, floor: 3, vehicle_type: "Bike", is_occupied: false, vehicle_number: null }
]);

// 3
db.parking.find({ is_occupied: false });

// 4
db.parking.find({}, { slot_id: 1, floor: 1, vehicle_type: 1, _id: 0 });

// 5
db.parking.deleteOne({ slot_id: 2 });
