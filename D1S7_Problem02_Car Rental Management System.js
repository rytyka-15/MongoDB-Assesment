// 1
db.cars.insertMany([
  { carId: 1, model: "Creta", type: "SUV", rentalPricePerDay: 3000, availabilityStatus: true, rating: 4.5 },
  { carId: 2, model: "City", type: "Sedan", rentalPricePerDay: 2500, availabilityStatus: true, rating: 4.2 },
  { carId: 3, model: "XUV700", type: "SUV", rentalPricePerDay: 4000, availabilityStatus: false, rating: 4.8 },
  { carId: 4, model: "Swift", type: "Sedan", rentalPricePerDay: 1500, availabilityStatus: true, rating: 4.0 },
  { carId: 5, model: "Harrier", type: "SUV", rentalPricePerDay: 3500, availabilityStatus: true, rating: 4.6 }
]);

// 2
db.cars.find({ type: "SUV" });

// 3
db.cars.find({
  rentalPricePerDay: { $gte: 2000, $lte: 3500 }
});

// 4
db.cars.find().sort({ rating: -1 });

// 5
db.cars.updateMany(
  { availabilityStatus: true },
  { $set: { availabilityStatus: false } }
);
