import React from "react"
import ShoppingActionBar from "./ShoppingActionBar"
import ShoppingList from "./ShoppingList"

export default function ShoppingListContainer() {
    return (
        <div className="shopping-list-container">
            <ShoppingList />
            <ShoppingActionBar />
        </div>
    )
}