import React from "react"

import '../../styles.css';

import iconData from "./iconData";
import IconItem from "./IconItem"

export default function IconsList() {
    const iconItems = iconData.map(item => < IconItem key={item.id} item={item} />)

    return(
        <div className="w-full flex justify-evenly lg:h-full lg:flex-col lg:justify-evenly">
            {iconItems}
        </div>
    )
}