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
  const device = await prisma.device.findUnique({
    where: { id, providerId: req.user?.providerId || undefined },
    include: { provider: true },
  });

  console.log("HEADERS: ", req.headers);

  const timezone = req.headers.timezone || "UTC";

  const now = new Date();

  const dateFormatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const timeFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  device.dateNow = dateFormatter.format(now); // "2025-02-15"
  device.timeNow = timeFormatter.format(now); // "14:37:22"

  return device;
}
export async function findByCode(req, code) {
  const device = prisma.device.findFirst({
    where: { code, providerId: req.user?.providerId || undefined },
    include: { provider: true },
  });

  console.log("HEADERS: ", req.headers);

  const timezone = req.headers.timezone || "UTC";

  const now = new Date();

  const dateFormatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const timeFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  device.dateNow = dateFormatter.format(now); // "2025-02-15"
  device.timeNow = timeFormatter.format(now); // "14:37:22"

  return device;
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
