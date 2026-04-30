// 1
db.contacts.insertOne({
  contact_id: 1,
  first_name: "Riya",
  last_name: "Sharma",
  phone: "9876543210",
  email: "riya@gmail.com",
  city: "Mumbai"
});

// 2
db.contacts.insertMany([
  { contact_id: 2, first_name: "Aman", last_name: "Verma", phone: "9999999999", email: "aman@gmail.com", city: "Delhi" },
  { contact_id: 3, first_name: "Neha", last_name: "Singh", phone: "8888888888", email: "neha@gmail.com", city: "Mumbai" },
  { contact_id: 4, first_name: "Raj", last_name: "Kumar", phone: "7777777777", email: "raj@gmail.com", city: "Pune" },
  { contact_id: 5, first_name: "Simran", last_name: "Kaur", phone: "6666666666", email: "simran@gmail.com", city: "Mumbai" },
  { contact_id: 6, first_name: "Arjun", last_name: "Patel", phone: "5555555555", email: "arjun@gmail.com", city: "Ahmedabad" }
]);

// 3
db.contacts.find({ city: "Mumbai" });

// 4
db.contacts.find({}, { first_name: 1, last_name: 1, phone: 1, _id: 0 });

// 5
db.contacts.deleteOne({ contact_id: 3 });
