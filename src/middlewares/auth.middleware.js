import jwt from "jsonwebtoken";
import { findById } from "../services/user.service.js";

export default async function auth(req, res, next) {
  try {
    const payload = jwt.verify(req.headers.access, process.env.MODE);
    const user = await findById(req, payload.id);

    if (!user) {
      throw new Error("Deleted user");
    }

    req.user = user;

    if (user.role == "ADMIN") {
      req.user.providerId = null;
    }

    next();
  } catch (err) {
    console.log("Auth err: ", err);
    res.sendStatus(403);
  }
}
