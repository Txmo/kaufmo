import React from "react";

interface ShoppingItemProps {
    id: number
    name: string
    removeHandler(id: number): void
}

export default function ShoppingItem({ id, name, removeHandler }: ShoppingItemProps) {

    return (
        <li id={id.toString()}><span>{name}</span><button onClick={() => { removeHandler(id) }} type="button">&#x1f5d9;</button></li>
    )
}

export type { ShoppingItemProps as ShoppingItemPropsType }