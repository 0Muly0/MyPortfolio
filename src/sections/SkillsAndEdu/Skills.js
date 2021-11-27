import React from "react"

import '../../styles.css';

import SkillsList from "../../components/SkillsList/SkillsList";
import Title from "../../components/Title";

export default function Skills() {
    return(
        <div className="border-t-2 border-white">
            <div className="mx-5 md:mx-16 lg:mx-24 xl:mx-56 pt-9 flex justify-start">
                <Title section="My Skills..." />
            </div>
            <div className="ml-5 mr-8 md:mx-16 lg:mx-24 xl:mx-56 py-5 flex justify-center">
                <SkillsList />
            </div>
        </div>
    )
}