import { prisma } from "./prisma.service.js";

export async function create(data) {
  return prisma.provider.create({ data });
}
export async function findAll() {
  return prisma.provider.findMany({
    include: { category: true, devices: true, users: true },
  });
}
export async function findById(id) {
  return prisma.provider.findUnique({
    where: { id },
    include: { category: true, devices: true, users: true },
  });
}
export async function update(id, d) {
  return prisma.provider.update({ where: { id }, data: d });
}
export async function remove(id) {
  return prisma.provider.delete({ where: { id } });
}
