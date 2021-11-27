import React from "react"

import '../../styles.css';

import EduAndActivities from "../../components/EduList/EduAndActivities";
import Title from "../../components/Title";

export default function SkillsAndEdu() {
    return(
        <div className="border-t-2 border-white">
            <div className="ml-5 mr-8 md:mx-16 lg:mx-24 xl:mx-56 pt-9 flex justify-start"> {/* About Me */}
                <Title section="My Education..." />
            </div>
            <div className="my-10 ml-5 mr-8 md:mx-16 lg:mx-24 xl:mx-56">
                <EduAndActivities />
            </div>
        </div>
    )
}