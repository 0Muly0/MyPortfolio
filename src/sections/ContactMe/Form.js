import React from "react"

import '../../styles.css';

export default function Form() {
    return(
        <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="mb-2 uppercase tracking-wide text-gray-700 text-xs font-bold block"
                           htmlFor="grid-first-name">
                        First Name
                    </label>
                    <input
                        className=" py-3 px-4 mb-3 appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name" type="text" placeholder="Jane" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-last-name">
                        Last Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name" type="text" placeholder="Doe" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-password">
                        E-mail
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email" type="email" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-password">
                        Message
                    </label>
                    <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500 h-48"
                        id="message"></textarea>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                    <button
                        className="shadow bg-gray-200 hover:bg-gray-200 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                        type="button">
                        Send
                    </button>
                </div>
            </div>
        </form>
    )
}