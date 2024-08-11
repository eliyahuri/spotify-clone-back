import type { Prisma } from "@prisma/client";
import prisma from "../prisma";

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({ where: { id } });
};

export const createUser = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.create({ data });
};
