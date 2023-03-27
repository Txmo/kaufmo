import React from "react";

interface ShoppingActionBarProps {
    value: string
    changeHandler(s: string): void
}

export default function ShoppingActionBar({ value, changeHandler }: ShoppingActionBarProps) {
    return (
        <div className="shopping-action-bar">
            <input type="text" placeholder="Add item..." value={value} onChange={(e) => { changeHandler(e.target.value) }} />
            <button type="button">Add</button>
        </div>
    )
}