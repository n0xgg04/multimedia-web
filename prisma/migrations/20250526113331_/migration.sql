/*
  Warnings:

  - A unique constraint covering the columns `[user_id,organization_id]` on the table `user_follow_organizations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,organization_id]` on the table `user_rate_organizations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "ACCOUNT_TYPE" ADD VALUE 'ADMIN';

-- CreateTable
CREATE TABLE "views" (
    "id" BIGSERIAL NOT NULL,
    "post_id" BIGINT NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "views_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "views_post_id_user_id_key" ON "views"("post_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_follow_organizations_user_id_organization_id_key" ON "user_follow_organizations"("user_id", "organization_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_rate_organizations_user_id_organization_id_key" ON "user_rate_organizations"("user_id", "organization_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- AddForeignKey
ALTER TABLE "views" ADD CONSTRAINT "views_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "views" ADD CONSTRAINT "views_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
