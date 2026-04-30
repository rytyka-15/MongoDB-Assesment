// 1
db.itinerary.insertMany([
  { itinerary_id: 1, customer_name: "Riya", destination: "Manali", trip_start_date: "2026-06-01", trip_end_date: "2026-06-10", budget: 60000, activities: ["Trekking","Sightseeing"], hotel_name: "ABC", booking_status: "Confirmed" },
  { itinerary_id: 2, customer_name: "Aman", destination: "Goa", trip_start_date: "2025-01-01", trip_end_date: "2025-01-05", budget: 40000, activities: ["Beach"], hotel_name: "XYZ", booking_status: "Cancelled" },
  { itinerary_id: 3, customer_name: "Neha", destination: "Ladakh", trip_start_date: "2026-07-01", trip_end_date: "2026-07-10", budget: 70000, activities: ["Trekking"], hotel_name: "LMN", booking_status: "Confirmed" },
  { itinerary_id: 4, customer_name: "Raj", destination: "Delhi", trip_start_date: "2023-01-01", trip_end_date: "2023-01-05", budget: 20000, activities: ["Shopping"], hotel_name: "DEF", booking_status: "Cancelled" },
  { itinerary_id: 5, customer_name: "Simran", destination: "Kerala", trip_start_date: "2026-08-01", trip_end_date: "2026-08-07", budget: 55000, activities: ["Boating"], hotel_name: "GHI", booking_status: "Pending" }
]);

// 2
db.itinerary.find({
  booking_status: "Confirmed",
  budget: { $gt: 50000 }
});

// 3
db.itinerary.updateMany(
  { trip_start_date: { $lt: new Date() } },
  { $set: { booking_status: "Cancelled" } }
);

// 4
db.itinerary.deleteMany({
  booking_status: "Cancelled",
  trip_end_date: { $lt: "2024-01-01" }
});

// 5
db.itinerary.find({
  activities: "Trekking"
});
