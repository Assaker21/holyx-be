import jwt from "jsonwebtoken";
import { prisma } from "./prisma.service.js";
import bcrypt from "bcrypt";

export async function login(email, password) {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const same = bcrypt.compareSync(password, user.password);

  if (!same) {
    throw new Error("Invalid credentials");
  }

  const access = jwt.sign(
    { id: user.id, email: user.email },
    process.env.MODE,
    {
      expiresIn: "1d",
    }
  );

  return { access };
}
