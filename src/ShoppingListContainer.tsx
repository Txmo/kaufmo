import React, { useState } from "react"
import ShoppingActionBar from "./ShoppingActionBar"
import ShoppingList from "./ShoppingList"

export default function ShoppingListContainer() {
    const [itemInput, setItemInput] = useState("");
    const [itemList, setItemList] = useState(new Array<string>());

    function addItem(name: string): void {
        if (name.length === 0) {
            return
        }
        const newItemList = Array.from(itemList);
        newItemList.push(name);
        setItemList(newItemList)
    }

    function removeItem(id: number): void {
        const newItemList = itemList.filter((v, index) => index !== id)
        setItemList(newItemList);
    }

    return (
        <div className="shopping-list-container">
            <ShoppingList list={itemList} removeHandler={removeItem} />
            <ShoppingActionBar addHandler={addItem} value={itemInput} changeHandler={setItemInput} />
        </div>
    )
}