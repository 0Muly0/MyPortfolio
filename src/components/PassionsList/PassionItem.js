import React from "react"

import '../../styles.css';

export default function PassionItem(props) {
    return(
        <div className={`my-5 pb-6 flex ${props.item.selfalign}`}>
            <div className="bg-white md:w-11/12 2xl:w-2/3 py-3 pr-4 rounded-xl shadow-lg flex">
                <div className="w-1/2 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + props.item.img} alt={props.item.name} height="300" width="300"/>
                </div>
                <div className="w-1/2 ml-2 pl-4 pr-2 border-l-2">
                    <h3 className="mb-3 text-gray-500 text-2xl lg:text-4xl">
                        {props.item.name}
                    </h3>
                    <p className="mb-3 text-gray-400">
                        {props.item.tell}
                    </p>
                </div>
            </div>
        </div>
    )
}