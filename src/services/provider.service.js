import { prisma } from "./prisma.service.js";

export async function create(req, data) {
  return prisma.provider.create({ data });
}
export async function findAll(req) {
  return prisma.provider.findMany({
    where: {
      id: req.user.providerId || undefined,
    },
    include: { category: true, devices: true, users: true },
  });
}
export async function findById(req, id) {
  return prisma.provider.findUnique({
    where: { id: req.user.providerId || id },
    include: { category: true, devices: true, users: true },
  });
}
export async function update(req, id, data) {
  return prisma.provider.update({
    where: { id: req.user.providerId || id },
    data,
  });
}
export async function remove(req, id) {
  return prisma.provider.delete({ where: { id: req.user.providerId || id } });
}
