import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.mSTR_PRIO.createMany({
    data: [
      { mstr_prio_desc: "Low" },
      { mstr_prio_desc: "Medium" },
      { mstr_prio_desc: "High" },
    ],
    skipDuplicates: true,
  });

  await prisma.mSTR_STATUS.createMany({
    data: [
      { mstr_status_desc: "Pending" },
      { mstr_status_desc: "On Work" },
      { mstr_status_desc: "Done" },
      { mstr_status_desc: "On Revision" },
    ],
    skipDuplicates: true,
  });

  await prisma.mSTR_ACTV.createMany({
    data: [{ mstr_actv_desc: "Task" }],
    skipDuplicates: true,
  });

  await prisma.tBL_USER.createMany({
    data: [
      {
        tbl_user_username: "admin",
        tbl_user_email: "admin99999@yopmail.com",
        tbl_user_password: "admin",
        tbl_user_updatedAt: new Date(),
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
