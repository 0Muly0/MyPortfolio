import React from "react"
import { HashLink as Link } from 'react-router-hash-link';

import './../styles.css';

export default function Navbar() {
    return(
        <nav className="sm:w-full border-b-2 border-white flex items-center">
            <div className="w-1/2 pl-5 flex justify-start"> {/* Left Side */}
                <p className="text-lg md:text-2xl lg:text-4xl text-white">
                    MY PORTFOLIO
                </p>
            </div>
            <div className="w-1/2 pr-5 text-sm md:text-md lg:text-xl text-white text-center flex justify-end"> {/* Right Side */}
                <Link to="/MyPortfolio/about" className="mr-6">
                    About Me
                </Link>
                <Link to="/MyPortfolio/skills" className="mr-6">
                    Skills
                </Link>
                <Link to="/MyPortfolio/edu" className="mr-6">
                    Education
                </Link>
                <Link to="/MyPortfolio/contact">
                    Contact Me
                </Link>
            </div>
        </nav>
    )
}