import React from "react"

import '../../styles.css';

export default function ActivityItem(props) {
    return(
        <li className={`${props.item.rows} bg-white p-5 text-center rounded-xl shadow-xl`}>
            <h2 className="text-3xl lg:text-4xl font-bold">
                {props.item.year}
            </h2>
            <h3 className="text-2xl mt-2 lg:text-3xl">
                {props.item.text}
            </h3>
            <h4 className="text-xl mb-2 lg:text-2xl">
                {props.item.type}
            </h4>
            <p className="text-lg mt-7 lg:text-2xl">
                {props.item.description}
            </p>
        </li>
    )
}