-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('PIX', 'MONEY', 'CARD');

-- AlterTable
ALTER TABLE "financial_history" ADD COLUMN     "payment_method" "PaymentMethod";
