import React from "react";
import ShoppingItem from "./ShoppingItem";

interface ShoppingListProps {
    list: Array<string>
    removeHandler(id: number): void
}

export default function ShoppingList({ list, removeHandler }: ShoppingListProps) {
    const elems: Array<JSX.Element> = [];
    list.forEach((item, index) => {
        elems.push(<ShoppingItem key={index} id={index} name={item} removeHandler={removeHandler} />)
    });
    return (
        <ul className="shopping-list">
            {elems}
        </ul>
    )
}