import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Delete, FileEditIcon, History, Trash2 } from "lucide-react";
import { Fragment } from "react";
import { getProducts } from "../_services";
import { formatCurrency } from "@/utils/currency";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const data = await getProducts();

  return (
    <Fragment>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Inventário</h2>
        <div className="flex items-center space-x-2">
          <Link href="stock/new">
            <Button variant="success">Cadastrar Produto</Button>
          </Link>
        </div>
      </div>

      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"></TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Preço de Compra</TableHead>
              <TableHead>Preço de Venda</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Image
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="https://fakeimg.pl/200x200?text=Product&font=bebas"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">{product?.name}</TableCell>
                <TableCell>{formatCurrency(product?.purchase_price)}</TableCell>
                <TableCell>{formatCurrency(product?.sale_price)}</TableCell>
                <TableCell>{product?.quantity}</TableCell>
                <TableCell className="text-right">
                  <Button size="icon" variant="ghost">
                    <History className="w-4 h-4" />
                    <span className="sr-only">Histórico</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <FileEditIcon className="w-4 h-4" />
                    <span className="sr-only">Editar</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Trash2 className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Fragment>
  );
}
