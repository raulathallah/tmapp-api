-- CreateTable
CREATE TABLE "TBL_CMTS" (
    "tbl_cmts_id" SERIAL NOT NULL,
    "tbl_cmts_taskId" INTEGER NOT NULL,
    "tbl_cmts_userId" INTEGER NOT NULL,
    "tbl_cmts_desc" VARCHAR(255) NOT NULL,
    "tbl_cmts_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tbl_cmts_updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TBL_CMTS_pkey" PRIMARY KEY ("tbl_cmts_id")
);

-- AddForeignKey
ALTER TABLE "TBL_CMTS" ADD CONSTRAINT "TBL_CMTS_tbl_cmts_taskId_fkey" FOREIGN KEY ("tbl_cmts_taskId") REFERENCES "TBL_TASK"("tbl_task_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TBL_CMTS" ADD CONSTRAINT "TBL_CMTS_tbl_cmts_userId_fkey" FOREIGN KEY ("tbl_cmts_userId") REFERENCES "TBL_USER"("tbl_user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
