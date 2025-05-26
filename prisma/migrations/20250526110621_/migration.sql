/*
  Warnings:

  - A unique constraint covering the columns `[organization_info_id]` on the table `oganization` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `avatar` to the `oganization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_info_id` to the `oganization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "oganization" ADD COLUMN     "avatar" TEXT NOT NULL,
ADD COLUMN     "organization_info_id" BIGINT NOT NULL;

-- CreateTable
CREATE TABLE "organization_info" (
    "organize_id" BIGINT NOT NULL,
    "website" VARCHAR(100),
    "description" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "organization_info_organize_id_key" ON "organization_info"("organize_id");

-- CreateIndex
CREATE UNIQUE INDEX "oganization_organization_info_id_key" ON "oganization"("organization_info_id");

-- AddForeignKey
ALTER TABLE "oganization" ADD CONSTRAINT "oganization_organization_info_id_fkey" FOREIGN KEY ("organization_info_id") REFERENCES "organization_info"("organize_id") ON DELETE CASCADE ON UPDATE CASCADE;
