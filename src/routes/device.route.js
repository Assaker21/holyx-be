import { Router } from "express";
import {
  create,
  all,
  byCode,
  update,
  remove,
} from "../controllers/device.controller.js";
import auth from "../middlewares/auth.middleware.js";
import permit from "../middlewares/permit.middleware.js";

const router = Router();

router.get("/", auth, permit("ADMIN", "PROVIDER"), all);
//router.get("/:id", byId);
router.get("/:code", byCode);
router.post("/", auth, permit("ADMIN"), create);
router.put("/:id", auth, permit("ADMIN", "PROVIDER"), update);
router.delete("/:id", auth, permit("ADMIN", "PROVIDER"), remove);

export default router;
