import { prisma } from "./prisma.service.js";

export async function create(req, data) {
  return prisma.category.create({ data });
}
export async function findAll(req) {
  return prisma.category.findMany({ include: { providers: true } });
}
export async function findById(req, id) {
  return prisma.category.findUnique({
    where: { id },
    include: { providers: true },
  });
}
export async function update(req, id, d) {
  return prisma.category.update({ where: { id }, data: d });
}
export async function remove(req, id) {
  return prisma.category.delete({ where: { id } });
}
