"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFieldArray, useForm } from "react-hook-form";
import { Fragment, useState } from "react";
import { Suppliers } from "../../_components/Suppliers";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputCurrency from "@/components/ui/input-currency";
import {
  CreateProductData,
  createProductSchema,
} from "@/server/schemas/product";
import { useSession } from "next-auth/react";
import { createProduct } from "../../_services/product-service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";

export const NewProductForm = () => {
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const router = useRouter();

  const form = useForm<CreateProductData>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: "",
      description: "",
      purchase_price: 0,
      sale_price: 0,
      supplier_id: "",
      variants: [
        {
          id: uuidv4(),
          color: "",
          quantity: 0,
          size: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "variants",
  });

  const onSubmit = async (data: CreateProductData) => {
    try {
      setLoading(true);
      await createProduct({
        ...data,
        store_org_id: session?.data?.user?.store_org,
        user_id: session?.data?.user?.id,
      });

      toast.success("Sucesso", {
        description: "Produto cadastrado com sucesso",
      });

      router.back();
    } catch (error) {
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  console.log(form.formState.errors);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-400">
              Informações do produto
            </CardTitle>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome" {...field} />
                  </FormControl>
                  {/* <FormDescription>asdf</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Descrição"
                      {...field}
                      value={field.value!}
                    />
                  </FormControl>
                  {/* <FormDescription>asdf</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="purchase_price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço de compra</FormLabel>
                  <FormControl>
                    <InputCurrency placeholder="Preço de compra" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sale_price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço de venda</FormLabel>
                  <FormControl>
                    <InputCurrency placeholder="Preço de venda" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantidade</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Quantidade"
                      {...field}
                      onChange={(event) => {
                        field.onChange(Number(event.target.value));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            {/* <FormField
            control={form.control}
            name="supplier_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fornecedor</FormLabel>
                <FormControl>
                  <div>
                    <Suppliers />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-400">
                Variantes
              </span>
              <Button
                variant="outline"
                type="button"
                onClick={() => {
                  append({
                    id: uuidv4(),
                    color: "",
                    quantity: 0,
                    size: "",
                  });
                }}
              >
                Adicionar variante
              </Button>
            </CardTitle>
          </CardHeader>

          {fields?.length > 0 && (
            <CardContent className="flex flex-col gap-4">
              {fields?.map((field, index: number) => (
                <div
                  className={cn(
                    "grid sm:grid-cols-[1fr_1fr_1fr_40px] items-start gap-4"
                  )}
                  key={field.id}
                >
                  <FormField
                    control={form.control}
                    name={`variants.${index}.color`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cor</FormLabel>
                        <FormControl>
                          <Input placeholder="Cor" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`variants.${index}.size`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tamanho</FormLabel>
                        <FormControl>
                          <Input placeholder="Tamanho" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`variants.${index}.quantity`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Quantidade</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Quantidade"
                            {...field}
                            type="number"
                            onChange={(event) => {
                              field.onChange(Number(event.target.value));
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    size="icon"
                    variant="secondary"
                    className="mt-8"
                    disabled={index === 0}
                    type="button"
                    onClick={() => {
                      console.log(index);
                      remove(index);
                    }}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
            </CardContent>
          )}
        </Card>

        <Link href="/app/stock">
          <Button variant="secondary" type="button">
            Cancelar
          </Button>
        </Link>
        <Button
          className="ml-4"
          variant="success"
          type="submit"
          loading={loading}
        >
          Cadastrar
        </Button>
      </form>
    </Form>
  );
};
