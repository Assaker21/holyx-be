import { Router } from "express";
import { login, profile } from "../controllers/auth.controller.js";
import auth from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/login", login);
router.get("/profile", auth, profile);

export default router;
