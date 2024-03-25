-- AlterTable
ALTER TABLE "product" ALTER COLUMN "quantity" DROP NOT NULL;

-- CreateTable
CREATE TABLE "product_variant" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "color" TEXT,
    "size" TEXT,
    "quantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "product_variant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_variant" ADD CONSTRAINT "product_variant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
