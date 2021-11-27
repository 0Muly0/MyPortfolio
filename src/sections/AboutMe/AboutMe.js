import React from "react"

import '../../styles.css';

import Title from "../../components/Title";
import PassionsList from "../../components/PassionsList/PassionsList";
import IconsList from "../../components/IconsList/IconsList";

export default function AboutMe() {
    return(
        <div className="border-t-2 border-white flex-col">
            <div className="ml-5 mr-8 md:mx-16 lg:mx-24 xl:mx-56 pt-9 flex justify-start"> {/* About Me */}
                <Title section="About Me..." />
            </div>
            <div className= "mt-6 ml-5 mr-8 md:mx-16 lg:mx-24 xl:mx-56 grid grid-cols-1 lg:grid-cols-12 gap-y-7">
                <p className="bg-white p-4 text-2xl text-gray-500 rounded-lg shadow-lg col-span-11">
                    My name is Lucia, i'm 21 years old and i'm currently majoring in IT
                    Engeenering at Politecnico di Milano. <br/>
                    Since i was a child i've always been surrounded by technology, which led
                    me to develop a real passion for everything concerning the field. Thanks to high school i found the
                    path i truly wanted to purse in life but, due to the large amout of school commitments, i didn’t
                    have much time to put my passion and ability to work. <br/>
                    Now that i gathered a lot more theoretical kowledges through university courses and self teaching,
                    I'm really looking for meaningful experiences to help me enrich my knowledges about programming
                    languages and to lay solid foundations for my future and career.
                    But mostly to keep on learning and exploring the IT field, which i truly love.
                </p>
                <div className="lg:col-span-1">
                    <IconsList />
                </div>
            </div>
            <div className="mt-5 ml-5 mr-8 md:mx-16 lg:mx-24 xl:mx-56 pt-10 pt-5 flex justify-end"> {/* My Passions */}
                <Title section="My Passions" />
            </div>
            <div className="ml-5 mr-8 md:mx-16 lg:mx-24 xl:mx-56 py-9 border-b-2 flex justify-center">
                <PassionsList />
            </div>
        </div>
    )
}