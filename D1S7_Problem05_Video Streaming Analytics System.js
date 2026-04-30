// 1
db.videoLogs.insertMany([
  { userId: 1, videoId: 101, watchTime: 30, deviceType: "Mobile", timestamp: new Date() },
  { userId: 2, videoId: 102, watchTime: 60, deviceType: "Laptop", timestamp: new Date() },
  { userId: 1, videoId: 103, watchTime: 10, deviceType: "Tablet", timestamp: new Date() },
  { userId: 3, videoId: 101, watchTime: 45, deviceType: "Mobile", timestamp: new Date() },
  { userId: 2, videoId: 104, watchTime: 20, deviceType: "Mobile", timestamp: new Date() }
]);

// 2
db.videoLogs.find({ userId: 1 });

// 3
db.videoLogs.find({
  watchTime: { $gt: 20 },
  deviceType: "Mobile"
});

// 4 (Indexes)
db.videoLogs.createIndex({ userId: 1 });
db.videoLogs.createIndex({ videoId: 1 });

// 5 (Explain)
db.videoLogs.find({ userId: 1 }).explain("executionStats");
