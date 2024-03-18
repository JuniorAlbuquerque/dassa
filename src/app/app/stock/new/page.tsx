import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Novo Produto</h2>
        {/* <div className="flex items-center space-x-2">
          <Button variant="secondary">Cancelar</Button>
        </div> */}
      </div>

      <form className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="product-name">Nome</Label>
            <Input id="product-name" placeholder="Nome" required />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="product-description">Descrição</Label>
            </div>
            <Input id="product-description" placeholder="Descrição" required />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="purchcase-price">Preço de compra</Label>
            </div>
            <Input id="purchcase-price" placeholder="Preço de compr" required />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="sale-price">Preço de venda</Label>
            </div>
            <Input id="sale-price" placeholder="Preço de venda" required />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="product-quantity">Quantidade</Label>
            </div>
            <Input id="product-quantity" placeholder="Quantidade" required />
          </div>
        </div>

        <Link href="/app/stock">
          <Button variant="secondary">Cancelar</Button>
        </Link>
        <Button className="ml-4" variant="success">
          Cadastrar
        </Button>
      </form>
    </Fragment>
  );
}
