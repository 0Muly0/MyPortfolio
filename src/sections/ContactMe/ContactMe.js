import React from "react"

import '../../styles.css';

import Form from "./Form"

export default function ContactMe() {
    return(
        <div className="py-20 border-t-2 border-white">
            <div className="mx-5 md:mx-16 lg:mx-24 xl:mx-56 flex justify-center items-center">
                <div className="bg-white p-4 rounded-3xl shadow-lg flex">
                    <div className="w-1/2 flex justify-center items-center">
                        <img src={process.env.PUBLIC_URL + "/images/graphics/contactme.jpg"} alt="contact me" height="1000" width="1000"/>
                    </div>
                    <div className="w-1/2 p-3 flex-col">
                        <h2 className="mb-6 text-gray-500 text-4xl font-bold">
                            Send me a message
                        </h2>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}