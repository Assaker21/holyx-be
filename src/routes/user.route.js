import { Router } from "express";
import {
  create,
  all,
  byId,
  update,
  remove,
} from "../controllers/user.controller.js";

import auth from "../middlewares/auth.middleware.js";
import permit from "../middlewares/permit.middleware.js";

const router = Router();

router.get("/", auth, permit("ADMIN", "PROVIDER"), all);
router.get("/:id", auth, permit("ADMIN", "PROVIDER"), byId);
router.post("/", auth, permit("ADMIN", "PROVIDER"), create);
router.put("/:id", auth, permit("ADMIN", "PROVIDER"), update);
router.delete("/:id", auth, permit("ADMIN", "PROVIDER"), remove);

export default router;
