import express from "express";

import movieController from "../controllers/movies.controller.js";
const app = express.Router();

app.use(express.json());

app.get("/",movieController.MovieIndex);


app.post("/",movieController.MoviePost);

app.put("/:id",movieController.MovieUpdate);


app.delete("/:id",movieController.MovieDelete);

export default app;