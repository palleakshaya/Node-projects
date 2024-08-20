// const express = require("express");
// const { v4 } = require("uuid");
// var cors = require("cors");
import express from "express";
import cors from "cors";
import { v4 } from "uuid";
import moviesRouter from "./routes/movies.route.js";
import usersRouter from "./routes/users.route.js";

// const os = require("os");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4000;

// hello
let a = 0;
app.use(cors());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

// app.put("/movies/:id", express.json(), function (request, response) {
//   const { id } = request.params;
//   const data = request.body;
//   const movieIdx = movies.findIndex((mv)=> mv.id==id)
//   if (movieIdx) {
//     console.error("Error updating file:", err);
//     return res.status(500).send("Error updating file");
//   }
//   res.send("File updated successfully");
// });

app.use("/movies", moviesRouter);
app.use("/users", usersRouter);
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
