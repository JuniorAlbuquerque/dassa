/*
  Warnings:

  - Added the required column `updated_at` to the `financial_history` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "financial_history" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "product_transaction" ADD COLUMN     "discount" DOUBLE PRECISION,
ADD COLUMN     "value" DOUBLE PRECISION;
