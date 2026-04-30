// 1
db.parcels.insertOne({
  parcel_id: 1,
  sender_name: "Riya",
  receiver_name: "Aman",
  weight: 2,
  shipping_cost: 200,
  booking_date: "2026-04-01",
  delivery_status: "Pending"
});

// 2
db.parcels.insertMany([
  { parcel_id: 2, sender_name: "Neha", receiver_name: "Raj", weight: 1, shipping_cost: 150, booking_date: "2026-04-02", delivery_status: "Shipped" },
  { parcel_id: 3, sender_name: "Simran", receiver_name: "Arjun", weight: 3, shipping_cost: 300, booking_date: "2026-04-03", delivery_status: "Pending" },
  { parcel_id: 4, sender_name: "Priya", receiver_name: "Karan", weight: 2, shipping_cost: 250, booking_date: "2026-04-04", delivery_status: "Delivered" },
  { parcel_id: 5, sender_name: "Ankit", receiver_name: "Rohit", weight: 4, shipping_cost: 400, booking_date: "2026-04-05", delivery_status: "Pending" },
  { parcel_id: 6, sender_name: "Pooja", receiver_name: "Meena", weight: 2, shipping_cost: 220, booking_date: "2026-04-06", delivery_status: "Shipped" }
]);

// 3
db.parcels.find({ delivery_status: "Pending" });

// 4
db.parcels.find({}, { sender_name: 1, receiver_name: 1, shipping_cost: 1, _id: 0 });

// 5
db.parcels.deleteOne({ parcel_id: 4 });
