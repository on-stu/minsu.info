/*
  Warnings:

  - You are about to drop the column `authorName` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `subtitle` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `authorName`,
    DROP COLUMN `published`,
    DROP COLUMN `subtitle`;
