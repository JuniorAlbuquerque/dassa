import { Fragment } from "react";
import { getProducts } from "../_services";
import { ProductSaleList } from "./_components/product-list";

export default async function Page() {
  const data = await getProducts();

  return (
    <Fragment>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Venda</h2>
      </div>

      <div className="flex gap-8">
        <ProductSaleList data={data} />
      </div>
    </Fragment>
  );
}
