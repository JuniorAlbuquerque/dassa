/*
  Warnings:

  - You are about to drop the `FinancialHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FinancialHistory" DROP CONSTRAINT "FinancialHistory_productTransaction_id_fkey";

-- DropTable
DROP TABLE "FinancialHistory";

-- CreateTable
CREATE TABLE "financial_history" (
    "id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "financial_date" TIMESTAMP(3),
    "type" "FinancialHistoryType" NOT NULL,
    "productTransaction_id" TEXT,

    CONSTRAINT "financial_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "financial_history" ADD CONSTRAINT "financial_history_productTransaction_id_fkey" FOREIGN KEY ("productTransaction_id") REFERENCES "product_transaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;
