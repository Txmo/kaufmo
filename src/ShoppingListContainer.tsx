import React, { useState } from "react"
import { createCallChain } from "typescript";
import ShoppingActionBar from "./ShoppingActionBar"
import ShoppingList from "./ShoppingList"

export default function ShoppingListContainer() {
    const storageItem = localStorage.getItem('kaufmo_shopping_list');
    let initList: Array<string>;
    if (storageItem !== null) {
        try {
            initList = JSON.parse(storageItem);
        } catch (e) {
            initList = Array<string>();
        }
    } else {
        initList = Array<string>();
    }
    const [itemInput, setItemInput] = useState("");
    const [itemList, setItemList] = useState(initList);

    function addItem(name: string): void {
        if (name.length === 0) {
            return
        }
        const newItemList = Array.from(itemList);
        newItemList.push(name);
        setItemList(newItemList)
        localStorage.setItem('kaufmo_shopping_list', JSON.stringify(newItemList));
    }

    function removeItem(id: number): void {
        const newItemList = itemList.filter((v, index) => index !== id)
        setItemList(newItemList);
        localStorage.setItem('kaufmo_shopping_list', JSON.stringify(newItemList));
    }

    return (
        <div className="shopping-list-container">
            <ShoppingList list={itemList} removeHandler={removeItem} />
            <ShoppingActionBar addHandler={addItem} value={itemInput} changeHandler={setItemInput} />
        </div>
    )
}