import { prisma } from "./prisma.service.js";
import bcrypt from "bcrypt";

export async function create(req, data) {
  if (data.password) {
    data.password = bcrypt.hashSync(data.password, 13);
  } else {
    delete data.password;
  }

  if (req.user?.providerId) data.providerId = req.user?.providerId;

  return prisma.user.create({
    data,
    omit: {
      password: true,
    },
  });
}
export async function findAll(req) {
  return prisma.user.findMany({
    where: { providerId: req.user?.providerId || undefined },
    include: {
      provider: true,
    },
    omit: {
      password: true,
    },
  });
}
export async function findById(req, id) {
  return prisma.user.findUnique({
    where: { id, providerId: req?.user?.providerId || undefined },
    omit: {
      password: true,
    },
  });
}
export async function update(req, id, data) {
  if (req.user?.providerId) data.providerId = req.user?.providerId;

  if (data.password) {
    data.password = bcrypt.hashSync(data.password, 13);
  } else {
    delete data.password;
  }

  return prisma.user.update({
    where: { id, providerId: req.user?.providerId || undefined },
    data,
    omit: {
      password: true,
    },
  });
}
export async function remove(req, id) {
  return prisma.user.delete({
    where: { id, providerId: req.user?.providerId || undefined },
    omit: {
      password: true,
    },
  });
}
