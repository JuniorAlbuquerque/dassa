import { Fragment } from "react";
import { getProducts } from "../_services";
import { ProductList } from "./_components/product-list";

export default async function Page() {
  const data = await getProducts();

  return (
    <Fragment>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Inventário</h2>
      </div>

      <div className="border shadow-sm rounded-lg px-4">
        <ProductList data={data} />
      </div>
    </Fragment>
  );
}
