import React from "react"

import '../../styles.css';

export default function EduItem(props) {
    return(
        <li className={`${props.item.rows} bg-white p-5 text-center rounded-xl shadow-xl flex justify-center items-center`}>
            <div>
                <h2 className="text-4xl font-bold">
                    {props.item.year}
                </h2>
                <h3 className="pt-5 text-3xl">
                    {props.item.text}
                </h3>
                <p className="pt-3 text-xl">
                    {props.item.voto}
                </p>
            </div>
        </li>
    )
}