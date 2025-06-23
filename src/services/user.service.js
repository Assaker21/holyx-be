import { prisma } from "./prisma.service.js";

export async function create(data) {
  return prisma.user.create({ data });
}
export async function findAll() {
  return prisma.user.findMany({
    include: {
      provider: true,
    },
  });
}
export async function findById(id) {
  return prisma.user.findUnique({ where: { id } });
}
export async function update(id, d) {
  return prisma.user.update({ where: { id }, data: d });
}
export async function remove(id) {
  return prisma.user.delete({ where: { id } });
}
