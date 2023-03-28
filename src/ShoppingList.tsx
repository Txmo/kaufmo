import React from "react";
import ShoppingItem, { ShoppingItemPropsType } from "./ShoppingItem";

interface ShoppingListProps {
    list: Array<string>
    removeHandler(id: number): void
}

export default function ShoppingList({ list, removeHandler }: ShoppingListProps) {
    const elems: Array<JSX.Element> = [];
    list.forEach((item, index) => {
        elems.push(<ShoppingItem id={index} name={item} removeHandler={removeHandler} />)
    });
    return (
        <ul className="shopping-list">
            {elems}
        </ul>
    )
}