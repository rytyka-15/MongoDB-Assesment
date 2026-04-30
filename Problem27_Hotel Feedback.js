// 1
db.feedback.insertMany([
  { feedback_id: 1, guest_name: "Riya", hotel_name: "HotelA", room_number: 101, stay_dates: "2026-01", cleanliness_rating: 5, service_rating: 4, overall_rating: 5, comments: "Good", feedback_date: "2026-01-01", would_recommend: true },
  { feedback_id: 2, guest_name: "Aman", hotel_name: "HotelA", room_number: 102, stay_dates: "2026-01", cleanliness_rating: 2, service_rating: 2, overall_rating: 2, comments: "Bad", feedback_date: "2026-01-02", would_recommend: false },
  { feedback_id: 3, guest_name: "Neha", hotel_name: "HotelB", room_number: 201, stay_dates: "2026-02", cleanliness_rating: 4, service_rating: 5, overall_rating: 4, comments: "Nice", feedback_date: "2026-02-01", would_recommend: true },
  { feedback_id: 4, guest_name: "Raj", hotel_name: "HotelB", room_number: 202, stay_dates: "2023-01", cleanliness_rating: 1, service_rating: 1, overall_rating: 1, comments: "Worst", feedback_date: "2023-01-01", would_recommend: false },
  { feedback_id: 5, guest_name: "Simran", hotel_name: "HotelA", room_number: 103, stay_dates: "2026-03", cleanliness_rating: 5, service_rating: 5, overall_rating: 5, comments: "Excellent", feedback_date: "2026-03-01", would_recommend: true }
]);

// 2
db.feedback.find({
  overall_rating: { $lt: 3 },
  would_recommend: false
});

// 3
db.feedback.updateMany(
  { overall_rating: { $gt: 4 } },
  { $set: { would_recommend: true } }
);

// 4
db.feedback.deleteMany({
  feedback_date: { $lt: "2023-01-01" },
  overall_rating: 1
});

// 5 (Aggregation)
db.feedback.aggregate([
  {
    $group: {
      _id: "$hotel_name",
      avg_cleanliness: { $avg: "$cleanliness_rating" },
      avg_service: { $avg: "$service_rating" }
    }
  }
]);
