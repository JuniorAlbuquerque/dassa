import { SaleData } from "@/server/schemas/sale";
import { ResponseMessage } from "../global";

export type SaleImplementation = {
  registerSale: (sale: SaleData) => Promise<ResponseMessage>;
};
