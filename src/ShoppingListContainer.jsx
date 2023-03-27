import React, { useState } from "react"
import ShoppingActionBar from "./ShoppingActionBar"
import ShoppingList from "./ShoppingList"

export default function ShoppingListContainer() {
    const [itemInput, setItemInput] = useState("");

    return (
        <div className="shopping-list-container">
            <ShoppingList />
            <ShoppingActionBar value={itemInput} changeHandler={setItemInput} />
        </div>
    )
}