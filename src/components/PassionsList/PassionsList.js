import React from "react"

import '../../styles.css';

import passionsData from "./passionsData";
import PassionItem from "./PassionItem";

export default function PassionsList() {
    const passionItems = passionsData.map(item => < PassionItem key={item.id} item={item}/>)

    return(
        <div className="flex-col justify-evenly items-center">
            {passionItems}
        </div>
    )
}