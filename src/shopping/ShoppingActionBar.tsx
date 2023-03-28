import React from "react";
import { ShoppingItemPropsType } from "./ShoppingItem";

interface ShoppingActionBarProps {
    addHandler(s: string): void
    value: string
    changeHandler(s: string): void
}

export default function ShoppingActionBar({ addHandler, value, changeHandler }: ShoppingActionBarProps) {
    return (
        <div className="shopping-action-bar">
            <input type="text" placeholder="Add item..." value={value} onChange={(e) => { changeHandler(e.target.value) }} />
            <button onClick={(e) => { addHandler(value) }} type="button">Add</button>
        </div>
    )
}