// 1
db.playlists.insertMany([
  {
    userId: 1,
    playlistName: "Chill",
    songs: ["Song1", "Song2"],
    totalDuration: 40,
    createdDate: "2026-01-01"
  },
  {
    userId: 2,
    playlistName: "Workout",
    songs: ["Song3"],
    totalDuration: 20,
    createdDate: "2026-02-01"
  }
]);

// 2
db.playlists.find({ userId: 1 });

// 3
db.playlists.updateOne(
  { playlistName: "Chill" },
  { $push: { songs: "Song4" } }
);

// 4
db.playlists.updateOne(
  { playlistName: "Chill" },
  { $set: { totalDuration: 60 } }
);

// 5
db.playlists.deleteMany({
  songs: { $size: 0 }
});
