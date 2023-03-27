import React from "react";

interface ShoppingItemProps {
    id: number
    name: string
}

export default function ShoppingItem({ id, name }: ShoppingItemProps) {

    return (
        <li id={`shopping-item-${id}`}>{name}</li>
    )
}