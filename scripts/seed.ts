import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create an image
  const image1 = await prisma.image.create({
    data: {
      url: "https://via.placeholder.com/150",
    },
  });

  // Create a user
  const user1 = await prisma.user.create({
    data: {
      email: "user1@example.com",
      name: "User One",
      password: "password123", // Ideally, this should be hashed
      image: { connect: { id: image1.id } },
    },
  });

  // Create a playlist for the user
  const playlist1 = await prisma.playlist.create({
    data: {
      name: "My First Playlist",
      userId: user1.id,
    },
  });

  // Create songs for the playlist
  const song1 = await prisma.song.create({
    data: {
      name: "Song One",
      artist: "Artist One",
      playlist: { connect: { id: playlist1.id } },
    },
  });

  const song2 = await prisma.song.create({
    data: {
      name: "Song Two",
      artist: "Artist Two",
      playlist: { connect: { id: playlist1.id } },
    },
  });

  console.log({ user1, playlist1, song1, song2 });
}

main()
  .then(() => {
    console.log("Seeding finished.");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
