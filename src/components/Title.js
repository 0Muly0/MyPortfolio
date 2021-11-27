import React from "react"

import './../styles.css';

export default function Title(props) {
    return(
        <h2 className="text-white text-5xl font-bold">
            {props.section}
        </h2>
    )
}