import { prisma } from "./prisma.service.js";

export async function create(data) {
  return prisma.device.create({ data });
}
export async function findAll() {
  return prisma.device.findMany({ include: { provider: true } });
}
export async function findById(id) {
  return prisma.device.findUnique({
    where: { id },
    include: { provider: true },
  });
}
export async function findByCode(code) {
  return prisma.device.findFirst({
    where: { code },
    include: { provider: true },
  });
}
export async function update(id, d) {
  return prisma.device.update({ where: { id }, data: d });
}
export async function remove(id) {
  return prisma.device.delete({ where: { id } });
}
