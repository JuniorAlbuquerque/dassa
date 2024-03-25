import { Fragment } from "react";
import { NewProductForm } from "../_components/new-product-form";

export default function Page() {
  return (
    <Fragment>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Novo Produto</h2>
      </div>

      <NewProductForm />
    </Fragment>
  );
}
