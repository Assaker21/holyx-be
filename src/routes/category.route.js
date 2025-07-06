import { Router } from "express";
import {
  create,
  all,
  byId,
  update,
  remove,
} from "../controllers/category.controller.js";

import auth from "../middlewares/auth.middleware.js";
import permit from "../middlewares/permit.middleware.js";

const router = Router();

router.get("/", all);
router.get("/:id", byId);
router.post("/", auth, permit("ADMIN"), create);
router.put("/:id", auth, permit("ADMIN"), update);
router.delete("/:id", auth, permit("ADMIN"), remove);

export default router;
