// 1
db.tasks.insertOne({
  task_id: 1,
  title: "Complete Assignment",
  description: "MongoDB practice",
  due_date: "2026-05-01",
  priority: "High",
  is_completed: false
});

// 2
db.tasks.insertMany([
  { task_id: 2, title: "Workout", description: "Gym", due_date: "2026-05-02", priority: "Medium", is_completed: false },
  { task_id: 3, title: "Shopping", description: "Groceries", due_date: "2026-05-03", priority: "Low", is_completed: true },
  { task_id: 4, title: "Study", description: "DBMS", due_date: "2026-05-04", priority: "High", is_completed: false },
  { task_id: 5, title: "Call Friend", description: "Catch up", due_date: "2026-05-02", priority: "Low", is_completed: true },
  { task_id: 6, title: "Project Work", description: "Coding", due_date: "2026-05-05", priority: "Medium", is_completed: false }
]);

// 3
db.tasks.find({ is_completed: false });

// 4
db.tasks.find({}, { title: 1, due_date: 1, _id: 0 });

// 5
db.tasks.deleteOne({ task_id: 3 });
