import * as svc from "../services/category.service.js";
import { handleError } from "../utils/handleError.js";

export async function create(req, res) {
  try {
    res.status(201).json(await svc.create(req.body));
  } catch (e) {
    handleError(res, e);
  }
}
export async function all(req, res) {
  try {
    res.json(await svc.findAll());
  } catch (e) {
    handleError(res, e);
  }
}
export async function byId(req, res) {
  try {
    const item = await svc.findById(req.params.id);
    item ? res.json(item) : res.status(404).end();
  } catch (e) {
    handleError(res, e);
  }
}
export async function update(req, res) {
  try {
    res.json(await svc.update(req.params.id, req.body));
  } catch (e) {
    handleError(res, e);
  }
}
export async function remove(req, res) {
  try {
    await svc.remove(req.params.id);
    res.status(204).end();
  } catch (e) {
    handleError(res, e);
  }
}
