// 1
db.reviews.insertMany([
  { review_id: 1, course_name: "MongoDB Basics", student_name: "Riya", rating: 5, review_text: "Great", review_date: "2026-01-01", likes_count: 20, is_verified_purchase: false },
  { review_id: 2, course_name: "Python", student_name: "Aman", rating: 3, review_text: "Okay", review_date: "2026-01-02", likes_count: 5, is_verified_purchase: false },
  { review_id: 3, course_name: "MongoDB Advanced", student_name: "Neha", rating: 4, review_text: "Good", review_date: "2026-01-03", likes_count: 15, is_verified_purchase: false },
  { review_id: 4, course_name: "Java", student_name: "Raj", rating: 1, review_text: "Bad", review_date: "2023-01-01", likes_count: 2, is_verified_purchase: false },
  { review_id: 5, course_name: "MongoDB Pro", student_name: "Simran", rating: 5, review_text: "Excellent", review_date: "2026-01-04", likes_count: 30, is_verified_purchase: false }
]);

// 2
db.reviews.find({
  rating: { $gt: 4 },
  likes_count: { $gt: 10 }
});

// 3
db.reviews.updateMany(
  { course_name: { $regex: "MongoDB" } },
  { $set: { is_verified_purchase: true } }
);

// 4
db.reviews.deleteMany({
  review_date: { $lt: "2024-01-01" },
  rating: 1
});

// 5
db.reviews.find({}, { course_name: 1, student_name: 1, rating: 1, _id: 0 })
.sort({ rating: -1 });
