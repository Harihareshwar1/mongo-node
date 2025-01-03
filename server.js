import mongoose
 from "mongoose";

 import express from "express";
import movieRoutes from "./routes/movies.route.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import connect
 from "./lib/db.js";

 connect();
app.use('/movies', movieRoutes);
app.listen(3000, () => {    console.log("Server is running on https://localhost:3000");});