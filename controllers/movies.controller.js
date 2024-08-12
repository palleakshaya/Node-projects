import { v4 as uuidv4 } from "uuid";
import {
  updateMovieById,
  addingMovie,
  deleteMovieById,
  getMovieById,
  getAllMovies,
} from "../services/movies.service.js";

export async function getAllMoviesC(request, response) {
  try {
    const allMovies = await getAllMovies();
    console.log(allMovies);
    response.send(allMovies);
  } catch (error) {
    console.log(error);
    response.status(500).send("Failed to get Movies");
  }
}
export async function getMovieByIdC(request, response) {
  const { id } = request.params;
  console.log(id);
  let res;
  try {
    res = await getMovieById(id);
    if (res.data) {
      response.send(res.data);
    } else {
      response.status(404).send("Movie Not Found");
    }
  } catch (error) {
    response.status(500).send("Failed to get Movies");
  }
}
export async function deleteMovieByIdC(request, response) {
  const { id } = request.params;
  // data = movies.find((movie) => movie.id == id);
  try {
    const result = await getMovieById();
    if (result.data) {
      // movies = movies.filter((movie) => movie.id != id);
      await deleteMovieById(id);
      response.send("Movie deleted successfully");
    } else {
      response.status(404).send("Movie Not Found");
    }
  } catch (error) {
    response.status(500).send("Failed to delete movie");
  }
}
export async function addingMovieC(request, response) {
  const data = request.body;
  console.log(data);
  const addMovie = { ...data, movieId: uuidv4() };
  try {
    await addingMovie(addMovie);
    console.log(addMovie);
    // movies.push({ id: v4(), ...data });
    response.send(addMovie);
  } catch (error) {
    response.status(500).send("Failed to create the movie");
  }
}
export async function updateMovieByIdC(request, response) {
  const { id } = request.params;
  const updateData = request.body;
  try {
    const existingData = await getMovieById(id);
    if (existingData.data) {
      const result = await updateMovieById(existingData, updateData);
      response.send(result);
      console.log(id, existingData.data);
    }
  } catch (error) {
    response.status(500).send("Failed to update the movie");
  }
}
