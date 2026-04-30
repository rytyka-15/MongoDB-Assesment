// 1
db.rides.insertMany([
  { ride_id: 1, rider_name: "Riya", driver_name: "D1", pickup_location: "A", drop_location: null, ride_date: new Date(), distance_km: 5, fare: 150, ride_status: "Requested" },
  { ride_id: 2, rider_name: "Aman", driver_name: "D2", pickup_location: "B", drop_location: "C", ride_date: new Date(), distance_km: 12, fare: 400, ride_status: "Completed" },
  { ride_id: 3, rider_name: "Neha", driver_name: "D3", pickup_location: "D", drop_location: null, ride_date: new Date(), distance_km: 8, fare: 250, ride_status: "Requested" },
  { ride_id: 4, rider_name: "Raj", driver_name: "D4", pickup_location: "E", drop_location: "F", ride_date: "2024-05-01", distance_km: 15, fare: 500, ride_status: "Cancelled" },
  { ride_id: 5, rider_name: "Simran", driver_name: "D5", pickup_location: "G", drop_location: "H", ride_date: new Date(), distance_km: 20, fare: 600, ride_status: "Accepted" }
]);

// 2
db.rides.find({
  ride_status: "Requested",
  ride_date: new Date()
});

// 3
db.rides.updateMany(
  { drop_location: { $ne: null } },
  { $set: { ride_status: "Completed" } }
);

// 4
db.rides.deleteMany({
  ride_status: "Cancelled",
  ride_date: { $lt: "2024-06-01" }
});

// 5
db.rides.find({
  distance_km: { $gt: 10 },
  fare: { $gt: 300 }
});
