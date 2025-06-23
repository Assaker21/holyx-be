import { Router } from "express";
import {
  create,
  all,
  byId,
  update,
  remove,
} from "../controllers/provider.controller.js";

const router = Router();

router.get("/", all);
router.get("/:id", byId);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
