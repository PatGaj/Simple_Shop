import React from "react";
import OrderItem from "./OrderItem";

type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  category: { name: string };
  quantity: number;
  note?: string;
};

type OrderListProps = {
  items: Product[];
  protections: Record<string, boolean>;
  onToggleProtection: (id: string) => void;
};

export default function OrderList({ items, protections, onToggleProtection }: OrderListProps) {
  if (items.length === 0) return <div>Nie ma produktów do zamówienia.</div>;

  return (
    <div className="flex flex-col w-full gap-y-6">
      {items.map((p) => (
        <OrderItem
          key={p.id}
          id={p.id}
          name={p.name}
          imageUrl={p.imageUrl}
          category={p.category.name}
          price={p.price}
          quantity={p.quantity}
          note={p.note}
          protection={protections[p.id]}
          onToggleProtection={onToggleProtection}
        />
      ))}
    </div>
  );
}