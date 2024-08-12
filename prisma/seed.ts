import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Example: Create some users
  const user1 = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
      password: "password",
      image: { create: {} },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@example.com",
      password: "password",
    },
  });

  console.log({ user1, user2 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
