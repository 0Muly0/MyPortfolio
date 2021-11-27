import React from "react"

import '../../styles.css';
import {HashLink as Link} from "react-router-hash-link";

export default function Footer() {
    return(
        <div className="bg-gray-600 pt-16 pb-10">
            <div className="ml-5 mr-8 md:mx-16 lg:mx-24 xl:mx-56 grid grid-cols-3 gap-x-2">
                <div className="col-span-1 grid grid-cols-1 gap-y-2"> {/* Links */}
                    <h3 className="text-gray-400 text-2xl font-bold">
                        EXPLORE
                    </h3>
                    <Link to="/MyPortfolio/about" className="mr-6 text-gray-200">
                        About Me
                    </Link>
                    <Link to="/MyPortfolio/skills" className="mr-6 text-gray-200">
                        Skills
                    </Link>
                    <Link to="/MyPortfolio/edu" className="mr-6 text-gray-200">
                        Education
                    </Link>
                    <Link to="/MyPortfolio/contact" className="mr-6 text-gray-200">
                        Contact Me
                    </Link>
                </div>
                <div className="text-center"> {/* Credits */}
                    <h3 className="text-gray-400 text-2xl font-bold">
                        CREDITS
                    </h3>
                    <div className="grid gap-y-2">
                        <a href='https://www.freepik.com/stories' target="_/blank" rel="noreferrer" className="pt-3 text-gray-200">Vectors by Stories</a>
                        <a href="https://iconmonstr.com/" target="_blank" rel="noreferrer" className="pt-3 text-gray-200">Icons by Iconmonstr</a>
                    </div>
                </div>
                <div className="text-right flex-col items-center justify-end">
                    <h3 className="text-gray-400 text-2xl font-bold">
                        CONTACTS
                    </h3>
                    <div className="mr-10 mt-3 grid gap-y-3 justify-end">
                        <form action="mailto:luciafamoso2000@gmail.com" method="get" target="_blank" rel="noreferrer"
                              className=" flex justify-center items-center">
                            <button className="h-8 w-8 bg-white flex justify-center items-center rounded-lg">
                                <img src={process.env.PUBLIC_URL + "/images/logos/email.svg"} alt="logo" height="25" width="25"/>
                            </button>
                        </form>
                        <form action="https://www.linkedin.com/in/lucia-famoso/" method="get" target="_blank" rel="noreferrer"
                              className="flex justify-center items-center">
                            <button className="h-8 w-8 bg-white flex justify-center items-center rounded-lg">
                                <img src={process.env.PUBLIC_URL + "/images/logos/linkedin.svg"} alt="logo" height="25" width="25"/>
                            </button>
                        </form>
                        <form action="https://twitter.com/xMulyx" method="get" target="_blank" rel="noreferrer"
                              className="flex justify-center items-center">
                            <button className="h-8 w-8 bg-white flex justify-center items-center rounded-lg">
                                <img src={process.env.PUBLIC_URL + "/images/logos/twitter.svg"} alt="logo" height="25" width="25"/>
                            </button>
                        </form>
                        <form action="https://github.com/0Muly0" method="get" target="_blank" rel="noreferrer"
                              className="flex justify-center items-center">
                            <button className="h-8 w-8 bg-white flex justify-center items-center rounded-lg">
                                <img src={process.env.PUBLIC_URL + "/images/logos/github.svg"} alt="logo" height="25" width="25"/>
                            </button>
                        </form>
                        <form action="https://t.me/OMulyO" method="get" target="_blank" rel="noreferrer"
                              className="flex justify-center items-center">
                            <button className="h-8 w-8 bg-white flex justify-center items-center rounded-lg">
                                <img src={process.env.PUBLIC_URL + "/images/logos/telegram.svg"} alt="logo" height="25" width="25"/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}