// 1 → Collections: passengers, flights, bookings

// passengers
db.passengers.insertMany([
  { passengerId: 1, name: "Riya" },
  { passengerId: 2, name: "Aman" }
]);

// flights
db.flights.insertMany([
  { flightId: 101, source: "Delhi", destination: "Mumbai" },
  { flightId: 102, source: "Bangalore", destination: "Goa" }
]);

// bookings (reference both)
db.bookings.insertMany([
  { bookingId: 1, passengerId: 1, flightId: 101, seatNo: "12A", class: "Economy", status: "Confirmed" },
  { bookingId: 2, passengerId: 1, flightId: 102, seatNo: "5B", class: "Business", status: "Pending" },
  { bookingId: 3, passengerId: 2, flightId: 101, seatNo: "14C", class: "Economy", status: "Confirmed" }
]);

// 3
db.bookings.find({ passengerId: 1 });

// 4
db.bookings.updateMany(
  { status: "Pending" },
  { $set: { status: "Confirmed" } }
);
