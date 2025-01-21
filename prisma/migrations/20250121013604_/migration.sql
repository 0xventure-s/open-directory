/*
  Warnings:

  - Added the required column `linkFounder` to the `Founder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Founder" ADD COLUMN     "linkFounder" TEXT NOT NULL;
