import { prisma } from "./prisma.service.js";

export async function create(data) {
  console.log("DATA: ", data);
  return prisma.category.create({ data });
}
export async function findAll() {
  return prisma.category.findMany({ include: { providers: true } });
}
export async function findById(id) {
  return prisma.category.findUnique({
    where: { id },
    include: { providers: true },
  });
}
export async function update(id, d) {
  return prisma.category.update({ where: { id }, data: d });
}
export async function remove(id) {
  return prisma.category.delete({ where: { id } });
}
