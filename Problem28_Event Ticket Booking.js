// 1
db.bookings.insertMany([
  { booking_id: 1, event_name: "Concert", event_date: "2026-11-01", venue: "HallA", customer_name: "Riya", ticket_type: "VIP", number_of_tickets: 2, total_price: 2000, booking_date: "2026-01-01", payment_status: "Paid" },
  { booking_id: 2, event_name: "Show", event_date: "2023-01-01", venue: "HallB", customer_name: "Aman", ticket_type: "General", number_of_tickets: 1, total_price: 500, booking_date: "2023-01-01", payment_status: "Pending" },
  { booking_id: 3, event_name: "Concert", event_date: "2026-12-01", venue: "HallA", customer_name: "Neha", ticket_type: "Student", number_of_tickets: 3, total_price: 1500, booking_date: "2026-02-01", payment_status: "Paid" },
  { booking_id: 4, event_name: "Play", event_date: "2024-01-01", venue: "HallC", customer_name: "Raj", ticket_type: "VIP", number_of_tickets: 2, total_price: 1000, booking_date: "2024-01-01", payment_status: "Paid" },
  { booking_id: 5, event_name: "Concert", event_date: "2026-09-01", venue: "HallA", customer_name: "Simran", ticket_type: "General", number_of_tickets: 4, total_price: 2000, booking_date: "2026-03-01", payment_status: "Paid" }
]);

// 2
db.bookings.find({
  event_date: { $gt: "2026-10-01" },
  payment_status: "Paid"
});

// 3
db.bookings.updateMany(
  { event_date: { $lt: new Date() }, payment_status: "Paid" },
  { $set: { payment_status: "Refunded" } }
);

// 4
db.bookings.deleteMany({
  payment_status: "Pending",
  booking_date: { $lt: "2024-01-01" }
});

// 5 (Aggregation)
db.bookings.aggregate([
  {
    $group: {
      _id: "$event_name",
      total_tickets: { $sum: "$number_of_tickets" }
    }
  }
]);
