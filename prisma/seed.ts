import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("password123", 12);
  const user = await prisma.user.upsert({
    where: { email: "admin@admin.com" },
    update: {},
    create: {
      email: "admin@admin.com",
      name: "Admin",
      password,
    },
  });
  const storeOrg = await prisma.storeOrg.upsert({
    where: {
      id: "1",
    },
    update: {},
    create: {
      name: "Dassa",
      User: {
        connect: {
          id: user.id,
        },
      },
    },
  });
  console.log({ user, storeOrg });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
