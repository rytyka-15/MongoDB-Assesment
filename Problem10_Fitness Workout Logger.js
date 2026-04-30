// 1
db.workouts.insertOne({
  workout_id: 1,
  exercise_name: "Running",
  duration_minutes: 30,
  calories_burned: 300,
  date: "2026-04-30",
  intensity: "High"
});

// 2
db.workouts.insertMany([
  { workout_id: 2, exercise_name: "Cycling", duration_minutes: 40, calories_burned: 350, date: "2026-04-29", intensity: "Medium" },
  { workout_id: 3, exercise_name: "Yoga", duration_minutes: 60, calories_burned: 200, date: "2026-04-28", intensity: "Low" },
  { workout_id: 4, exercise_name: "Swimming", duration_minutes: 45, calories_burned: 400, date: "2026-04-27", intensity: "High" },
  { workout_id: 5, exercise_name: "Gym", duration_minutes: 50, calories_burned: 450, date: "2026-04-26", intensity: "High" },
  { workout_id: 6, exercise_name: "Walking", duration_minutes: 30, calories_burned: 150, date: "2026-04-25", intensity: "Low" }
]);

// 3
db.workouts.find({ intensity: "High" });

// 4
db.workouts.find({}, { exercise_name: 1, duration_minutes: 1, calories_burned: 1, _id: 0 });

// 5
db.workouts.deleteOne({ workout_id: 3 });
