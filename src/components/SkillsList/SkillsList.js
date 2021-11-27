import React from "react"

import '../../styles.css';

import skillsData from "./skillsData"
import SkillItem from "./SkillItem"

export default function SkillsList() {
    const skillItems = skillsData.map(item => < SkillItem key={item.id} item={item} />)

    return(
        <div className="w-full flex-col justify-evenly items-center">
            {skillItems}
        </div>
    )
}