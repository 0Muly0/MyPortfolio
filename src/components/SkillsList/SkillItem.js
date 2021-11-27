import React from "react"

import '../../styles.css';

export default function SkillItem(props) {
    return(
        <div className={`bg-white my-9 py-4 px-3 rounded-xl shadow-lg flex justify-evenly items-center`}>
            <div className="flex justify-center items-center">
                <img src={process.env.PUBLIC_URL + props.item.icon} alt={props.item.name} height="50" width="50"/>
            </div>
            <div className="w-1/6 text-sm 2xl:text-2xl flex justify-center">
                <p className="text-gray-500">{props.item.name}</p>
            </div>
            <div className="bg-gray-200 w-4/6 mx-3 rounded-lg">
                <div className={`bg-yellow-300 ${props.item.width} px-3 rounded-lg flex justify-end items-center`}>
                    <p className="text-gray-700">{props.item.percent}</p>
                </div>
            </div>
            <div className="w-1/6 text-sm flex justify-center">
                <p className="text-gray-500 text-center">{props.item.descrip}</p>
            </div>
        </div>
    )
}