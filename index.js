import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
// app.set("trust proxy", true);

app.use((req, _, next) => {
  console.log(
    `[${req.ip}] [${new Date().toLocaleString().replace(",", "")}] ${
      req.method
    } ${req.originalUrl}`
  );
  next();
});

import providerRoutes from "./src/routes/provider.route.js";
import userRoutes from "./src/routes/user.route.js";
import deviceRoutes from "./src/routes/device.route.js";
import categoryRoutes from "./src/routes/category.route.js";
import authRoutes from "./src/routes/auth.route.js";

app.use("/providers", providerRoutes);
app.use("/users", userRoutes);
app.use("/devices", deviceRoutes);
app.use("/categories", categoryRoutes);
app.use("/", authRoutes);
app.use("/", (req, res) => res.send("Running"));

app.listen(3000, () => {
  console.log("Listening on 2188");
});
