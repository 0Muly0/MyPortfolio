import React from "react"

import '../../styles.css';

import eduData from "./eduData"
import activityData from "./activityData"
import EduItem from "./EduItem"
import ActivityItem from "./ActivityItem"

export default function EduAndActivities() {
    const eduItems = eduData.map(item => < EduItem key={item.id} item={item} />)
    const activityItems = activityData.map(item => < ActivityItem key={item.id} item={item}/> )

    return(
        <div style={{height: 2150}} className="grid grid-cols-2">
            <ul dir="rtl" className="pr-3 lg:pr-0 lg:mr-3 lg:mt-50 list-disc list-outside grid grid-rows-12 gap-y-10">
                {eduItems}
            </ul>
            <ul className="pl-3 lg:pr-5 pt-52 pb-80 list-disc list-outside grid grid-rows-9 gap-y-10 border-l-4 border-gray-500">
                {activityItems}
            </ul>
        </div>
    )
}