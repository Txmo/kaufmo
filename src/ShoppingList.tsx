import React from "react";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList() {
    const list = [];
    for (let i = 0; i < 20; ++i) {
        list.push(<ShoppingItem id={i} name={`My Item ${i}`} />)
    }
    return (
        <ul className="shopping-list">
            {list}
        </ul>
    )
}