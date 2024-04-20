/*
  Warnings:

  - Added the required column `real_price` to the `sale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sale" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "real_price" DOUBLE PRECISION NOT NULL;
