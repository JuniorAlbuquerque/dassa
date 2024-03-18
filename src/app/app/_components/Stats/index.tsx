import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/utils/currency";
import { CircleDollarSign, PackageIcon } from "lucide-react";
import { getData } from "../../_services";

export const Stats = async () => {
  const data = await getData();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Entradas</CardTitle>
          <CircleDollarSign className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatCurrency(data?.financial?.revenue_value)}
          </div>
          <p className="text-xs text-muted-foreground">
            +2.1% comparado ao mês passado
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Saídas</CardTitle>
          <CircleDollarSign className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatCurrency(data?.financial?.expense_value)}
          </div>
          <p className="text-xs text-muted-foreground">
            +2% comparado ao mês passado
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Produtos em estoque
          </CardTitle>
          <PackageIcon className="h-4 w-4" aria-hidden="true" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {data?.products?.stock_in || 0}
          </div>
          <p className="text-xs text-muted-foreground">
            +2% comparado ao mês passado
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Produtos Vendidos
          </CardTitle>
          <PackageIcon className="h-4 w-4" aria-hidden="true" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {data?.products?.stock_out || 0}
          </div>
          <p className="text-xs text-muted-foreground">
            +2% comparado ao mês passado
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
