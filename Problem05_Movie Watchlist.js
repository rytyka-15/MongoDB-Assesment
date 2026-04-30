// 1
db.watchlist.insertOne({
  movie_id: 1,
  title: "Inception",
  genre: "Sci-Fi",
  release_year: 2010,
  imdb_rating: 8.8,
  watched: false
});

// 2
db.watchlist.insertMany([
  { movie_id: 2, title: "Titanic", genre: "Romance", release_year: 1997, imdb_rating: 7.8, watched: true },
  { movie_id: 3, title: "Avengers", genre: "Action", release_year: 2012, imdb_rating: 8.0, watched: false },
  { movie_id: 4, title: "Joker", genre: "Drama", release_year: 2019, imdb_rating: 8.4, watched: false },
  { movie_id: 5, title: "Frozen", genre: "Animation", release_year: 2013, imdb_rating: 7.5, watched: true },
  { movie_id: 6, title: "Interstellar", genre: "Sci-Fi", release_year: 2014, imdb_rating: 8.6, watched: false }
]);

// 3
db.watchlist.find({ watched: false });

// 4
db.watchlist.find({}, { title: 1, genre: 1, imdb_rating: 1, _id: 0 });

// 5
db.watchlist.deleteOne({ movie_id: 2 });
