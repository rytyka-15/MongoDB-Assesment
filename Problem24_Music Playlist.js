// 1
db.playlists.insertMany([
  { playlist_id: 1, user_name: "Riya", playlist_name: "Hits", songs: [{title:"Song1",artist:"A"}], created_date: "2026-01-01", total_duration_minutes: 60, is_public: true, play_count: 200 },
  { playlist_id: 2, user_name: "Aman", playlist_name: "Chill", songs: [{title:"Song2",artist:"B"}], created_date: "2022-01-01", total_duration_minutes: 40, is_public: false, play_count: 50 },
  { playlist_id: 3, user_name: "Riya", playlist_name: "Workout", songs: [{title:"Song3",artist:"C"}], created_date: "2026-02-01", total_duration_minutes: 70, is_public: true, play_count: 150 },
  { playlist_id: 4, user_name: "Neha", playlist_name: "Focus", songs: [{title:"Song4",artist:"D"}], created_date: "2023-01-01", total_duration_minutes: 30, is_public: false, play_count: 80 },
  { playlist_id: 5, user_name: "Raj", playlist_name: "Party", songs: [{title:"Song5",artist:"E"}], created_date: "2026-03-01", total_duration_minutes: 90, is_public: true, play_count: 300 }
]);

// 2
db.playlists.find({
  is_public: true,
  play_count: { $gt: 100 }
});

// 3
db.playlists.updateOne(
  { playlist_id: 1 },
  { $inc: { play_count: 1 } }
);

// 4
db.playlists.deleteMany({
  created_date: { $lt: "2023-01-01" },
  is_public: false
});

// 5 (Aggregation)
db.playlists.aggregate([
  {
    $group: {
      _id: "$user_name",
      avg_duration: { $avg: "$total_duration_minutes" }
    }
  }
]);
