"use client";
import { useReducer } from "react";
import { Input, InputProps } from "./input";

type TextInputProps = {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: number;
} & InputProps;

const moneyFormatter = Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  currencyDisplay: "symbol",
  currencySign: "standard",
  style: "currency",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function InputCurrency(props: TextInputProps) {
  const initialValue = props?.value ? moneyFormatter.format(props?.value) : "";

  const [value, setValue] = useReducer((_: any, next: string) => {
    const digits = next.replace(/\D/g, "");
    return moneyFormatter.format(Number(digits) / 100);
  }, initialValue);

  function handleChange(realChangeFn: Function, formattedValue: string) {
    const digits = formattedValue.replace(/\D/g, "");
    const realValue = Number(digits) / 100;
    realChangeFn && realChangeFn(realValue);
  }

  return (
    <Input
      {...props}
      type="text"
      onChange={(ev) => {
        setValue(ev.target.value);
        handleChange(props?.onChange!, ev.target.value);
      }}
      value={value}
    />
  );
}
