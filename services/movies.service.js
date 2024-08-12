import { Movies } from "../entities/movies.entity.js";
async function updateMovieById(existingData, updateData) {
  return await Movies.put({
    ...existingData.data,
    ...updateData,
  }).go();
}

async function addingMovie(addMovie) {
  await Movies.create(addMovie).go();
}

async function deleteMovieById(id) {
  await Movies.delete({ movieId: id }).go();
}

async function getMovieById(id) {
  return await Movies.get({ movieId: id }).go();
}

async function getAllMovies() {
  return await Movies.scan.go();
}

export {
  updateMovieById,
  addingMovie,
  deleteMovieById,
  getMovieById,
  getAllMovies,
};
