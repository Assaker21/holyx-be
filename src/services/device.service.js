import { prisma } from "./prisma.service.js";

export async function create(req, data) {
  if (req.user?.providerId) data.providerId = req.user?.providerId;
  return prisma.device.create({ data });
}
export async function findAll(req) {
  return prisma.device.findMany({
    where: {
      providerId: req.user?.providerId || undefined,
    },
    include: { provider: true },
  });
}
export async function findById(req, id) {
  return prisma.device.findUnique({
    where: { id, providerId: req.user?.providerId || undefined },
    include: { provider: true },
  });
}
export async function findByCode(req, code) {
  return prisma.device.findFirst({
    where: { code, providerId: req.user?.providerId || undefined },
    include: { provider: true },
  });
}
export async function update(req, id, data) {
  if (req.user?.providerId) data.providerId = req.user?.providerId;
  return prisma.device.update({
    where: { id, providerId: req.user?.providerId || undefined },
    data,
  });
}
export async function remove(req, id) {
  return prisma.device.delete({
    where: { id, providerId: req.user?.providerId || undefined },
  });
}
