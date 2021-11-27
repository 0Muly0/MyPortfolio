import React from "react"

import '../../styles.css';

export default function IconItem(props) {
    return(
        <form action={props.item.link} method="get" target="_blank"
              className="h-1/5 flex justify-center items-center">
            <button className="h-12 w-12 bg-white flex justify-center items-center rounded-lg">
                <img src={process.env.PUBLIC_URL + props.item.src} alt="icon" height={props.item.hw} width={props.item.hw}/>
            </button>
        </form>
    )

    /*
    */
}