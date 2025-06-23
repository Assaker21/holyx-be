import { Router } from "express";
import {
  create,
  all,
  byId,
  byCode,
  update,
  remove,
} from "../controllers/device.controller.js";

const router = Router();

router.get("/", all);
//router.get("/:id", byId);
router.get("/:code", byCode);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
