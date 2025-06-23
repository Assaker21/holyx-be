import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, _, next) => {
  console.log(`[${new Date().toString()}] ${req.method} ${req.originalUrl}`);
  next();
});

import providerRoutes from "./src/routes/provider.route.js";
import userRoutes from "./src/routes/user.route.js";
import deviceRoutes from "./src/routes/device.route.js";
import categoryRoutes from "./src/routes/category.route.js";

app.use("/providers", providerRoutes);
app.use("/users", userRoutes);
app.use("/devices", deviceRoutes);
app.use("/categories", categoryRoutes);

app.listen(3000, () => {
  console.log("Listening on 3000");
});
