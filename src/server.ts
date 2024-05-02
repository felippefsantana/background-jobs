import "dotenv/config";
import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(3333, () => {
  console.log(`Server running on http://localhost:3333`);
});