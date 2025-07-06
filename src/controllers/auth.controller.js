import * as svc from "../services/auth.service.js";
import { handleError } from "../utils/handleError.js";

export async function login(req, res) {
  try {
    res.status(200).json(await svc.login(req.body.email, req.body.password));
  } catch (e) {
    handleError(res, e);
  }
}

export async function profile(req, res) {
  try {
    res.status(200).json(req.user);
  } catch (e) {
    handleError(res, e);
  }
}
