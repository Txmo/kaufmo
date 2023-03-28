import React from "react";

interface ShoppingItemProps {
    id: number
    name: string
    removeHandler(id: number): void
}

export default function ShoppingItem({ id, name, removeHandler }: ShoppingItemProps) {

    return (
        <li id={id.toString()}><span>{name}</span><button onClick={(e) => { removeHandler(id) }} type="button">Remove</button></li>
    )
}

export type { ShoppingItemProps as ShoppingItemPropsType }