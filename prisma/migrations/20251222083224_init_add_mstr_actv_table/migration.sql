-- CreateTable
CREATE TABLE "MSTR_PRIO" (
    "mstr_prio_id" SERIAL NOT NULL,
    "mstr_prio_desc" VARCHAR(255) NOT NULL,

    CONSTRAINT "MSTR_PRIO_pkey" PRIMARY KEY ("mstr_prio_id")
);

-- CreateTable
CREATE TABLE "MSTR_ACTV" (
    "mstr_actv_id" SERIAL NOT NULL,
    "mstr_actv_desc" VARCHAR(255) NOT NULL,

    CONSTRAINT "MSTR_ACTV_pkey" PRIMARY KEY ("mstr_actv_id")
);

-- CreateTable
CREATE TABLE "MSTR_STATUS" (
    "mstr_status_id" SERIAL NOT NULL,
    "mstr_status_desc" VARCHAR(255) NOT NULL,

    CONSTRAINT "MSTR_STATUS_pkey" PRIMARY KEY ("mstr_status_id")
);

-- CreateTable
CREATE TABLE "TBL_PROJECT" (
    "tbl_project_id" SERIAL NOT NULL,
    "tbl_project_name" VARCHAR(100) NOT NULL,
    "tbl_project_desc" TEXT,
    "tbl_project_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tbl_project_updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TBL_PROJECT_pkey" PRIMARY KEY ("tbl_project_id")
);

-- CreateTable
CREATE TABLE "TBL_TASK" (
    "tbl_task_id" SERIAL NOT NULL,
    "tbl_task_title" VARCHAR(255) NOT NULL,
    "tbl_task_desc" TEXT,
    "tbl_task_dueDate" TIMESTAMP(3),
    "tbl_task_completedAt" TIMESTAMP(3),
    "tbl_task_projectId" INTEGER NOT NULL,
    "tbl_task_userId" INTEGER,
    "tbl_task_statusId" INTEGER NOT NULL,
    "tbl_task_priorityId" INTEGER NOT NULL,
    "tbl_task_actvId" INTEGER NOT NULL,
    "tbl_task_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tbl_task_updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TBL_TASK_pkey" PRIMARY KEY ("tbl_task_id")
);

-- CreateTable
CREATE TABLE "TBL_USER" (
    "tbl_user_id" SERIAL NOT NULL,
    "tbl_user_username" VARCHAR(50) NOT NULL,
    "tbl_user_email" VARCHAR(100) NOT NULL,
    "tbl_user_password" VARCHAR(255) NOT NULL,
    "tbl_user_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tbl_user_updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TBL_USER_pkey" PRIMARY KEY ("tbl_user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TBL_USER_tbl_user_username_key" ON "TBL_USER"("tbl_user_username");

-- CreateIndex
CREATE UNIQUE INDEX "TBL_USER_tbl_user_email_key" ON "TBL_USER"("tbl_user_email");

-- AddForeignKey
ALTER TABLE "TBL_TASK" ADD CONSTRAINT "TBL_TASK_tbl_task_priorityId_fkey" FOREIGN KEY ("tbl_task_priorityId") REFERENCES "MSTR_PRIO"("mstr_prio_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TBL_TASK" ADD CONSTRAINT "TBL_TASK_tbl_task_projectId_fkey" FOREIGN KEY ("tbl_task_projectId") REFERENCES "TBL_PROJECT"("tbl_project_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TBL_TASK" ADD CONSTRAINT "TBL_TASK_tbl_task_statusId_fkey" FOREIGN KEY ("tbl_task_statusId") REFERENCES "MSTR_STATUS"("mstr_status_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TBL_TASK" ADD CONSTRAINT "TBL_TASK_tbl_task_userId_fkey" FOREIGN KEY ("tbl_task_userId") REFERENCES "TBL_USER"("tbl_user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TBL_TASK" ADD CONSTRAINT "TBL_TASK_tbl_task_actvId_fkey" FOREIGN KEY ("tbl_task_actvId") REFERENCES "MSTR_ACTV"("mstr_actv_id") ON DELETE RESTRICT ON UPDATE CASCADE;
