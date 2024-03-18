-- AlterTable
ALTER TABLE "financial_history" ADD COLUMN     "store_org_id" TEXT;

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "store_org_id" TEXT,
ADD COLUMN     "supplier_id" TEXT;

-- AlterTable
ALTER TABLE "product_transaction" ADD COLUMN     "store_org_id" TEXT;

-- CreateTable
CREATE TABLE "supplier" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "telephone" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "cep" TEXT,
    "store_org_id" TEXT,

    CONSTRAINT "supplier_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "supplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_store_org_id_fkey" FOREIGN KEY ("store_org_id") REFERENCES "store_org"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_transaction" ADD CONSTRAINT "product_transaction_store_org_id_fkey" FOREIGN KEY ("store_org_id") REFERENCES "store_org"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "financial_history" ADD CONSTRAINT "financial_history_store_org_id_fkey" FOREIGN KEY ("store_org_id") REFERENCES "store_org"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplier" ADD CONSTRAINT "supplier_store_org_id_fkey" FOREIGN KEY ("store_org_id") REFERENCES "store_org"("id") ON DELETE SET NULL ON UPDATE CASCADE;
