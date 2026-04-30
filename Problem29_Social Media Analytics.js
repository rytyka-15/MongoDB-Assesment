// 1
db.followers.insertMany([
  { follower_id: 1, follower_name: "Riya", followed_since: "2026-01-01", engagement_score: 90, is_active: true, location: "India", interests: ["Tech","Music"], last_interaction_date: "2026-01-01" },
  { follower_id: 2, follower_name: "Aman", followed_since: "2021-01-01", engagement_score: 10, is_active: true, location: "India", interests: ["Sports"], last_interaction_date: "2023-01-01" },
  { follower_id: 3, follower_name: "Neha", followed_since: "2026-02-01", engagement_score: 85, is_active: true, location: "India", interests: ["Tech"], last_interaction_date: "2026-02-01" },
  { follower_id: 4, follower_name: "Raj", followed_since: "2020-01-01", engagement_score: 15, is_active: true, location: "India", interests: ["Music"], last_interaction_date: "2022-01-01" },
  { follower_id: 5, follower_name: "Simran", followed_since: "2026-03-01", engagement_score: 95, is_active: true, location: "India", interests: ["Tech","Gaming"], last_interaction_date: "2026-03-01" }
]);

// 2
db.followers.find({
  engagement_score: { $gt: 80 },
  is_active: true
});

// 3
db.followers.updateMany(
  { last_interaction_date: { $lt: "2025-01-01" } },
  { $set: { is_active: false } }
);

// 4
db.followers.deleteMany({
  followed_since: { $lt: "2022-01-01" },
  engagement_score: { $lt: 20 }
});

// 5 (Aggregation with unwind)
db.followers.aggregate([
  { $unwind: "$interests" },
  {
    $group: {
      _id: "$interests",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
]);
