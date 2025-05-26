/*
  Warnings:

  - Added the required column `owner_id` to the `oganization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_owner_id` to the `oganization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "oganization" ADD COLUMN     "owner_id" UUID NOT NULL,
ADD COLUMN     "user_owner_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "oganization" ADD CONSTRAINT "oganization_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
