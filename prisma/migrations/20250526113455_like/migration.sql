-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "allow_comment" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_hidden" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "like_like" BOOLEAN NOT NULL DEFAULT true;
