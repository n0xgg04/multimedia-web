/*
  Warnings:

  - Made the column `user_id` on table `comments` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "comments" ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "account_type" "ACCOUNT_TYPE" NOT NULL DEFAULT 'STUDENT';
